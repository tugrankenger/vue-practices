import {createRouter, createWebHistory} from "vue-router";
//import {HomeCmp} from "@/components/HomeCmp"

const routes = [ // routes array alir ve route edilecekleri tutar.
    {
        name:"HomePage",
        path: "/",
        //component: HomeCmp
        component: () => import("@/views/HomeCmp")
    },
    {
        name:"AboutPage",
        path: "/about",
        component: () => import("@/views/AboutCmp")
    },
    {
        name:"DetailPage",
        path: "/details/:userId",
        component: ()=> import("@/views/DetailsCmp")
    }
];

const router = createRouter({
    // olusturdugumuz router icin kullanicagimiz nitelikleri obje icerisinde yaziyoruz.

    //routes: routes 
    // key: value cifti ayni ise webpack arkaplanda bunun donusumunu yapiyor yani sadece routes yazabiliriz.

    routes,
    history : createWebHistory()

});

export default router;

