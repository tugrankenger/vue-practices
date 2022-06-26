import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path:"/",
    name:"HomePage",
    component: () => import('@/views/Home')
  },
  {
    path:"/login",
    name:"LoginPage",
    component: () => import('@/views/Login')
  },
  {
    path:"/register",
    name:"RegisterPage",
    component: () => import('@/views/Register')
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})