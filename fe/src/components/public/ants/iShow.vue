<template>
  <div class="nameInputContainer">
    <span class="partName"> {{ props.title }} </span>
    <a-statistic
          :value=" props.value"
          groupSeparator=""
          :precision=" props.precision"
          :valueStyle="valueStyle"
          style="position: relative; left: 0px;top: -1px;"
        />
    <span class="partName" > {{ props.unit }}</span>
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
    value: Number,
    precision:Number,
  });
// 直接修改触发效果
const valueStyle = {
    color: 'rgb(65, 231, 14)',
    fontWeight: "bolder",
    fontSize: "18px",
  };

</script>

<style lang="scss" scoped>
.nameInputContainer {
  width:95%;
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
  .dataShow {
    position: relative;
    left: 12电流legend设置0px;
    font-size: 16px;
    font-weight: bolder;
    color:yellow;
  }
}
</style>
