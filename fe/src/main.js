import { createApp } from 'vue'
import App from './App.vue'
// 引入datav
import DataVVue3 from '@kjgl77/datav-vue3'
// 引入ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// 引入全局app样式
import "./assets/index.scss"
// 引入Pinia用作全局状态管理包
// import { createPinia } from 'pinia';
// 引入echarts
import echarts from './utils/echarts';
// 引入router
// import router from "./router/index.js";
// 引入axios
import Axios from 'axios';
import VueAxios from 'vue-axios'
// 引入Mitt作为全局事件总线
import mitt from "mitt";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const bus = mitt();

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(Antd)

app.config.globalProperties.$echarts = echarts;

// 注册全局事件总线
app.config.globalProperties.$bus = bus

app.use(DataVVue3)

// app.use(router);

// const pinia = createPinia()
// app.use(pinia);

// 全局注册axios
app.use(VueAxios, Axios)
app.use(ElementPlus)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
