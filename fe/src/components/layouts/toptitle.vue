<template>
  <dv-border-box7>
    <div class="topContainer">
      <div class="firstLineContainer">
        <!-- 第一行的两个装饰 -->
        <dv-decoration-10 style="width: 103%; height: 5px" />
        <div />
        <dv-decoration-10
          style="width: 90%; height: 5px;"
          class="rightDecoration"
        />
      </div>
      <div class="secondLineContainer">
        <!-- 第二行 -->
        <a-image
          :width="240"
          :src="imageURL"
          style="position: relative; left: 8px"
        />
        <!-- 导航菜单 -->
        <div>
          
        </div>
        <!-- <a-menu
          v-model:selectedKeys="currentItem"
          mode="horizontal"
          :items="itemsSeries"
          theme="dark"
          class="menu"
          @click="menuClick"
        /> -->
        <div class="titlePart">
          <!-- 标题部分 -->
          <dv-decoration8 style="width: 100%; height: 50px" />
          <!-- <span class="titleText"> 电熔镁砂熔炼过程智能决策系统  </span> -->
          <span class="titleText"> 智能给煤系统远程监控维护平台  </span>
          <dv-decoration8 :reverse="true" style="width: 100%; height: 50px" />
        </div>
        <div />
        <span class="timeText">
          <!-- 时间 -->
          {{
            timeInfo.dateYear +
            "    " +
            timeInfo.dateDay
          }}
        </span>
      </div>
    </div>
  </dv-border-box7>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
// import { useRouter } from "vue-router";
// 处理时间的函数
import { formatTime } from "../../utils/index";

// const router = useRouter();

// 图片url
const imageURL = "src/assets/images/foot-logo.png";


// * 时间内容
const timeInfo = reactive({
  setInterval: 0,
  dateDay: "",
  dateYear: "",
  dateWeek: "",
});
const WEEK = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

// todo 处理时间监听
const handleTime = () => {
  timeInfo.setInterval = setInterval(() => {
    const date = new Date();
    timeInfo.dateDay = formatTime(date, "HH: mm: ss");
    timeInfo.dateYear = formatTime(date, "yyyy-MM-dd");
    timeInfo.dateWeek = WEEK[date.getDay()];
  }, 1000);
};

// 处理对象导航菜单
const itemsSeries = ref([
  {
    key: "oral",
    label: "高压辊磨",
    title: "高压辊磨",
  },
  {
    key: "current",
    label: "电熔镁炉",
    title: "电熔镁炉",
  },
]);

const currentItem = ref(["first"]);

const menuClick = (e) => {
  router.push(e.key);
  // console.log("click", e);
};

// 生命周期
onMounted(() => {
  handleTime();
});
onUnmounted(() => {
  clearInterval(timeInfo.setInterval);
});
</script>

<style lang="scss" scoped>
.topContainer {
  // 总container 用于搭建grid
  width: 100%;
  height: 100%;

  border-radius: 20px;

  display: grid;
  grid-template-rows: 7% 93%;

  .firstLineContainer {
    // 第一行，用于放置装饰
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 35% 30% 40%;

    .rightDecoration {
      position: relative;
      right: 20px;
    }
  }

  .secondLineContainer {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 12% 23% 30% 13% 20%;

    .menu {
      width: 50%;
      height: 70%;
      position: relative;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      margin: auto;

      border-radius: 10px;

      font-size: 20px;
      font-weight: bolder;
    }

    .titlePart {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 12% 76% 12%;

      align-items: center;
      justify-items: center;

      .titleText {
        font-size: 30px;
        font-weight: bold;
        color: aliceblue;
        // color:rgb(0, 3, 25);
      }
    }

    .timeText {
      font-size: 22px;
      font-weight: bold;
      color: aliceblue;

      //   处理文字居中
      position: relative;
      left: 70px;
      bottom: 0;
      right: 0;
      top: 0;
      margin: auto;
    }
  }
}
</style>
