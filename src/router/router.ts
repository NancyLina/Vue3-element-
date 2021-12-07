// TS需要引入每个路由的类型定义
import { RouteRecordRaw } from 'vue-router'
import MainPage from '@/views/MainPage.vue';
import Nav1 from '@/views/Nav1.vue';
import Nav2 from '@/views/Nav2.vue';
import HelloWorld from '@/views/HelloWorld.vue'
// 定义一个路由数组

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
        path: '/mainpage',
        name: 'mainpage',
        component: MainPage,
        children:[
            {
                path: 'nav1',
                name: 'nav1',
                component: Nav1,
            },
            {
                path: 'nav2',
                name: 'nav2',
                component: Nav2,
            },
        ]
    },
    {
      path: '/axios',
      name: 'Axios',
      component: () => import('@/views/axios.vue'), // 懒加载组件
    },
];

// 暴露定义好的路由数据
export default routes;