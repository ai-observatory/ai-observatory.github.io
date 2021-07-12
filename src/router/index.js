import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// history: createWebHistory(),
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/database",
    name: "Database",
    component: () =>
      import(/* webpackChunkName: "database" */ "../views/Database.vue")
  },
  {
    path: "/glossary",
    name: "Glossary",
    component: () =>
      import(/* webpackChunkName: "aiobservatory" */ "../views/Glossary.vue")
  },
  {
    path: "/context",
    name: "Context",
    component: () =>
      import(/* webpackChunkName: "Context" */ "../views/Context.vue")
  },
  {
    path: "/admsharms",
    name: "Admsharms",
    component: () =>
      import(/* webpackChunkName: "Admsharms" */ "../views/Admsharms.vue")
  },
  {
    path: "/reclaiming",
    name: "Reclaiming AI Futures",
    component: () =>
      import(/* webpackChunkName: "Reclaiming AI Futures" */ "../views/Reclaiming.vue")
  },
  {
    path: "/takeaction",
    name: "Takeaction",
    component: () =>
      import(/* webpackChunkName: "Takeaction" */ "../views/Takeaction.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
