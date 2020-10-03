import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/login/index1.vue")
  },
  {
    path: "/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/pages/layout/index.vue"),
    children: [
      {
        path: "/workBeanch",
        name: "workBeanch",
        component: () =>
          import(/* webpackChunkName: "workBeanch" */ "@/views/workBeanch")
      },
      {
        path: "/userMange",
        name: "userMange",
        // redirect: "/userMange/commonUserMange",
        component: () =>
          import(/* webpackChunkName: "userMange" */ "@/views/userMange"),
        children: [
          {
            path: "commonUserMange",
            component: () =>
              import(
                /* webpackChunkName: "commonUserMange" */ "@/views/userMange/commonUserMange"
              )
          },
          {
            path: "vipUserMange",
            component: () =>
              import(
                /* webpackChunkName: "vipUserMange" */ "@/views/userMange/vipUserMange"
              )
          }
        ]
      },
      {
        path: "/setting",
        name: "setting",
        component: () =>
          import(/* webpackChunkName: "setting" */ "@/views/setting")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
})

export default router
