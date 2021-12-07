import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from '../src/router/index';
import store from '../src/store/index';
import 'element-plus/dist/index.css';
import './utils/rem';
//main.ts


createApp(App).use(router).use(ElementPlus).mount('#app');
