import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: "/addfeedback/:id",
    name: "AddFeedback",
    component: () => import(/* webpackChunkName: "add feeback" */ '../views/AddFeedback.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
