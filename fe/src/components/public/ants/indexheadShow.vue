<template>
  <div class="nameInputContainer">
    <div class="titleStyle">
      <span class="partName">   </span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle">RMSE </span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle">MSE</span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle">MAE</span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle"> MAPE</span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle">SMAPE</span>
    </div>
    <!-- 修改学习条件确认界面 -->
  </div>
</template>

<script setup>
import { stringType } from "ant-design-vue/es/_util/type";
import { ref } from "vue";

const props = defineProps({
    title: String,
    unit: String,
    id:String,
    precision:Number,
    hgRate:Number,
    useRate:Number,
    error:Number,
    mae:Number,
    mf:Number,
  });
// 直接修改触发效果
const valueStyle = {
    color: "#fffb0d",
    fontWeight: "bolder",
    fontSize: "16px",
  };

</script>

<style lang="scss" scoped>
.titleStyle{
  width: 100%;
  height: 100%;
  position: relative;
  left: 41px;
  top: 24px;
}
.textStyle{
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
    position: relative;
    // text-align: center;
}
.normalStyle{
    font-size: 16px;
    font-weight: bolder;
    color: green;
    position: relative;
}
.warningStyle{
    font-size: 16px;
    font-weight: bolder;
    color: yellow;
    position: relative;
}
.dangerStyle{
    font-size: 16px;
    font-weight: bolder;
    color: red;
    position: relative;
}
.dataShowStyle{
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 60% 30% 10%;

}
.nameInputContainer {
  width:95%;
  height: 100%;

  display: grid;
  // grid-template-columns: 60% 30% 10%;
  grid-template-rows: 25% 15% 15% 15% 15% 15%;

  align-items: center;
  justify-items: center;
  position: relative;
  left: 12px;
  top: -10px;
  text-align: center;

  .partName {
    position: relative;
    left: 12px;
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
