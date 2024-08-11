import { createRouter, createWebHistory } from "vue-router";

// 建立路由
const routes = [
    {
        // 根
        path: '/',
        // TODO 目前先转到一系列
        redirect: '/first',
        name: 'root',
        component: () => import("../components/layouts/decisionMainPart.vue")
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router