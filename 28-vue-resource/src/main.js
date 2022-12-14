import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Axios from 'axios'
Axios.defaults.baseURL = "https://vue-resource-f8d71-default-rtdb.firebaseio.com/users.json"
Axios.interceptors.request.use(function(config){
  // console.log("config:", config)
  if(config.method == "get"){
    alert("this is get request")
  }else if(config.method == "post"){
    alert("This is post method")
  }
  return config
},function(error){
  return Promise.reject(error)
})
Axios.interceptors.response.use(function(response){
  // console.log("response interceptors: ",response)
  if(response.status == 200){
    alert("response status is success")
  }
  return response
},function(error){
  return Promise.reject(error)
})
const app = createApp(App)
app.mount('#app')