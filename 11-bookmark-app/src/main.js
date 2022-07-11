import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'
import appAxios from '@/utils/appAxios'

import "@/assets/style.css"

import appHeader from "@/components/Shared/AppHeader";
import appBookmarkList from "@/components/Shared/appBookmarkList" // appBookmarkList klasoru altindaki index.vue' yu otomatik olarak alacaktir.

const app = createApp(App)
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router)
app.use(store)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
