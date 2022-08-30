import { createRouter, createWebHistory } from 'vue-router'
const routes =[
  {
    path: '/',
    name: 'Home',
    meta:{
      title: 'Home'
    },
    component: () => import("../src/views/Home.vue")
  },
  {
    path: '/completed',
    name: 'Completed',
    meta:{
      title: 'Completed Items'
    },
    component: () => import("../src/views/Completed.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router