import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Brazil from '../views/Brazil.vue'
// import Hawaii from '../views/Hawaii.vue'
// import Jamaica from '../views/Jamaica.vue'
// import Panama from '../views/Panama.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: ()=> import('../views/About.vue')
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: ()=> import('../views/Brazil.vue')
  },
  {
    path:'/hawaii',
    name: 'Hawaii',
    component: ()=> import('../views/Hawaii.vue')
  },
  {
    path:'/jamaica',
    name: 'Jamaica',
    component: ()=> import('../views/Jamaica.vue')
  },
  {
    path:'/panama',
    name: 'Panama',
    component: ()=> import('../views/Panama.vue')
  },
  {
    path: '/destination/:id',
    name: 'Destination',
    component: ()=> import('../views/DestinationShow.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  //linkActiveClass: 'vue-school-active-link'  // active durumunda istedigimiz class ismini verebiliriz
})

// createWebHashHistory url'in sonuna hash(#) isareti ekler, url'in bu bolumu hicbir zaman sunucuya gonderilmediginden 
// sunucu tarafinda herhangi ozel bir islem gerektirmez.

//componentlerin hepsi yukarida tanimladiginda sayfa acildiginda hepsi birlikte yuklenir
// lazy-loading seklinde yuklemek icin, component: ()=> import('../views/panama...') seklinde import etmemiz gerekiyor

export default router