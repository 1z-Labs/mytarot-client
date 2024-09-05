import {createRouter, createWebHistory} from 'vue-router'
import ResultlInfoScreen from "@/views/ResultlInfoScreen.vue";
import WriteInfoScreen from "@/views/WriteInfoScreen.vue";

const routes = [
    {
        path: '/resultInfo',
        name:'ResultInfoScreen',
        component:ResultlInfoScreen,
    },
    {
        path: '/writeInfo',
        name:'WriteInfoScreen',
        component: WriteInfoScreen
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router