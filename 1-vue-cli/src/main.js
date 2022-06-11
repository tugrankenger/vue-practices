import { createApp } from 'vue' //const app = Vue.createApp()
import App from './App.vue';
import "@/assets/style.css"; // @ src klasoru
import AppHeader from "@/components/AppHeader"

const app = createApp(App);

app.component("app-header",AppHeader)
app.mount('#app')
