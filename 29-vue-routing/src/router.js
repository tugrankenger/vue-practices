import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path:'/user',
    name:'User',
    component: ()=> import('./components/user/User.vue')
  },
  {
    path:'/userDetail',
    name:'UserDetail',
    component: ()=> import('./components/user/UserDetail.vue')
  },
  {
    path:'/userEdit',
    name:'UserEdit',
    component: ()=> import('./components/user/UserEdit.vue')
  },
  {
    path: '/userStart',
    name:'UserStart',
    component: ()=> import('./components/user/UserStart.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;