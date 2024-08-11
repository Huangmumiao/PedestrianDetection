<template>
    <!-- 这个组件将ant的card和Statistic组件组合并引入弹出菜单 -->
    <!-- 这个组件用于带有化验取样时间的指标 -->
    <div class="oneControlContainer">
      <div class="inner">
        <!-- 第一行：标题行+上下限调整 -->
        
      <span class="titleText" style="position: relative; left: 24px;">
      {{ props.title + "  ( " + props.suffix + " )" }}
      </span>
      <div class="rangeAllStyle">
        <a-tooltip title="目标值上下限调整">
          <a-popover trigger="click" class="popoverButton">
            <template #content>
              <div class="popoverContent">
                <span class="titleText"> 上 限 </span>
                <a-slider
                  v-model:value="upperValue"
                  :min="1"
                  :max="500"
                  style="width: 150px"
                />
                <span class="titleText"> 下 限 </span>
                <a-slider
                  v-model:value="lowerValue"
                  :min="1"
                  :max="500"
                  style="width: 150px"
                />
              </div>
            </template>
            <SettingTwoTone style="font-size: 25px" />
          </a-popover>
        </a-tooltip>
      </div>
        <!-- 第二行：目标值和数字输入+设定时间 -->
        <span class="partText" >设 定 值</span>
        <div class="inputNumStyle">
          <div>
          <div v-if="!wholemode">
           <a-input-number
            v-model:value="dataTargetZJ"
            :min="lowerValue"
            :max="upperValue"
            :bordered="false"
            class="inputStyle"
            :controls="false"
            @click="targetValueClickChange"
            @pressEnter="makeModelOpenF"
            /> 
            <div v-if="!wholemode" class="updownStyle">
                <div>
                    <a-button
                        class="bottomStyle"
                        type="primary"
                        @click="upCircleClicker"
                        size="small"
                        @mouseleave="makeModelOpen"
                        :ghost="true"
                    >
                    <template #icon>
                        <UpOutlined class="iconStyle" />
                    </template>
                    </a-button>
                </div>
                <div class="rangeStyle">
                    <a-button
                    class="bottomStyle"
                    type="primary"
                    @click="downCircleClicker"
                    size="small"
                    @mouseleave="makeModelOpen"
                    :ghost="true"
                >
                <template #icon>
                    <DownOutlined class="iconStyle" />
                </template>
                </a-button>
                </div>
            </div>
            
            </div>
            <div v-if="wholemode">
              <a-statistic
              :value='dataTargetZN'
              :precision="1"
              :valueStyle="autoStyle"
              style="position: relative; left: 11px;top: -1px;"
              
            />
            </div>
          </div>
          
        </div>
        <div>
          <a-tooltip title="设定时间">
          <div class="dataTime"  >
            <a-statistic
              :value="timeTest"
              format="HH:mm"
              :valueStyle="timeStyle"
            />
          </div></a-tooltip>
        </div>
  
        <!-- 第三行：仪表 -->
        <span class="partText"> 检 测 值 </span>
        <a-statistic
          :value="FeedbackValue"
          :precision="1"
          :valueStyle="valueStyle"
          style="position: relative; left: 11px;top: -1px;"
        />
        
        <div></div>
        <span class="partText"> M / A </span>
        <!-- <a-statistic
          :value='feedbackValue'
          :precision="1"
          :valueStyle="valueStyle"
          style="position: relative; left: 11px"
        /> -->
        <div>
          <div class="autoStyle" v-if="!automode">自动</div>
          <div class="handStyle" v-if="automode">手动</div>
      </div>
        <div class="iconDivstyle"  >
          <UserOutlined class="iconStyle" style="color: red;" v-if="automode"/>
          <CloudServerOutlined class="iconStyle" style="color: #00FFFF;" v-if="!automode"/>

        </div>
  
        <!-- 第四行：化验 -->
        
        
        <a-modal
          v-model:open="modalOpen"
          title="修改目标值确认"
          @ok="handleModalOK"
          @cancel="handleModalCancel"
        >
          <span class="modeText">
            {{ "是否确认下发修改后的" + modalTitle + "的目标值" + dataTargetZJ }}
          </span>
        </a-modal>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted ,getCurrentInstance,watch} from "vue";
  import {
    SlidersTwoTone,
    UpCircleTwoTone,
    DownCircleTwoTone,
    UpOutlined,
    DownOutlined,
    BoxPlotTwoTone,
    SettingTwoTone,
    UserOutlined,
    CloudServerOutlined
  } from "@ant-design/icons-vue";
  const instance=getCurrentInstance();
  const bus =instance.appContext.config.globalProperties.$bus
  let wholemode=ref(false);
  // onMounted(()=>{
  //       bus.on('workingMode',data=>{automode.value=data;})
  //   })
  const props = defineProps({
    title: String,
    suffix: String,
    id:String,
    dataTargetZJ: Number,
    dataTargetZN:Number,
    dataFeedback:Number,
    min:Number,
    max:Number,
    timeTest:String,
    mode:Number,
  });
  const titleId=ref(props.id+'zjsp')
  let automode=ref(Boolean(props.mode));
  let min=props.min;
  let max=props.max;
  let minset=ref(props.minset);
  let maxset=ref(props.maxset);
  let timeTest=ref(props.timeTest);
  let dataTargetZJ =ref(props.dataTargetZJ) ;
  let dataTargetZN=ref(props.dataTargetZN);
  let FeedbackValue=ref(props.dataFeedback);
  let targetValueChange = ref(false);
  // let automode = ref(false);
    // 上限
    let upperValue = ref(props.max);
  // 上限
  let lowerValue =  ref(props.min);
  // 为了modal把title的空格去掉
  const modalTitle = ref("");
  
  function dataUpdate(){
    automode=ref(Boolean(props.mode));
    min=props.min;
    max=props.max;
    minset=ref(props.minset);
    maxset=ref(props.maxset);
    timeTest=ref(props.timeTest);
    dataTargetZJ =ref(props.dataTargetZJ) ;
    dataTargetZN=ref(props.dataTargetZN);
      // feedbackValue=parseInt(feedbackValue.va);
    FeedbackValue=ref(props.dataFeedback);
    // targetValueChange = ref(false);
    // let automode = ref(false);
      // 上限
    upperValue = ref(props.max);
    // 上限
    lowerValue =  ref(props.min);
    }

  const getModalTitle = (ele) => {
    modalTitle.value = ele.split(/[\t\r\f\n\s]*/g).join("");
  };
  
  // 数值和时间的style
  const valueStyle = {
    color: "#00D21F",
    fontWeight: "bolder",
    fontSize: "24px",
  };
  const autoStyle = {
    color: "#ff2700",
    fontWeight: "bolder",
    fontSize: "24px",
  };
  
  const timeStyle = {
    color: "#E8DC33",
    fontWeight: "bolder",
    fontSize: "18px",
  };
  
  // 目标值
  //   const targetValue = ref(30);
   
  
  // 向上按钮触发效果
    const upCircleClicker = () => {
        dataTargetZJ.value += 5;
        targetValueChange.value = true;
    };
  
  //   // 向下按钮触发效果
    const downCircleClicker = () => {
        dataTargetZJ.value -= 5;
      targetValueChange.value = true;
    };
  
  // 直接修改触发效果
  const targetValueClickChange = () => {
    targetValueChange.value = true;
  };
  
  // 如果发生修改弹出对话框让用户确认修改
  const modalOpen = ref(false);
  
  // 实现函数
  const makeModelOpen = () => {
    if (targetValueChange.value) {
      modalOpen.value = true;
      targetValueChange.value = false;
    }
  };
  
  // 输入框的单独处理
  function makeModelOpenF(e) {
    modalOpen.value = true;
  }
  

  let zjOut=ref(0)
  const handleModalOK = () => {
    zjOut.value=dataTargetZJ.value;
    modalOpen.value = false;
    targetValueChange.value = false;
    bus.emit(titleId.value,zjOut.value)
    // console.log(titleId.value,zjOut.value,dataTargetZJ.value,props.dataTargetZJ)
  };
  const handleModalCancel=()=>{
    dataTargetZJ.value=props.dataTargetZJ
  }



  watch(props,(newProps)=>{
    dataUpdate()
})
  
  onMounted(() => {
    getModalTitle(props.title);
    // dataUpdate()
    bus.on('workingMode',data=>{wholemode.value=data;})
  });
  </script>
  
  <style lang="scss" scoped>

  .inputNumStyle{
    display: grid;
    grid-template-columns: 30% 70%;
    /* position: absolute; */
    /* position: relative; */
    /* top: -0px; */

  }
  .rangeAllStyle{
    position: relative;
    top:8px;
    left: 0px;
    /* z-index: 10; */
  }
  .dataTime{
        position: relative;
        top:0px;
        left: 0px;
  
        grid-column-start: c2;
        grid-column-end: c4;
    }
  .oneControlContainer {
    width: 100%;
    height: 100%;
  
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    /* background-color: aqua; */
    /* background-color: transparent; */
    border-radius: 10px;
  
    .inner {
      width: 100%;
      height: 100%;
  
      display: grid;
      grid-template-columns: [c1] 30% [c2] 35% [c3] 34.9% [c4];
      grid-template-rows: repeat(4, 24.9%);
      gap: 0.1%;
      justify-items: center;
      align-items: center;
  
      .titleText {
        font-size: 20px;
        color: #93b7ed;
        font-weight: bolder;
        position: relative;
        top: 5px;
  
        grid-column-start: c1;
        grid-column-end: c3;
      }
  
      /* // 那俩单独箭头 */
      .arrowPart {
        width: 35px;
        height: 50px;
        position: absolute;
  
        top: 62px;
        right: 128px;
  
        display: grid;
        grid-template-rows: repeat(2, 50%);
        justify-items: center;
        align-items: center;
      }
  
      .partText {
        font-size: 18px;
        color: aliceblue;
        font-weight: bolder;
      }
    }
  }
  .iconDivstyle{
    position: relative;
    top: 3px;

  }
  .autoStyle{
    position: relative;
    top: 0px;
    left: 9px;
    color: #00FFFF;
    font-size: 18px;
    font-weight: bolder;
  }
  .handStyle{
    position: relative;
    font-size: 18px;
    font-weight: bolder;
    top: 0px;
    left: 9px;
    color: rgb(248, 9, 9);
  }
  .inputStyle{
    z-index: 3;
  }
  .updownStyle{
    width: 25px;
    height: 25px;
    /* background-color: aliceblue; */
    position: absolute;
    z-index: 6;
    top:66px;
    left: 165px;
    display: grid;
    grid-template-rows: 50% 50%;
  }
  .rangeStyle{
    top: 5px;
  }
  </style>
    <style scoped>
      /* .ant-statistic{
        font-size: 24px;
      } */

      .iconStyle{
        color: whitesmoke;
        zoom: 0.9;
        font-size: 20px
        }
        .bottomStyle{
          zoom: 0.6;
        }
    
      </style>
  