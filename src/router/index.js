import { createRouter, createWebHistory } from 'vue-router'

import ResultlInfoScreen from "@/views/ResultlInfoScreen.vue"
import WriteInfoScreen from "@/views/WriteInfoScreen.vue";
import PaymentScreen from "@/views/PaymentScreen.vue";
import ResultAnswerScreen from "@/views/ResultAnswerScreen.vue";
import ResultCreateScreen from "@/views/ResultCreateScreen.vue";
import paymentsMethodScreen from "@/views/paymentsMethodScreen.vue";
import MyResultScreen from "@/views/MyResultScreen.vue";

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
      path: '/myresult',
      name: 'MyResultScreen',
      component: MyResultScreen,
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
    },{
        path: '/paymentsMethod',
        name: 'paymentsMethodScreen',
        component: paymentsMethodScreen,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
