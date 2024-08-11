<template>
  <div class="nameInputContainer">
    <div class="titleStyle">
      <span class="partName"> {{ props.title }} </span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle"> </span>
      <a-statistic
            :value=" props.hgRate"
            :precision=" props.precision"
            :valueStyle="valueStyle"
            style="text-align: center;position: relative; left: 0px;top: -1px;color: green;"
          />
      <span class="textStyle">  </span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle"> </span>
      <a-statistic
            :value=" props.useRate"
            :precision=" props.precision"
            :valueStyle="valueStyle"
            style="position: relative; left: 0px;top: -1px;text-align: center"
          />
      <span class="textStyle">  </span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle"> </span>
      <a-statistic
            :value=" props.error"
            :precision=" props.precision"
            :valueStyle="valueStyle"
            style="text-align: center;position: relative; left: 0px;top: -1px;"
          />
      <span class="textStyle"> </span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle"> </span>
      <a-statistic
            :value=" props.mae"
            :precision=" props.precision"
            :valueStyle="valueStyle"
            style="text-align: center;position: relative; left: 0px;top: -1px;"
          />
      <span class="textStyle"> </span>
    </div>
    <div class="dataShowStyle">
      <span class="textStyle"> </span>
      <a-statistic
            :value=" props.mf"
            :precision=" props.precision"
            :valueStyle="valueStyle"
            style="text-align: center;position: relative; left: 0px;top: -1px;"
          />
      <span class="textStyle">  </span>
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
    color: "rgb(36, 188, 144)",
    fontWeight: "bolder",
    fontSize: "16px",
  };

</script>

<style lang="scss" scoped>
.titleStyle{
  width: 100%;
  height: 100%;
  position: relative;
  left: 14px;
  top: 24px;
}
.textStyle{
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
    position: relative;
    text-align: center;
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
  grid-template-columns: 10% 80% 10%;

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
  left: -15px;
  top: -10px;

  .partName {
    // position: relative;
    // left: 12px;
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
    text-align: center;
  }
  .dataShow {
    position: relative;
    left: 0PX;
    font-size: 16px;
    font-weight: bolder;
    color:rgb(36, 188, 144);
  }
}
</style>
