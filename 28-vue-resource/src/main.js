import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Axios from 'axios'
Axios.defaults.baseURL = "https://vue-resource-f8d71-default-rtdb.firebaseio.com/users.json"
const app = createApp(App)
app.mount('#app')