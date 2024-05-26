import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [];

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
