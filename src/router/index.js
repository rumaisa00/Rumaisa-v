// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

// Import your views
import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import KanbanBoard from '../views/KanbanBoard.vue'
import MealsList from '../views/MealsList.vue'
import MealDetail from '../views/MealDetail.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/kanban',
    name: 'KanbanBoard',
    component: KanbanBoard
  },
  {
    path: '/meals',
    name: 'MealsList',
    component: MealsList
  },
  {
    path: '/meal/:id',
    name: 'MealDetail',
    component: MealDetail
  }
]

// Create router
const router = createRouter({
  history: createWebHashHistory(), // ✅ use hash mode for GitHub Pages
  routes
})

export default router
