import {createRouter, createWebHistory} from 'vue-router'

import ResultlInfoScreen from "@/views/ResultlInfoScreen.vue";
import ResultChapterScreen from "@/views/ResultChapterScreen.vue";

const routes = [
    {
        path: '/resultInfo',
        name:'ResultInfoScreen',
        component:ResultlInfoScreen,
    },
    {
        path: '/resultChapter',
        name:'ResultChapterScreen',
        component:ResultChapterScreen,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router