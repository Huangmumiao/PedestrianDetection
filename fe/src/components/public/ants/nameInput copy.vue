<template>
  <div class="nameInputContainer">
    <span class="partName"> {{ props.title }} </span>
    <a-input-number
      :value="props.value"
      :min="props.lowerValue"
      :max="props.upperValue"
      :bordered="true"
      :disabled="props.disabled"
      :controls="false"
      @click="setValueClickChange"
      @pressEnter="makeModelOpenF"
      :precision="props.precision" 
    />
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
import { ref } from "vue";

const props = defineProps([
  "title",
  "value",
  "lowerValue",
  "upperValue",
  "disabled",
  "precision"
]);

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
.nameInputContainer {
  width: 120%;
  height: 100%;

  display: grid;
  grid-template-columns: 20% 70% 10%;

  align-items: center;
  justify-items: center;

  .partName {
    position: relative;
    left: 20px;
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
  }
}
</style>
