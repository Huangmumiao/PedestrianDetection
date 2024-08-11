<template>
  <div class="nameInputContainer">
    <span class="partName"> 控制模式 </span>
    <span class="autoMode" v-if="automode" >自动</span>
    <span class="handMode" v-if="!automode" >手动</span>
    <!-- 修改学习条件确认界面 -->
  </div>
</template>

<script setup>
import { stringType } from "ant-design-vue/es/_util/type";
import { ref } from "vue";

const props = defineProps({
    unit: String,
    id:String,
    value: Number,
  });

let automode=ref(Boolean(props.value));

function dataUpdate(){
    automode=ref(Boolean(props.value));
    }

// 直接修改触发效果
const valueStyle = {
    color: "#fffb0d",
    fontWeight: "bolder",
    fontSize: "16px",
  };

// watch(props,(newProps)=>{
//     dataUpdate()
// })
</script>

<style lang="scss" scoped>
.autoMode{
  font-size: 16px;
  font-weight: bolder;
  color: rgb(65, 231, 14);
  position: relative;
  left: -15px;
}
.handMode{
  font-size: 16px;
  font-weight: bolder;
  color: red;
  position: relative;
  left: -15px;
}
.nameInputContainer {
  width:95%;
  height: 100%;

  display: grid;
  grid-template-columns: 35% 90%;

  align-items: center;
  justify-items: center;
  position: relative;
  left: -10px;

  .partName {
    position: relative;
    left: 38px;
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
  }
  .dataShow {
    position: relative;
    left: 0px;
    font-size: 16px;
    font-weight: bolder;
    color:yellow;
  }
}
</style>
