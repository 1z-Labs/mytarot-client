import { createRouter, createWebHistory } from 'vue-router'

import ResultlInfoScreen from "@/views/ResultlInfoScreen.vue";
import WriteInfoScreen from "@/views/WriteInfoScreen.vue";
import PaymentScreen from "@/views/PaymentScreen.vue";
import ResultAnswerScreen from "@/views/ResultAnswerScreen.vue";
import ResultCreateScreen from "@/views/ResultCreateScreen.vue";
import paymentsMethodScreen from "@/views/paymentsMethodScreen.vue";
import MyInfoResult from "@/views/MyInfoResult.vue";
import HomeScreen from "@/views/HomeScreen.vue";
import CategoryListDetailScreen from "@/views/CategoryListDetailScreen.vue";

const routes = [
    {
        path: '/resultInfo',
        name: 'ResultInfoScreen',
        component: ResultlInfoScreen,
    },
    {
        path: '/resultCreate',  // 첫 페이지는 목차
        name: 'ResultCreateScreen',
        component: ResultCreateScreen,
        props: { default: true },
    },
    {
        path: '/resultChapter/:chapterIndex',  // 이후 페이지는 chapterIndex로 구분
        name: 'ResultAnswerScreen',
        component: ResultAnswerScreen,
        props: true
    },
    {
        path: '/writeInfo',
        name: 'WriteInfoScreen',
        component: WriteInfoScreen
    },
    {
        path: '/payments',
        name: 'PaymentsScreen',
        component: PaymentScreen,
    },
    {
        path: '/paymentsMethod',
        name: 'paymentsMethodScreen',
        component: paymentsMethodScreen,
    }
    ,{
        path: '/myinfoResult',
        name: 'MyInfoResult',
        component: MyInfoResult,
    },
    {
        path: '/home',
        name: 'HomeScreen',
        component: HomeScreen,
    },
    {
        path: '/categoryDetail',
        name: 'CategoryListDetailScreen',
        component: CategoryListDetailScreen,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
