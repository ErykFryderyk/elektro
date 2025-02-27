import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView, // do jakiego komponentu będzie przenosić po kliknięciu
  },
  {
    path: "/about",
    name: "about",
    component: AboutView, // do jakiego komponentu będzie przenosić po kliknięciu
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView, // do jakiego komponentu będzie przenosić po kliknięciu
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView, // do jakiego komponentu będzie przenosić po kliknięciu
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
