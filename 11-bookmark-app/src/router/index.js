import { createRouter, createWebHashHistory } from 'vue-router';
import store from "../store"
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
  },
  {
    path:"/favorites",
    name:"Favorites",
    meta: {
      componentName:"appBookmarkList"
    },
    component: () => import('@/views/Account')
  },
  {
    path:"/likes",
    name:"Likes",
    meta:{
      componentName: "appBookmarkList"
    },
    component: () => import('@/views/Account')
  },
  {
    path:"/settings",
    name:"Settings",
    meta: {
      componentName: "userSettings"
    },
    component: () => import('@/views/Account')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, _ ,next)=>{
  const authRequiredRoutes = ["HomePage"];
  const authNotRequiredRoutes = ["LoginPage","RegisterPage"]
  const _isAuthenticated = store.getters._isAuthenticated

  if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false)

  if(authRequiredRoutes.indexOf(to.name) > -1){
    if(_isAuthenticated) next();
    else next({name: 'LoginPage'});
  }else{
    next()
  }
  // console.log("to",to);
  // console.log("from",from);
  // next()
})

export default router