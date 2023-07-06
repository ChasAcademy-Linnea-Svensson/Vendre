import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EmployeeView from '../views/EmployeeView.vue';
import EmployeeInfoView from '../views/EmployeeInfoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/employees',
      name: 'employees',
      component: EmployeeView,
    },
    {
      path: '/employees/:id',
      name: 'employee',
      component: EmployeeInfoView,
    },
  ],
});

export default router;
