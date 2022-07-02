import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/style.css"

import appHeader from "@/components/Shared/AppHeader";
import appBookmarkList from "@/components/Shared/appBookmarkList"

const app = createApp(App)
app.component("AppHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router)
app.mount('#app')
