// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsList from '../views/MealsList.vue';
import KanbanBoard from '../views/KanbanBoard.vue';
import MealDetail from '../views/MealDetail.vue';
import Calendar from '../views/Calendar.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/meals', name: 'MealsList', component: MealsList },
  { path: '/kanban', name: 'KanbanBoard', component: KanbanBoard },
  { path: '/meal/:id', name: 'MealDetail', component: MealDetail },
  { path: '/calendar', name: 'Calendar', component: Calendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
