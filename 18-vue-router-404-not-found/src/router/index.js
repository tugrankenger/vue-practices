import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: 'Home'
    }
  },
  {
    path: '/features',
    name: 'Features',
    component: ()=> import('../views/Features.vue'),
    meta:{
      title:'Features'
    }
  },
  {
    path:'/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue'),
    meta:{
      title: 'Pricing'
    }
  },
  {
    path:'/:pathMatch(.*)*',
    name:'Not-Found',
    component: () => import('../views/NotFound.vue'),
    meta:{
      title:'Not Found Page'
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