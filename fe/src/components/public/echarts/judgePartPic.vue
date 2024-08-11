<template>
  <div class="LineChartsRenderContainer">
    <a-time-range-picker class="timePicker" v-model:value="timeValue" />
    <div :id="idName"></div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { inject, ref, onMounted, reactive, watch, onUnmounted } from "vue";

const props = defineProps([
  "title",
  "idName",
  "legend",
  "data",
  "color",
  "min",
  "max",
  "circle",
  "mini",
  "pid",
  "pickerLeft",
  "pickerTop",
]);
const echarts = inject("echarts");

const timePickerLeft = props.pickerLeft;
const timePickerTop = props.pickerTop;

const dateFormat = "MM-DD HH:mm";

// 时间选择器的两端时间，右端时间利用dayjs以及循环生成算出当前时间
const timeValue = ref([
  dayjs("12/10 10:39", dateFormat),
  dayjs(dayjs(new Date()), dateFormat),
]);

function updateTime() {
  setInterval(() => {
    timeValue.value[1] = dayjs(dayjs(new Date()), dateFormat);
  }, 60000);
}

// 默认option
const option = reactive({
  backgroundColor: "",
  grid: {
    x: 30,
    y: 40,
    x2: 20,
    y2: 30,
  },
  legend: {},
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  xAxis: {
    type: "category",
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(6, 32, 88, 0.863)",
        width: 1,
      },
      symbol: ["none", "arrow"], // 只在末端显示箭头
    },
    axisLabel: {
      // rotate:30,
      padding: [0, 100, 0, 120],
      show: true,
      fontWeight: "bold",
      textStyle: {
        color: "#ffffff",
      },
      interval: "auto",
    },
  },
  yAxis: {
    type: "value",
    min: props.min,
    max: props.max,
    axisTick: {
      show: true,
      inside: true,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(6, 32, 88, 1)",
        width: 1,
      },
      symbol: ["none", "arrow"], // 只在末端显示箭头
    },
    axisLabel: {
      color: "#ffffff",
      fontSize: 14,
      fontWeight: "bold",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(6, 32, 88, 0.863)",
        width: 1,
      },
    },
  },
});

// 趋势图配置
const trendRender = () => {
  if (props.circle) {
    // 若有四根线，应该是上下限设定值反馈值
    // 先处理legend
    option.legend.data = [
      {
        name: props.legend[0],
      },
      {
        name: props.legend[1],
      },
      {
        name: props.legend[2],
      },
      {
        name: props.legend[3],
      },
    ];
    option.visualMap = {
      show: false,
      seriesIndex: 0,
      pieces: [
        {
          gte: props.data.TrendData[2][0],
          color: "red",
        },
        {
          lte: props.data.TrendData[3][0],
          color: "red",
        },
        {
          gte: props.data.TrendData[3][0],
          lte: props.data.TrendData[2][0],
          color: props.color[0],
        },
      ],
    };
    option.legend.show = false;
    // 然后是横坐标
    option.xAxis.data = props.data.timestamp;
    // 然后是曲线
    option.series = [
      {
        data: props.data.TrendData[0],
        name: props.legend[0],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: props.color[0],
        },
        markPoint: {
          itemStyle: {
            color: "rgb(0,136,238)",
            label: {
              show: true,
              color: "ffffff",
            },
          },
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
          label: {
            formatter: function (value) {
              // 确保你的Number.toFixed(2)是满足要求的
              return value.value.toFixed(2);
            },
          },
        },
        markLine: {
          symbol: "none",
          itemStyle: {
            color: "rgb(28,167,210)",
            label: {
              show: true,
              color: "ffffff",
            },
          },
          data: [{ type: "average", name: "Avg" }],
          label: {
            formatter: function (value) {
              // 确保你的Number.toFixed(2)是满足要求的
              return value.value.toFixed(0);
            },
          },
        },
      },
      {
        data: props.data.TrendData[1],
        name: props.legend[1],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          // color: "#409EFF",
          color: props.color[1],
        },
      },
      {
        data: props.data.TrendData[2],
        name: props.legend[2],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 5,
        },
        itemStyle: {
          // color: "#409EFF",
          color: props.color[2],
        },
      },
      {
        data: props.data.TrendData[3],
        name: props.legend[3],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 5,
        },
        itemStyle: {
          // color: "#409EFF",
          color: props.color[3],
        },
      },
    ];
  } else if (props.pid) {
    // 目前界面只有PID趋势图有三根曲线
    // 先处理legend
    option.legend.data = [
      {
        name: props.legend[0],
      },
      {
        name: props.legend[1],
      },
      {
        name: props.legend[2],
      },
    ];
    // 然后是横坐标
    option.xAxis.data = props.data.timestamp;
    // 然后是曲线
    option.series = [
      {
        data: props.data.TrendData[0],
        name: props.legend[0],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          // color: "#409EFF",
          color: props.color[0],
        },
      },
      {
        data: props.data.TrendData[1],
        name: props.legend[1],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          // color: "#409EFF",
          color: props.color[1],
        },
      },
      {
        data: props.data.TrendData[2],
        name: props.legend[2],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          // color: "#409EFF",
          color: props.color[2],
        },
      },
    ];
  } else {
    // 如果是一根线
    option.legend.data = [
      {
        name: props.legend[0],
      },
    ];
    option.legend.show = false;
    // 然后是横坐标
    option.xAxis.data = props.data.timestamp;
    option.series = [
      {
        data: props.data.TrendData[0],
        name: props.legend[0],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: props.color,
        },
        markPoint: {
          itemStyle: {
            color: "rgb(0,136,238)",
            label: {
              show: true,
              color: "ffffff",
            },
          },
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
          label: {
            formatter: function (value) {
              // 确保你的Number.toFixed(2)是满足要求的
              return value.value.toFixed(2);
            },
          },
        },
        markLine: {
          symbol: "none",
          itemStyle: {
            color: "rgb(28,167,210)",
            label: {
              show: true,
              color: "ffffff",
            },
          },
          data: [{ type: "average", name: "Avg" }],
          label: {
            formatter: function (value) {
              // 确保你的Number.toFixed(2)是满足要求的
              return value.value.toFixed(0);
            },
          },
        },
      },
    ];
  }

  let chartBox = echarts.init(document.getElementById(props.idName), "dark", {
    locale: "ZH",
  });
  chartBox.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    chartBox.resize();
  });
};

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
  updateTime();
});

onUnmounted(() => {
  clearInterval();
});
</script>

<style lang="scss" scoped>
.LineChartsRenderContainer {
  width: 95%;
  height: 100%;

  border-radius: 13px;

  z-index: 3;

  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  top: -15px;
  margin: auto;

  div {
    width: 100%;
    height: 105%;

    z-index: 10;
  }

  .titlePart {
    width: 300px;
    position: absolute;
    // background: url("../../../assets/images/filter-bg1.png");
    // background-repeat: repeat-x;
    // background-size: 100% 100%;

    .titleName {
      position: relative;
      left: 20px;
      font-size: 18px;
      font-weight: bolder;
      color: aliceblue;
    }
  }

  .timePicker {
    width: 180px;
    height: 25px;
    position: absolute;
    left: v-bind(timePickerLeft);
    top: v-bind(timePickerTop);

    z-index: 99;
  }
}
</style>
