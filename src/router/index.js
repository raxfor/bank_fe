import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import App from "../App.vue";
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";
import Home from "../components/Home.vue";
import Account from "../components/Account.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/user/logIn",
    name: "logIn",
    component: LogIn
  },
  {
    path: "/user/signUp",
    name: "signUp",
    component: SignUp
  },
  {
    path: "/user/home",
    name: "home",
    component: Home
  },
  {
    path: "/user/account",
    name: "account",
    component: Account
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
