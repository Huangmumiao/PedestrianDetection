<template>
  <div class="RadarChartsRenderContainer">
    <div :id="idName"></div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, reactive, watch, onUnmounted } from "vue";

const props = defineProps(["idName", "indicator", "data"]);

const echarts = inject("echarts");

// 默认option
const option = reactive({
  color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
  backgroundColor: "",
  radar: [
    {
      indicator: [],
      center: ["50%", "50%"],
      radius: 60,
      axisName: {
        color: "#fff",
        backgroundColor: "#666",
        fontSize: 12,
        borderRadius: 3,
        padding: [5, 5],
      },
    },
  ],
  series: [
    {
      type: "radar",
      data: [
        {
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: "rgba(255, 145, 124, 0.1)",
                offset: 0,
              },
              {
                color: "rgba(255, 145, 124, 0.9)",
                offset: 1,
              },
            ]),
          },
        },
      ],
    },
  ],
});

// 注入外部引入的配置
const trendRender = () => {
  // 引入indicator
  option.radar[0].indicator = props.indicator;
  // 引入data
  option.series[0].data[0].value = props.data;

  //  渲染
  let chartBox = echarts.init(document.getElementById(props.idName), "dark", {
    locale: "ZH",
  });
  chartBox.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    chartBox.resize();
  });
};

// 更新数据
watch(
  () => props.data,
  (newData) => {
    // 如果数据更新，直接重新渲染echarts
    trendRender();
  },
  {
    deep: true,
    // immediate: true
  }
);

onMounted(() => {
  trendRender();
});
</script>

<style lang="scss" scoped>
.RadarChartsRenderContainer {
  width: 100%;
  height: 100%;

  border-radius: 13px;

  z-index: 3;

  position: relative;
  margin: auto;

  div {
    width: 100%;
    height: 100%;

    z-index: 10;
  }
}
</style>
