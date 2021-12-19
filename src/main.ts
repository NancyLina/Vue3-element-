import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from '../src/router/index';
import store from '../src/store/index';
import 'element-plus/dist/index.css';
import './utils/rem';
 // 统一导入el-icon图标
import  * as ElIconModules from '@element-plus/icons'

const app=createApp(App)
// 统一注册el-icon图标
for(let iconName in ElIconModules){
    app.component(iconName,ElIconModules[iconName])
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// createApp(App).use(router).use(ElementPlus).mount('#app');
