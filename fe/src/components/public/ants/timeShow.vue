<template>
  <div class="nameInputContainer">
    <span class="partName"> 设定时间  </span>
    <span class="normalMode" >{{props.value}}</span>
    <!-- 修改学习条件确认界面 -->
  </div>
</template>

<script setup>
import { stringType } from "ant-design-vue/es/_util/type";
import { ref } from "vue";

const props = defineProps({
    id:String,
    value: String,
  });



// 直接修改触发效果
const valueStyle = {
    color: "#fffb0d",
    fontWeight: "bolder",
    fontSize: "18px",
  };

// watch(props,(newProps)=>{
//     dataUpdate()
// })
</script>

<style lang="scss" scoped>
.normalMode{
  font-size: 17px;
  font-weight: bolder;
  color: yellow;
}

.nameInputContainer {
  width:95%;
  height: 100%;

  display: grid;
  grid-template-columns: 40% 70%;

  align-items: center;
  justify-items: center;
  position: relative;
  left: -10px;

  .partName {
    position: relative;
    left: 30px;
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
  }
  .dataShow {
    position: relative;
    left: 12电流legend设置0px;
    font-size: 16px;
    font-weight: bolder;
    color:yellow;
  }
}
</style>
