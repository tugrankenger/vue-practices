import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$filters= {
  textLength(value){
    return value + ' ' + '('+ value.split('').length +')'
  }
}

app.mount('#app');
