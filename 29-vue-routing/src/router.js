import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    meta:{
      title: 'Home Page'
    }
  },
  {
    path:'/user',
    name:'User',
    component: ()=> import('./components/user/User.vue'),
    meta:{
      title: 'User'
    },

    children:[
      {
        path: '',
        name:'UserStart',
        component: ()=> import('./components/user/UserStart.vue'),
        meta:{
          title: 'User Start'
        }
      },
      {
        path:':id',
        name:'UserDetail',
        component: ()=> import('./components/user/UserDetail.vue'),
        meta:{
          title:'User Detail'
        },
        beforeEnter: (to, from, next) => {
          console.log('Enter UserDetail');
          next()
        },
      },
      {
        path:':id/UserEdit',
        name:'UserEdit',
        component: ()=> import('./components/user/UserEdit.vue'),
        meta:{
          title:'User Edit'
        }
      },
      {
        path:'/trump',
        redirect:{
          name:'Home'
        }
      },
      {
        path:'/:pathMatch(.*)*',
        redirect: "/"
      }
    ]
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return{
        selector: to.hash
      }
    }
  }
})

router.beforeEach((to,from,next)=>{
  document.title= `${to.meta.title}`
  next()
})

export default router;