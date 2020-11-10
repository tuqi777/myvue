import Vue from 'vue'
import VueRouter from 'vue-router'
// 自动生成页面--自动添加路由
import addRoute from './addRoute'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/login/index1.vue"),
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
        meta: {
          title: "首页",
        },
        component: () =>
          import(/* webpackChunkName: "workBeanch" */ "@/views/workBeanch"),
      },
      {
        path: "/userMange",
        name: "userMange",
        redirect: "/userMange/commonUserMange",
        meta: {
          title: "用户管理",
        },
        // redirect: "/userMange/commonUserMange",
        component: () =>
          import(/* webpackChunkName: "userMange" */ "@/views/userMange"),
        children: [
          {
            path: "commonUserMange",
            name: "commonUserMange",
            meta: {
              title: "普通用户管理",
            },
            component: () =>
              import(
                /* webpackChunkName: "commonUserMange" */ "@/views/userMange/commonUserMange"
              ),
          },
          {
            path: "vipUserMange",
            name: "vipUserMange",
            meta: {
              title: "vip用户管理",
            },
            component: () =>
              import(
                /* webpackChunkName: "vipUserMange" */ "@/views/userMange/vipUserMange"
              ),
          },
        ],
      },
      {
        path: "/setting",
        name: "setting",
        meta: {
          title: "设置",
        },
        component: () =>
          import(/* webpackChunkName: "setting" */ "@/views/setting"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import(/* webpackChunkName: "404" */ "@/pages/404.vue"),
  },
];

const router = new VueRouter({
  routes:routes.concat(addRoute)
})

export default router
