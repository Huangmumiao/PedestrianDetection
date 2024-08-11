<template>
  <div class="nameInputContainer">
    <span class="partName" style="white-space: pre-wrap;"> {{ props.title }} </span>
    <a-input-number 
    v-model:value="sp" 
    :min="props.lowerValue" 
    :max="props.upperValue" 
    :bordered="true" 
    :controls="false"
      @click="setValueClickChange" @pressEnter="makeModelOpenF" :precision="props.precision" />
    <span class="partName"> {{ props.unit }}</span>
    <!-- 修改学习条件确认界面 -->
    <a-modal v-model:open="modalOpen" title="修改确认" @ok="handleModalOK" @cancel="handleModalCancel">
      <span class="modeText">
        {{ "是否确认修改：" + props.title + "：" + sp }}
      </span>
    </a-modal>
  </div>
</template>

<script setup>
import { stringType } from "ant-design-vue/es/_util/type";
import { ref, onMounted, getCurrentInstance, watch } from "vue";

const instance = getCurrentInstance();
const bus =instance.appContext.config.globalProperties.$bus
// const bus = instance.appContext.config.globalProperties.$bus
let wholemode = ref(false);


// const props = defineProps([
//   title: String,
//   unit:String,

//   "title",
//   "value",
//   "lowerValue",
//   "upperValue",
//   "precision",
//   "unit"
// ]);
const props = defineProps({
  title: String,
  unit: String,
  id: String,
  value: Number,
  lowerValue: Number,
  upperValue: Number,
  precision: Number,
});
let sp = ref(props.value);
const id = props.id;
const trendFinished = ref(true)

// 直接修改触发效果
const setValueClickChange = () => {
  setValueChange.value = true;
};

// 用于记忆是否发生了条件变化
const setValueChange = ref(false);

// 如果发生修改弹出对话框让用户确认修改
const modalOpen = ref(false);

function makeModelOpenF(e) {
  modalOpen.value = true;
  // spTemp.value = sp.value;
  // console.log(props.value)
  // console.log(sp.value)
}
const dataKeepFlag=ref(false)

function dataKeep(){
    // console.log('out')
    // console.log(sp.value ,props.value)
    sp.value  = props.value;
    bus.emit(id, sp.value)
  setTimeout(() => {
    dataKeep();
        }, 15000);
}

const handleModalOK = () => {
  modalOpen.value = false;
  setValueChange.value = false;
  bus.emit(id, sp.value)
  // console.log(id)
  // console.log(sp.value)
};
const handleModalCancel=()=>{
  sp.value  = props.value;
  }

watch(() => props.value, (newData) => {
  sp.value = props.value;
}, {
  deep: true
})
onMounted(()=>{
  // dataKeep()
})
// onMounted(() => {
//     getModalTitle(props.title);
//     // dataUpdate()
//     bus.on('workingMode',data=>{wholemode.value=data;})
//   });

</script>

<style lang="scss" scoped>
:deep(.ant-input-number .ant-input-number-input) {
  color: #964CF1;
  font-weight: bolder;
  font-size: 18px;
  text-align: center !important;
  }

.nameInputContainer {
  width: 95%;
  height: 100%;

  display: grid;
  grid-template-columns: 60% 30% 10%;

  align-items: center;
  justify-items: center;
  position: relative;
  left: -10px;

  .partName {
    position: relative;
    left: 12电流legend设置0px;
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
  }
}
</style>
