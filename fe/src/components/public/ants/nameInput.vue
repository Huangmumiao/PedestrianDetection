<template>
  <div class="nameInputContainer">
    <span class="partName" style="white-space: pre-wrap;"> {{ props.title }} </span>
    <a-input-number
      :value="props.value"
      :min="props.lowerValue"
      :max="props.upperValue"
      :bordered="true"
      :controls="false"
      @click="setValueClickChange"
      @pressEnter="makeModelOpenF"
      :precision="props.precision" 
    />
    <span class="partName" > {{ props.unit }}</span>
    <!-- 修改学习条件确认界面 -->
    <a-modal
      v-model:open="modalOpen"
      title="修改确认"
      @ok="handleModalOK"
    >
      <span class="modeText">
        {{ "是否确认修改：" + props.title + "：" + props.value }}
      </span>
    </a-modal>
  </div>
</template>

<script setup>
import { stringType } from "ant-design-vue/es/_util/type";
import { ref } from "vue";

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
    id:String,
    value: Number,
    lowerValue:Number,
    upperValue:Number,
    precision:Number,
  });
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
}

const handleModalOK = () => {
  modalOpen.value = false;
  setValueChange.value = false;
};
</script>

<style lang="scss" scoped>
:deep(.ant-input-number .ant-input-number-input){
color: #59E41C;
font-weight: bolder;
font-size: 18px;
text-align: center !important;
}
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
}
</style>
