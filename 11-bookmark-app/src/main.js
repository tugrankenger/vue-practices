import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'
import appAxios from '@/utils/appAxios'

import "@/assets/style.css"

import appHeader from "@/components/Shared/AppHeader";
import appBookmarkList from "@/components/Shared/appBookmarkList" // appBookmarkList klasoru altindaki index.vue' yu otomatik olarak alacaktir.

import io from "socket.io-client";
const socket = io("http://localhost:2018");

const app = createApp(App)
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router)
app.use(store)
app.config.globalProperties.$appAxios = appAxios
app.config.globalProperties.$socket= socket;
app.mount('#app')
