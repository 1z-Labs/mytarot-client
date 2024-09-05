import {createRouter, createWebHistory} from 'vue-router'
import ResultlInfoScreen from "@/views/ResultlInfoScreen.vue";

const routes = [
    {
        path: '/resultInfo',
        name:'ResultInfoScreen',
        component:ResultlInfoScreen,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router