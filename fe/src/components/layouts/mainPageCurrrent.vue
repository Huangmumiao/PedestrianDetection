<template>
  <a-config-provider :theme="{
      algorithm: theme.darkAlgorithm,
    }">
    <div class="CurrentMainPageContainer">
      <div class="leftPart">

        <div class="leftTopPart">
          <dv-border-box13>
            <!-- <OnLineShow videoUrl=http://127.0.0.1:5000/ideo_feed0 /> -->
            <videOnlineShow title="1105和1106煤堆高度及落煤监控" videoUrl="http://127.0.0.1:2000/video1105_6" />
            <VideoResults5_6 :h_1105="h_1105" :f_1105="f_1105" :d_1105="d_1105" :h_1106="h_1106" :f_1106="f_1106" :d_1106="d_1106" />
            <!-- <OfflineShow title="1105和1106煤堆高度及落煤监控":video_flag="true" image_root="../../videos/1105_6.mp4" /> -->
            <!-- <video class="videobox" src="../../assets/videos/1105_6.mp4" type="video/mp4" controls="controls" autoplay="autoplay" loop="loop" muted="muted" vertical-align="middle"></video> -->
          </dv-border-box13>
          <dv-border-box13>
            <!-- <OfflineShow title="1107煤堆高度及落煤监控" :video_flag="true" image_root="../../videos/1107.mp4" /> -->
            <videOnlineShow title="1107煤堆高度及落煤监控" videoUrl="http://127.0.0.1:2000/video1107" />
            <VideoResults7 :h_1107="h_1107" :f_1107="f_1107" :d_1107="d_1107" />
          </dv-border-box13>
        </div>

        <div class="leftMiddlePart">
          <dv-border-box13>
            <!-- <OfflineShow title="1105煤堆凹陷监控" :video_flag="false" image_root="../../videos/1105_ao.mp4" /> -->
            <videOnlineShow title="1105煤堆凹陷监控" videoUrl="http://127.0.0.1:2000/video1105_ao" />
          </dv-border-box13>
          <dv-border-box13>
            <!-- <OfflineShow title="1106煤堆凹陷监控" :video_flag="false" image_root="../../videos/1106_ao.mp4" /> -->
            <videOnlineShow title="1106煤堆凹陷监控" videoUrl="http://127.0.0.1:2000/video1106_ao" />
          </dv-border-box13>
          <dv-border-box13>
            <!-- <OfflineShow title="1107煤堆凹陷监控" :video_flag="false" image_root="../../videos/202404090129_1105_6.mp4" /> -->
            <videOnlineShow title="1107煤堆凹陷监控" videoUrl="http://127.0.0.1:2000/video1107_ao" />
          </dv-border-box13>
        </div>
        <dv-border-box12>
          <div class="decisionPart">
            <div class="decisiontitlePart">
              <span class="decisiontextPart">决 策 目 标 与 决 策 值</span>
            </div>
            <div class="decisionOptionPart">
              <!-- <powerShow title="功率实际值" :value="PowerPv" :precision="1" unit="W" />
              <systemShow title="系统决策值" :value="znSp" :precision="1" unit="A" />
              <systemShow title="系统预报值" :value="znPre" :precision="1" unit="W" /> -->

              <limdesShow title="给煤量上限值" :value="newCoalMax" id="CoalMax" :lower-value="CoalSp" :upper-value="1400"
                :precision="1" unit="t/h" />
              
              <!-- <desInput title="给煤量目标值" :value="CoalSp" id="CoalSp" :lower-value="0" :upper-value="10000" :precision="1"
                unit="t/h" /> -->
              <powerShow title="给煤量设定值" :value="CoalSp" :precision="1" unit="t/h" />    

              <limdesShow title="给煤量下限值" :value="newCoalMin" id="CoalMin" :lower-value="600" :upper-value="CoalSp"
              :precision="1" unit="t/h" />

              <powerShow title="给煤量实际值" :value="CoalPv" :precision="1" unit="t/h" />              

              <!-- <systemShow title="1105#给煤机" :value="znSp" :precision="1" unit="A" /> -->

              <!-- <div class="decisionModePart">
                <span style="font: size 16px;position:relative; left:85px; color:aliceblue ;">停止</span>
                <span style="font: size 16px;position:relative; left:35px; color:#E51C1C ;">停止</span>
                <div style="position:relative;left:10px; top:-5px">
                  <el-switch v-model="modeDown" @change="modeChange"
                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </div>
                <span style="font: size 16px;position:relative;left:-8px;color:rgb(65, 231, 14) ;">启动</span>
              </div> -->
              <!-- <startendButton title="1105#给煤机" :value="1" /> -->
              <motorStartEndButton title="1105#给煤机" :value="start_1105" />
              <systemShow title="1105#频率给定" :value="freq_set_1105" :precision="1" unit="Hz" />

              <!-- <systemShow title="1106#给煤机" :value="znPre" :precision="1" unit="W" /> -->
              <!-- <startendButton title="1106#给煤机" :value="1" /> -->
              <motorStartEndButton title="1106#给煤机" :value="start_1106" />
              <systemShow title="1106#频率给定" :value="freq_set_1106" :precision="1" unit="Hz" />

              <!-- <systemShow title="1107#给煤机" :value="znPre" :precision="1" unit="W" /> -->
              <!-- <startendButton title="1107#给煤机" :value="1" /> -->
              <motorStartEndButton title="1107#给煤机" :value="start_1107" />
              <systemShow title="1107#频率给定" :value="freq_set_1107" :precision="1" unit="Hz" />

              <div class="decisionModePart">
                <!-- <el-button size="small" type="primary">
                        下装
                      </el-button> -->
                <!-- <div style="font: size 16px;position:relative; top:-8px;left:5px;">
                  <el-button @click="donwloadClick" type="primary" v-if="modeDown == false">
                    下装<el-icon class="el-icon--right">
                      <Download />
                    </el-icon>
                  </el-button>
                </div> -->

                <span style="font: size 16px;position:relative; left:35px; color:#E51C1C ;">手动</span>
                <div style="position:relative;left:10px; top:-5px">
                  <el-switch v-model="modeDown" @change="modeChange"
                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </div>
                <span style="font: size 16px;position:relative;left:-8px;color:rgb(65, 231, 14) ;">自动</span>
              </div>

              <!-- <preShow
                    title="决策补偿值"
                    :value="compSp"
                    :precision="1"
                    unit="A"
                  /> -->
              <!-- <div class="decisionSwitchPart">
                <div>

                </div>
                <div></div>

                <span style="position:relative;left:25px"> </span>
                <span style="font: size 16px;;position:relative; left:35px; color:#E51C1C ;">系统决策</span>
                <div style="position:relative;left:10px; top:-5px">
                  <el-switch v-model="modeDes" @change="switchChange"
                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                </div>
                <span style="font: size 16px;position:relative;left:-8px;color:rgb(65, 231, 14) ;">优化决策</span>
              </div> -->

              <!-- <span style="position:relative;top:45px;left:375px;color:white ;" >{{znSp}} A</span>
                  <span style="position:relative;top:45px;left:215px;color:white ;" >{{yhSp}} A</span> -->

            </div>
          </div>
        </dv-border-box12>

      </div>
      <div class="rightPart">
        <!-- 实际三相电流输出曲线 -->
        <dv-border-box13>
          <div class="oneChartContainer">
            <a-dropdown placement="bottom" arrow class="dropdownButton">
              <a-button>
                <span v-if="runningIndex === 'coal'">给煤量</span>
                <!-- <span v-if="runningIndex === 'coalPred'">给煤量预报</span> -->
              </a-button>
              <template #overlay>
                <a-menu @click="runningIndexHandleMenuClick">
                  <a-menu-item key="coal">
                    <a>给煤量</a>
                  </a-menu-item>
                  <!-- <a-menu-item key="coalPred">
                    <a>给煤量预报</a>
                  </a-menu-item> -->
                </a-menu>
              </template>
            </a-dropdown>
            <LineChartsRender id-name="coalTrend" title="运 行 指 标 " :legend="CoalLegend" :data="coalTrendData" min="400"
              max="1400" :color="coalColor" :circle="true" picker-left="245px" picker-top="-2px"
              v-if="runningIndex === 'coal'" />
            <!-- <LineChartsRender id-name="coalPredTrend" title="运 行 指 标 " :legend="coalPredLegend"
              :data="coalPredTrendData" min="400" max="1400" :color="coalPredColor" :circle="true" picker-left="245px"
              picker-top="-2px" v-if="runningIndex === 'coalPred'" /> -->
          </div>
        </dv-border-box13>
        <!-- 实际三相电机频率输出曲线 -->
        <dv-border-box13>
          <div class="oneChartContainer">
            <a-dropdown placement="bottom" arrow class="dropdownButton">
              <a-button>
                <span v-if="controlIndex === 'Freq'">给煤机频率</span>
                <span v-if="controlIndex === 'Height'">煤堆高度</span>
                <span v-if="controlIndex === 'Fall'">落煤状态</span>
                <span v-if="controlIndex === 'Depression'">凹陷状态</span>
              </a-button>
              <template #overlay>
                <a-menu @click="controlIndexHandleMenuClick">
                  <a-menu-item key="Freq">
                    <a>给煤机频率</a>
                  </a-menu-item>
                  <a-menu-item key="Height">
                    <a>煤堆高度</a>
                  </a-menu-item>
                  <a-menu-item key="Fall">
                    <a>落煤状态</a>
                  </a-menu-item>
                  <a-menu-item key="Depression">
                    <a>凹陷状态</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <LineChartsRender id-name="FreqTrend" title="控 制 回 路 " :legend="FreqLegend" :data="FreqTrendData" min="0"
              max="50" :color="FreqColor" :pid="true" picker-left="245px" picker-top="-2px"
              v-if="controlIndex === 'Freq'" />

            <LineChartsRender id-name="HeightTrend" title="控 制 回 路 " :legend="HeightTrendLegend" :data="HeightTrendData"
              min="0" max="5" :color="HeightTrendColor" :pid="true" picker-left="245px" picker-top="-2px"
              v-if="controlIndex === 'Height'" />

            <LineChartsRender id-name="FallTrend" title="控 制 回 路 " :legend="FallTrendLegend" :data="FallTrendData"
              min="0" max="1" :color="FallTrendColor" :pid="true" picker-left="245px" picker-top="-2px"
              v-if="controlIndex === 'Fall'" />

            <LineChartsRender id-name="DepressionTrend" title="控 制 回 路 " :legend="DepressionTrendLegend" :data="DepressionTrendData"
              min="0" max="1" :color="DepressionTrendColor" :pid="true" picker-left="245px" picker-top="-2px"
              v-if="controlIndex === 'Depression'" />
          </div>
        </dv-border-box13>
        <dv-border-box13>
          <!-- 控制性能评价 -->
          <div class="idexPart">
            <div class="idextitlePart">
              <span class="decisiontextPart">性 能 评 价</span>
              <a-time-range-picker class="timePicker" v-model:value="timeValue" />
            </div>
            <div class="idexShowStyle">
              <div>
                <!-- <IndexGoodShow /> -->
                <RadarChartsRender id-name="modelJudgmentRadar" :indicator="modelJudgmentIndicator"
                  :data="modelJudgmentRadarData" mode="one" />
              </div>
              <indexHeaderShow></indexHeaderShow>
              <indexShow title="给煤量指标" unit="A" :hgRate="coalIndex[0]" :useRate="coalIndex[1]" :error="coalIndex[2]"
                :mae="coalIndex[3]" :mf="coalIndex[4]" :precision="2" />
            </div>
          </div>
        </dv-border-box13>
      </div>
    </div>
  </a-config-provider>
</template>

<script setup>
import { ref, inject,unref,onMounted ,watch,getCurrentInstance,} from "vue";
import { ClickOutside as vClickOutside } from 'element-plus'
// 引入ant的深色模式
import { theme } from "ant-design-vue";
// 注入axios

const axios = inject("axios");
const instance=getCurrentInstance();
const bus =instance.appContext.config.globalProperties.$bus

import {
  DownloadOutlined,
  SettingTwoTone,
  CheckCircleTwoTone,
  BellTwoTone,
} from "@ant-design/icons-vue";

// 引入相关组件
import LineChartsRender from "../public/echarts/LineChartsRender.vue";
import CoalAmountCurve from "../public/echarts/CoalAmountCurve.vue";
import videOnlineShow from "../public/video/onlineShow.vue";
import OfflineShow from "../public/video/offlineShow.vue";
import IndexGoodShow from "../public/ants/indexGoodShow.vue";
import nameFlop from "../public/ants/nameFlop.vue";
import nameInput from "../public/ants/nameInput.vue";
import iInput from "../public/ants/iInput.vue";
import idesInput from "../public/ants/idesInput.vue";
import RadarChartsRender from "../public/echarts/RadarChartsRender.vue";
import dataShow from "../public/ants/dataShow.vue";
import iShow from "../public/ants/iShow.vue";
import ispShow from "../public/ants/ispShow.vue";
import modeShow from "../public/ants/modeShow.vue";
import timeShow from "../public/ants/timeShow.vue";
import indexShow from "../public/ants/indexShow.vue";
import indexHeaderShow from "../public/ants/indexheadShow.vue";
import limShow from "../public/ants/limInput.vue";
import limdesShow from "../public/ants/limdesInput.vue";
import judgePic from "../public/echarts/judgePartPic.vue";
import desInput from "../public/ants/desInput.vue";
import preShow from "../public/ants/preShow.vue";
import powerShow from "../public/ants/powerShow.vue";
import systemShow from "../public/ants/systemShow.vue";
import startendButton from "../public/ants/startendButton.vue";
import motorStartEndButton from "../public/ants/motorStartEndButton.vue";
import VideoResults5_6 from "../public/echarts/VideoResultsShow.vue";
import VideoResults7 from "../public/echarts/VideoResultsShow1107.vue";
import { ElMessage } from "element-plus"
//智能决策结果
const znSp=ref(135241)
//自优化决策结果
const yhSp=ref(124241)
const freq_set_1105 = ref(0.0);
const freq_set_1106 = ref(0.0);
const freq_set_1107 = ref(0.0);
const h_1105 = ref(0.0);
const h_1106 = ref(0.0);
const h_1107 = ref(0.0);
const f_1105 = ref(0.0);
const f_1106 = ref(0.0);
const f_1107 = ref(0.0);
const d_1105 = ref(0.0);
const d_1106 = ref(0.0);
const d_1107 = ref(0.0);
const start_1105 = ref(false);
const start_1106 = ref(false);
const start_1107 = ref(false);

const yhPre=ref(4125);


// 处理辊前影响因素
const gunQianData = ref("coalPred");
const gunQianDataHandleMenuClick = (e) => {
  gunQianData.value = e.key;
};

// 辊前料位1测试数据
// 辊前料位1legend设置
const powerPreLegend = ["功率预报值"];
const powerPreColor = "#59e51c";
let powerPreTrendData = ref({});

powerPreTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[30, 58, 18, 25, 27, 1, 25]],
};

// 辊前料位2测试数据
// 辊前料位2legend设置
const gqlw2Legend = ["辊前2#缓冲仓料位反馈值"];
const gqlw2Color = "#59e51c";
let gqlw2TrendData = ref({});

gqlw2TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};

// 12电流测试数据
// 12电流legend设置
const dl12Legend = ["12#皮带机电流反馈值"];
const dl12Color = "#59e51c";
let dl12TrendData = ref({});

dl12TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};
// 13电流测试数据
// 13电流legend设置
const dl13Legend = ["13#皮带机电流反馈值"];
const dl13Color = "#59e51c";
let dl13TrendData = ref({});

dl13TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};
// 处理模型三相电机频率按钮
// 处理辊前影响因素
const sanxiangDL = ref("ABC");
const  sanxiangDLHandleMenuClick = (e) => {
  sanxiangDL.value = e.key;
};

// 左辊压力测试数据
const ABCLegend = ["A相电流实际值","B相电流实际值","C相电流实际值"];
const  ABCColor = ["#59e51c", "#ff2700", "#00a1ff"];
let  ABCTrendData = ref({});

ABCTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],],
};
// 左辊压力legend设置
const ALegend = ["A相电流实际值"];
const  AColor = "#59e51c";
let  ATrendData = ref({});

ATrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[30, 58, 18, 25, 27, 1, 25]],
};

// 右辊压力测试数据
// 右辊压力legend设置
const BLegend = ["B相电流实际值"];
const  BColor = "#59e51c";
let  BTrendData = ref({});

BTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[30, 58, 18, 25, 27, 1, 25]],
};

// 左辊间隙测试数据
// 左辊间隙legend设置
const CLegend = ["C相电流实际值"];
const  CColor = "#59e51c";
let CTrendData = ref({});

CTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[30, 58, 18, 25, 27, 1, 25]],
};
// 右辊间隙测试数据
// 右辊间隙legend设置
const distanceRLegend = ["右辊间隙反馈值"];
const  distanceRColor = "#59e51c";
let  distanceRTrendData = ref({});

distanceRTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[30, 58, 18, 25, 27, 1, 25]],
};
// 14电流测试数据
// 14电流legend设置
const dl14Legend = ["14#皮带机电流反馈值"];
const dl14Color = "#59e51c";
let dl14TrendData = ref({});

dl14TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};
// 15电流测试数据
// 15电流legend设置
const dl15Legend = ["15#皮带机电流反馈值"];
const dl15Color = "#59e51c";
let dl15TrendData = ref({});

dl15TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};

// 处理辊前影响因素
const gunHouData = ref("dlSign");
const gunHouDataHandleMenuClick = (e) => {
  gunHouData.value = e.key;
};

// 辊前料位1测试数据
// 辊前料位1legend设置
const dlSignLegend = ["打料信号实际值"];
const dlSignColor = "#59e51c";
let dlSignTrendData = ref({});

dlSignTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[30, 58, 18, 25, 27, 1, 25]],
};

// 辊前料位2测试数据
// 辊前料位2legend设置
const ghlw2Legend = ["辊后2#缓冲仓料位反馈值"];
const ghlw2Color = "#59e51c";
let ghlw2TrendData = ref({});

ghlw2TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};

// 12电流测试数据
// 12电流legend设置
const dl16Legend = ["16#皮带机电流反馈值"];
const dl16Color = "#59e51c";
let dl16TrendData = ref({});

dl16TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};
// 13电流测试数据
// 13电流legend设置
const dl17Legend = ["17#皮带机电流反馈值"];
const dl17Color = "#59e51c";
let dl17TrendData = ref({});

dl17TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};

// 决策
const CoalMax=ref(1200.0);
const CoalMin=ref(900.0);
const CoalSp=ref(1100.0);
const CoalPv=ref(1096.24);
const avePowerpre=ref(6666);
const PowerPre=ref(7777);
const modelSp=ref(8888);
const compSp=ref(9999);


const modeDes = ref(false);
const modeDown = ref(false);
const lazaMode= ref(false);
// 控制
const dlMax=ref(17000.0);
const dlMin=ref(13000.0);
const dlTime=ref('11:24:35');

const dlSp=ref(12000.2);
const dlPv=ref(12080.2);
const dlMode=ref(1);
// 数据统计表格
const tabledate=ref(['2024-02-21','2024-02-20','2024-02-19','2024-02-18','2024-02-17',])
const solveData=ref([98.1, 97.9, 98.8, 97.3, 99.1])
const coverData=ref([35.6,37.9,38.7,39.9,41.5])
const usedData=ref([73.3,71.9,81.2,77.5,79.9])
let newCoalSp=ref(CoalSp.value)
let newCoalMax=ref(CoalMax.value)
let newCoalMin=ref(CoalMin.value)
let newdlMax=ref(dlMax.value)
let newdlMin=ref(dlMin.value)
let newdlSp=ref(dlMin.value)
// 雷达图indicator
const modelJudgmentIndicator = [
  {text: "RMSE", max: 250},
  {text: "MSE", max: 35000},
  {text: "MAE", max: 250},
  {text: "MAPE", max: 100},
  {text: "SMAPE", max: 100},
];
const modelJudgmentRadarData = [100, 93, 50, 90, 70];
// 运行指标图像化
const runningIndex = ref("coal");
const runningIndexHandleMenuClick = (e) => {
  runningIndex.value = e.key;
};

const time_value = ref('2023-3-29');

// 动辊电流数据
// 动辊电流legend设置
const CoalLegend = ["给煤量实际值", "给煤量目标值", "上限", "下限"];
const coalColor = ["#54CEED", "#E77E42", "#bac1c2", "#bac1c2"];
let coalTrendData = ref({});

coalTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [950, 958, 918, 925, 927, 991, 925],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
    [4, 4, 4, 4, 4, 4, 4],
  ],
};

// 定辊电流数据
// 定辊电流legend设置
const doublePowerLegend = ["多炉功率实际值", "多炉功率目标值", "上限", "下限"];
const doublePowerColor = ["#54CEED", "#E77E42", "#bac1c2", "#bac1c2"];
let doublePowerTrendData = ref({});

doublePowerTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
    [4, 4, 4, 4, 4, 4, 4],
  ],
};

// 返矿比测试数据
// 返矿比legend设置
const coalPredLegend = ["上限", "下限", "给煤量预报设定值", "给煤量预报实际值"];
const coalPredColor = ["#54CEED", "#E77E42", "#bac1c2", "#bac1c2"];
let coalPredTrendData = ref({});

coalPredTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
    [4, 4, 4, 4, 4, 4, 4],
  ],
};

// 控制回路
const controlIndex = ref("Freq");
const controlIndexHandleMenuClick = (e) => {
  controlIndex.value = e.key;
};

// 真实A相电机频率测试数据
// 给煤机频率实际值
const FreqLegend = ["1105给煤机频率实际值", "1106给煤机频率实际值", "1107给煤机频率实际值"];
const FreqColor = ["#59e51c", "#964CF1", "#ff8099"];
let FreqTrendData = ref({});

FreqTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
  ],
};
// 煤堆高度
const HeightTrendLegend = ["1105#煤堆高度", "1106#煤堆高度", "1107#煤堆高度"];
const HeightTrendColor = ["#59e51c", "#964CF1", "#ff8099"];
let HeightTrendData = ref({});

HeightTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
  ],
};
// 落煤状态
const FallTrendLegend = ["1105#落煤状态", "1106#落煤状态", "1107#落煤状态"];
const FallTrendColor = ["#59e51c", "#964CF1", "#ff8099"];
let FallTrendData = ref({});

FallTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
  ],
};
// 真实A相电机频率legend设置
const DepressionTrendLegend = ["1105#凹陷状态", "1106#凹陷状态", "1107#凹陷状态"];
const DepressionTrendColor = ["#59e51c", "#964CF1", "#ff8099"];
let DepressionTrendData = ref({});

DepressionTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
  ],
};
// 真实A相电机频率legend设置
const ghHz5Legend = ["料重反馈值", "料重设定值", "上限", "下限"];
const ghHz5Color = ["#59e51c", "#657d65", "#bac1c2", "#bac1c2"];
let ghHz5TrendData = ref({});

ghHz5TrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
    [4, 4, 4, 4, 4, 4, 4],
  ],
};

// 控制回路
const judgeMode = ref("tableMode");
const judgeModeHandleMenuClick = (e) => {
  judgeMode.value = e.key;
};
const coalIndex=ref([10.2,2.3 ,5.6,5.9,99.5 ]);
const doublePowerIndex=ref([10.2,2.3 ,5.6,5.9,99.5 ]);
const coalPredIndex=ref([10.2,2.3 ,5.6,5.9,99.5 ]);


// 真实B相电流测试数据
// 真实B相电流legend设置
const BRealPinlvLegend = ["B相电机频率输出值"];
const BRealPinlvColor = "#59e51c";
let BRealPinlvTrendData = ref({});

BRealPinlvTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};

// 真实C相电流测试数据
// 真实C相电流legend设置
const CRealPinlvLegend = ["C相电机频率输出值"];
const CRealPinlvColor = "#59e51c";
let CRealPinlvTrendData = ref({});

CRealPinlvTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[60, 58, 18, 25, 27, 1, 25]],
};

// 下发参数部分
const kp_before = ref(13.8);
const ki_before = ref(13.8);
const kd_before = ref(13.8);

const kp_new = ref(15.8);
const ki_new = ref(15.8);
const kd_new = ref(15.8);

// 下发模式手自动相关
const downloadMode = ref(false);

// 手动下发确认界面相关
const modalOpen = ref(false);
function manualDownloadConfirm() {
  modalOpen.value = true;
}

const handleModalOK = () => {
  modalOpen.value = false;
  // setValueChange.value = false;
};

// J指标测试数据
// J指标legend设置
const JLegend = ["J"];
const JColor = "#59e51c";
let JTrendData = ref({});

JTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [[30, 58, 18, 25, 27, 1, 25]],
};

// PID趋势图设置
const PIDsLegend = ["Kp", "Ki", "Kd"];
const PIDsColor = ["#59e51c", "#657d65", "#bac1c2"];
let PIDsTrendData = ref({});

PIDsTrendData.value = {
  timestamp: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  TrendData: [
    [60, 58, 18, 25, 27, 1, 25],
    [33, 34, 38, 35, 37, 38, 35],
    [50, 50, 50, 50, 50, 50, 50],
  ],
};

// 控制性能评价下拉菜单选项
const controlJudgment = ref("before");
const controlJudgmentMenuClick = (e) => {
  controlJudgment.value = e.key;
};


// 时间选择器的两端时间，右端时间利用dayjs以及循环生成算出当前时间
import dayjs from "dayjs";
const dateFormat = "MM-DD HH:mm";
const timeValue = ref([
  dayjs("12/10 10:39", dateFormat),
  dayjs(dayjs(new Date()), dateFormat),
]);

function updateTime() {
  setInterval(() => {
    timeValue.value[1] = dayjs(dayjs(new Date()), dateFormat);
  }, 60000);
}


//show
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}

const buttonRef1 = ref()
const popoverRef1 = ref()
const onClickOutside1 = () => {
  unref(popoverRef1).popperRef?.delayHide?.()
}

const iSpnew=ref(15000)
function donwloadClick(){
  if(modeDes.value==false){
    iSpnew.value=znSp.value;
  }
  else {
    iSpnew.value=yhSp.value;
  }
  console.log('downLoad')
  console.log(iSpnew.value)
  WriteInDatabase();
}

let sp_up_temp_array = Array.from({ length: 350 }, () => parseFloat(CoalMax.value));
let sp_down_temp_array = Array.from({ length: 350 }, () => parseFloat(CoalMin.value));

let trendFinished = false;
function getTrendData() {
  if (!trendFinished) {
    trendFinished = true;
    // const api = "http://127.0.0.1:5000/DataAnlysis/AllTrend";
    //const api = "http://127.0.0.24:5000/MLData/AllData";
    
    // const api = "http://192.168.0.105:5000/MLData/AllData";
    // const api = 'http://127.0.0.24:5000/refresh_coal_amount_trend_curve';
    const api = 'http://127.0.0.24:5000/refresh_onsite_coal_trend_curve';

    axios
      .get(api)
      .then((res) => {

        sp_up_temp_array.shift();
        sp_up_temp_array.push(parseFloat(newCoalMax.value));
        coalTrendData.value.TrendData[2] = sp_up_temp_array;

        sp_down_temp_array.shift();
        sp_down_temp_array.push(parseFloat(newCoalMin.value));
        coalTrendData.value.TrendData[3] = sp_down_temp_array;
        // console.log("0:=======", coalTrendData.value.TrendData[2][349])
        // console.log("1========", temp_data.slice(-1), temp_data.length, CoalMax.value)
        // console.log("2========", temp_data.slice(-1), temp_data.length, CoalMax.value)
        // console.log("3========", temp_data.slice(-1), temp_data.length, CoalMax.value)
        // console.log("4========", temp_data.slice(-1), temp_data.length, CoalMax.value)
        // console.log("1:=======", res.data.sp_up.slice(-1))


        coalTrendData.value.timestamp = res.data.time;
        coalTrendData.value.TrendData[0] = res.data.pv;
        coalTrendData.value.TrendData[1] = res.data.sp;
        // coalTrendData.value.TrendData[2] = res.data.sp_up;  
        // coalTrendData.value.TrendData[3] = res.data.sp_down;  

        // coalPredTrendData.value.timestamp = res.data.time;
        // coalPredTrendData.value.TrendData[0] = res.data.pv;
        // coalPredTrendData.value.TrendData[1] = res.data.sp;
        // coalPredTrendData.value.TrendData[2] = res.data.sp_up;
        // coalPredTrendData.value.TrendData[3] = res.data.sp_down;
        
        FreqTrendData.value.timestamp = res.data.time;
        FreqTrendData.value.TrendData[0] = res.data.freq_1105;
        FreqTrendData.value.TrendData[1] = res.data.freq_1106;
        FreqTrendData.value.TrendData[2] = res.data.freq_1107;

        HeightTrendData.value.timestamp = res.data.time;
        HeightTrendData.value.TrendData[0] = res.data.h_1105;
        HeightTrendData.value.TrendData[1] = res.data.h_1106;
        HeightTrendData.value.TrendData[2] = res.data.h_1107;

        FallTrendData.value.timestamp = res.data.time;
        FallTrendData.value.TrendData[0] = res.data.fall_1105;
        FallTrendData.value.TrendData[1] = res.data.fall_1106;
        FallTrendData.value.TrendData[2] = res.data.fall_1107;

        DepressionTrendData.value.timestamp = res.data.time;
        DepressionTrendData.value.TrendData[0] = res.data.ao_1105;
        DepressionTrendData.value.TrendData[1] = res.data.ao_1106;
        DepressionTrendData.value.TrendData[2] = res.data.ao_1107;

        // CDLTrendData.value.timestamp = res.data.timestamp;
        // CDLTrendData.value.TrendData = res.data.dataAll[10];

        // newCoalMax.value = CoalMax.value;
        // newCoalMin.value = CoalMin.value;
        newCoalSp.value = CoalSp.value = res.data.sp_value;
        CoalPv.value = res.data.pv_value;
        freq_set_1105.value = res.data.freq_1105_value;
        freq_set_1106.value = res.data.freq_1106_value;
        freq_set_1107.value = res.data.freq_1107_value;
        time_value.value = res.data.time_value;
        h_1105.value = res.data.h_1105_value;
        h_1106.value = res.data.h_1106_value;
        h_1107.value = res.data.h_1107_value;
        f_1105.value = res.data.fall_1105_value;
        f_1106.value = res.data.fall_1106_value;
        f_1107.value = res.data.fall_1107_value;
        d_1105.value = res.data.ao_1105_value;
        d_1106.value = res.data.ao_1106_value;
        d_1107.value = res.data.ao_1107_value;
        start_1105.value = res.data.start_1105_flag;
        start_1106.value = res.data.start_1106_flag;
        start_1107.value = res.data.start_1107_flag;
        modeDown.value = res.data.mode;
        
        modelJudgmentRadarData.value = coalIndex.value = [res.data.rmse, res.data.mse, res.data.mae, res.data.mape, res.data.smape];
        // console.log(coalIndex);
        // modelJudgmentRadarData.value = coalIndex.value = res.data.dataOne[4];
        // avePowerpre.value=res.data.dataOne[0][4];
        // PowerPre.value=res.data.dataOne[0][5];

        // newdlMax.value=dlMax.value=res.data.dataOne[1][0];
        // newdlMin.value=dlMin.value=res.data.dataOne[1][1];
        // iSpnew.value=dlSp.value=res.data.dataOne[1][2];
        // dlPv.value=res.data.dataOne[1][3];
        // dlTime.value=res.data.dataOne[1][4];
        // dlMode.value=res.data.dataOne[1][5];

        // yhSp.value=res.data.dataOne[2][1];
        
        // yhPre.value=res.data.dataOne[2][3];
        
        // modelSp.value=res.data.dataOne[3][0];
        // compSp.value=res.data.dataOne[3][1];

        // modeDown.value=Boolean(res.data.dataOne[5][0]);

        // modelJudgmentRadarData.value=coalIndex.value=res.data.dataOne[4]
        
        // console.log(znSp.value,yhSp.value)
        

        // 修改标志位
        trendFinished = false;
      })
      .catch((err) => {
        console.log(err);
        // 修改标志位
        trendFinished = false;
      });
  }
  setTimeout(() => {
    getTrendData();
    
  }, 5000);
}
let writeInDatabaseFinished = false;
function WriteInDatabase() {
  if (!writeInDatabaseFinished) {
    writeInDatabaseFinished = true;
    // const api = "http://127.0.0.1:5000//Huayan/input";
    //const api = "http://127.0.0.24:5000/MLData/spSet";
    const api = "http://192.168.0.105:5000/MLData/spSet";

    axios
      .post(api, {
        data: [
          CoalSp.value,
          modeDes.value,
          modeDown.value,
          iSpnew.value,
          newCoalMax.value,
          newCoalMin.value,
          newdlMax.value,
          newdlMin.value,
          // newdlSp.value,
        ],
      })
      .then((res) => {
        ElMessage({
          message: "数据更新成功！",
          type: "success",
        });
        // console.log(res);
        writeInDatabaseFinished = false;
      })
      .catch((err) => {
        console.log(err);
        writeInDatabaseFinished = false;
      });
  }
}


function switchChange(){
  // bus.emit("switchData", modeDes.value)
  // console.log(modeDes.value)
  if(modeDown.value==1){
    if(modeDes.value==0){
    iSpnew.value=znSp.value;
    // console.log("sys",iSpnew.value,znSp.value)
  }
  if(modeDes.value==1){
    iSpnew.value=yhSp.value;
    // console.log("yh",iSpnew.value,yhSp.value)
  }
  }

}


function modeChange(){
  if(modeDes.value==0){
    iSpnew.value=znSp.value;
  }
  if(modeDes.value==1){
    iSpnew.value=yhSp.value;
  }
}

// const newdata=ref([newCoalSp.value,modeDes.value])


onMounted(() => {
    getTrendData();
    bus.on("CoalSp",data=>{CoalSp.value=newCoalSp.value=data;console.log('busnewCoalSp',newCoalSp.value)})
    
    bus.on("CoalMax",data=>{newCoalMax.value=data;console.log('busnewCoalMax',newCoalMax.value)})
    bus.on("CoalMin",data=>{newCoalMin.value=data;console.log('busnewCoalMin',newCoalMin.value)})
    // bus.on("dlMax",data=>{newdlMax.value=data;console.log('busnewPowerMax',newdlMax.value)})
    // bus.on("dlMin",data=>{newdlMin.value=data;console.log('busnewPowerMin',newdlMin.value)})
    // bus.on("dlSp",data=>{iSpnew.value=data;console.log('busnewDlsp',iSpnew.value)})
    // bus.on("switchData",data=>{newdata.value[1]=data;console.log('bus',newdata[1].value)})
});

watch(() => [iSpnew.value,,newCoalSp.value,modeDes.value,modeDown.value,newCoalMax.value,newCoalMin.value,newdlMax.value,newdlMin.value], () => {
    WriteInDatabase();
    // getTrendData();
    console.log('changed',modeDown.value)
}, {
  deep: true
})

</script>

<style lang="scss" scoped>
:deep(.ant-input-number .ant-input-number-input){
  // color: #52c41a;
  // font-weight: bolder;
  // font-size: 16px;
  text-align: center !important;

}
:deep(.el-button){
  background-color:#057EF9;
  border-color:#057EF9;
  font-size: 15px;
  font-weight: bolder;


}
:deep(.ant-switch-checked) {
        background-color: rgb(231, 14, 43);
      }
:deep(.ant-switch-unchecked) {
  background-color: rgb(65, 231, 14);
}
:deep(.el-table) {
  --el-table-header-bg-color:black;
  --el-table-border-color: aliceblue;
  --el-table-header-text-color: aliceblue;
  --el-table-tr-bg-color: black;
  color: #F05DFF;
  text-align: center;
}
// :deep(.el-popper.is-light){
//   background:rgb(28, 27, 27);
// }

.titleText1 {
  font-size: 30px;
  font-weight: bold;
  color: rgb(97, 147, 215);
  text-align: center;
  position: relative;
  top:-438px;
  left: -4px;
  
}

.titleText2 {
  font-size: 30px;
  font-weight: bold;
  color: rgb(65, 231, 14);
  text-align: center;
  position: relative;
  top:-438px;
  left: -4px;
}

.tongjiPart{
  width: 98%;
  height: 99%;
  position: relative;
  top:5px;
  left:8px;
  display: grid;
  grid-template-rows:16% 16% 16% 16% 16% 16%;
  grid-template-columns:25% 25% 25% 25%;
}
.tongjiTitle{
  width: 98%;
  height: 99%;
  text-align: center;
  color: aliceblue;
  font-size: 16px;

}
.tongjiNum{
  width: 98%;
  height: 99%;
  text-align: center;
  color: rgb(97, 147, 215);
  font-size: 16px;

}
.decisionPart{
  width: 98%;
  height: 99%;
  position: relative;
  top:10px;
  left:8px;
  display: grid;
  grid-template-rows:8% 85% 0.1%;
}
.decisiontitlePart{
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  background: url("../../assets/images/filter-bg1.png");
  background-repeat:no-repeat;
  background-size: 50% 80%;
}
.decisiontextPart{
      position: relative;
      left: 24px;
      top: 2px;
      font-size: 18px;
      font-weight: bolder;
      color: aliceblue;
}
.decisionOptionPart{
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 16px;
  font-weight: bolder;
  display: grid;
  grid-template-rows: 16.7% 16.7% 16.7% 16.7% 16.7% 16.7%;
  grid-template-columns: 50% 50%;
}
.decisionSwitchPart{
      width: 96%;
      height: 100%;
      display: grid;
      grid-template-columns: 1% 1% 1% 35% 25% 35%;
      color : aliceblue ;
      font-size: 16px;
      position: relative;
      top: 25px;
}
.decisionModePart{
      width: 96%;
      height: 100%;
      display: grid;
      grid-template-columns:25% 25% 25% 25% ;
      color : aliceblue ;
      font-size: 19px;
      position: relative;
      top: 20px;
      left:450px;
}
.idexPart{
  width: 98%;
  height: 99%;
  position: relative;
  top:10px;
  left:8px;
  display: grid;
  grid-template-rows:10% 85% ;
}
.idextitlePart{
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  background: url("../../assets/images/filter-bg1.png");
  background-repeat:no-repeat;
  background-size: 50% 80%;
  position:relative;
  top: 5px;
  grid-template-columns: 50% 50%;
}

.idexBottomPart{
  width: 100%;
  height: 100%;
  position: relative;
  left: 155px;
  top: 5px;
}
.idexShowStyle{
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 20% 20%;
  column-gap: 2%;
  position: relative;
  left: 0px;
}
.runningPart{
  width:100%;
  height: 99%;
  position: relative;
  top:10px;
  left:8px;
  display: grid;
  grid-template-rows:12% 85% ;
}
.runningTitlePart{
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  background: url("../../assets/images/filter-bg1.png");
  background-repeat:no-repeat;
  background-size: 50% 80%;
}
.runningOptionPart{
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 16px;
  font-weight: bolder;
  display: grid;
  grid-template-rows: 33% 33% 33%;
  row-gap: 0.2%;
}
.closdLoopPart{
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 16px;
  font-weight: bolder;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-template-rows: 33% 33% 33%;
}

.openLoopPart{
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 16px;
  font-weight: bolder;
  display: grid;
  grid-template-columns: 49% 49%;
  // grid-template-rows: 50% 50%;
}
.halfPart{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 30% 10%;
}

.dataSumPart{
  width: 98%;
  height: 99%;
  position: relative;
  top:10px;
  left:8px;
  display: grid;
  grid-template-rows:10% 90% ;
  font-size: 16px;
  font-weight: bolder;
  // align-items: center;

}
.dataSumTitlePart{
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  background: url("../../assets/images/filter-bg1.png");
  background-repeat:no-repeat;
  background-size: 50% 80%;
}
.CurrentMainPageContainer {
  width: 98%;
  height: 98%;

  position: relative;
  left: 1%;
  top: 1%;

  display: grid;
  grid-template-columns: 67.6% 32.4%;
  column-gap: 0.2%;

  .titlePart {
    width: 300px;
    background: url("../../assets/images/filter-bg1.png");
    background-repeat: repeat-x;

    .titleName {
      position: relative;
      left: 30px;
      font-size: 16px;
      font-weight: bolder;
      color: aliceblue;
    }
  }

  .leftPart {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 33% 33% 33%;
    row-gap: 0.2%;
    
    .leftTopPart{
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 50% 50%;

      column-gap: 0.2%;
    }
    .leftMiddlePart{
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 33.3% 33.3% 33.4%;

      // column-gap: -1%;
    }
  }

  .rightPart {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 33% 33% 33%;
    row-gap: 0.2%;
  }

  .leftPart {
    .modelJudgment {
      width: 95%;
      height: 90%;

      position: relative;
      top: 6%;
      left: 2.5%;

      display: grid;
      grid-template-rows: 10% 90%;
      row-gap: 2%;

      .modelJudgmentContent {
        width: 95%;
        height: 100%;

        display: grid;
        grid-template-columns: 40% 59%;
        column-gap: 1%;

        .resultsContainer {
          width: 100%;
          height: 100%;

          display: grid;
          grid-template-rows: repeat(3, 33%);
          grid-template-columns: 50% 50%;
          gap: 1%;

          align-items: center;
          justify-items: left;
        }
      }
    }
  }

  .oneChartContainer {
    width: 100%;
    height: 100%;

    .dropdownButton {
      position: absolute;
      right: 4%;
      top: 5%;
      z-index: 99;
    }
  }

  .rightPart {
    .controlJudgment {
      width: 95%;
      height: 100%;

      position: relative;
      top: 6%;
      left: 2.5%;

      display: grid;
      grid-template-rows: 8% 90%;
      row-gap: 2%;

      .dropdownButton {
        position: absolute;
        right: 4%;
        top: -1%;
        z-index: 99;
      }

      .judgmentContentContainer {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 40% 59%;
        column-gap: 1%;

        .resultsContainer {
          width: 100%;
          height: 95%;

          display: grid;
          grid-template-rows: repeat(4, 24%);
          gap: 1%;
        }
      }
    }
  }
}
.timePicker {
    width: 180px;
    height: 25px;
    position: absolute;
    left: 260px;
    top: 5px;

    z-index: 99;
  }
</style>
