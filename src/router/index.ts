import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import routes from './router';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
