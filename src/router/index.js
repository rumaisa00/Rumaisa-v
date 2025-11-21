import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Calendar from "../components/Calendar.vue";
import Kanban from "../components/Kanban.vue";
import MealsList from "../components/MealsList.vue";
import MealDetail from "../components/MealDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/calendar", component: Calendar },
  { path: "/kanban", component: Kanban },
  { path: "/meals", component: MealsList },
  { path: "/meal/:id", component: MealDetail } // optional dynamic route
];

const router = createRouter({
  history: createWebHistory("/Rumaisa-v/"), // important for GitHub Pages
  routes
});

export default router;
