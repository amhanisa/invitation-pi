import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import User from "../services/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/invitation/:id",
      name: "invitation",
      component: () => import("../views/InvitationView.vue"),
      beforeEnter: (to, from, next) => {
        function isValid(id) {
          return User.getUser(id);
        }

        if (!isValid(to.params.id)) {
          next({ name: "home" });
        }

        next();
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
      beforeEnter: (to, from, next) => {
        next({ name: "home" });
      },
    },
  ],
});

export default router;
