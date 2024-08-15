<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <toptitle />
      <!-- <mainPageCurrrent /> -->
      <mainPage />
    </div>
  </a-config-provider>
</template>

<script setup>
// 引入分辨率处理函数
import useDraw from "./utils/useDraw";
// 引入vue相关函数
import { onMounted, onUnmounted, provide } from "vue";
// 引入echarts
import * as echarts from "echarts";
// ant本地化处理
import zhCN from "ant-design-vue/es/locale/zh_CN";
const locale = zhCN;
// 引入标题组件
import toptitle from "./components/layouts/toptitle.vue";
// TODO 临时引入一下看效果
import mainPageCurrrent from "./components/layouts/mainPageCurrrent.vue";
import mainPage from "./components/layouts/mainPage.vue";



provide("echarts", echarts);

// * 分辨率适配处理
const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();

onMounted(() => {
  windowDraw();
  calcRate();
});

onUnmounted(() => {
  unWindowDraw();
});
</script>

<style lang="scss" scoped>
</style>
