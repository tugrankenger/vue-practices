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
  {
    path:"/new",
    name:"NewBookmarkPage",
    component: () => import('@/views/NewBookmark')
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})