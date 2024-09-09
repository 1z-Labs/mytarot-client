import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/styles.css';
import 'swiper/swiper-bundle.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
