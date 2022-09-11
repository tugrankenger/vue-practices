import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
const routes = [
  {
    path:'/',
    name:'Home',
    component: Home,
    meta:{
      title:"Home"
    },
  },
  {
    path:'/about',
    name:'About',
    component: () => import('../components/About.vue'),
    meta:{
      title:'About'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}`
  next()
})

export default router