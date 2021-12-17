import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import QuestionMenu from "../views/QuestionMenu.vue";
import RessourcesMenu from "../views/RessourcesMenu.vue";
import SimulationMenu from "../views/SimulationMenu.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions",
    name: "QuestionMenu",
    component: QuestionMenu,
  },
  {
    path: "/ressources",
    name: "RessourcesMenu",
    component: RessourcesMenu,
  },
  {
    path: "/simulation",
    name: "SimulationMenu",
    component: SimulationMenu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
