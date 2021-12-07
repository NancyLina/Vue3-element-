import { createApp } from 'vue'
import App from './App.vue'
import router from '../../../src/router/index'
import store from '../../../src/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(ElementPlus).mount('#app')
