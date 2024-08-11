<template>
  <div class="nameStaticsContainer">
    <span class="partName"> {{ props.title }} </span>
    <dv-digital-flop :config="config1" class="flop" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
const props = defineProps(["title", "value", "color"]);

const config1 = reactive({
  number: [props.value],
  toFixed: 2,
  style: {
    fontSize: 20,
    fill: props.color,
    fontWeight: "bold",
  },
});
</script>

<style lang="scss" scoped>
.nameStaticsContainer {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 50%);

  align-items: center;
  justify-items: center;

  .partName {
    position: relative;
    left: 20px;
    font-size: 16px;
    font-weight: bolder;
    color: aliceblue;
  }

  .flop {
    position: relative;
    top: 4px;
    left: 20px;
  }
}
</style>
