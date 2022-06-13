import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name:"completedPage",
        path:"/completed",
        component: () => import("@/views/CompletedCmp")
    },
    {
        name:"newPage",
        path:"/new",
        component : ()=> import("@/views/NewCmp")
    },
    {
        name:"todo",
        path:"/todo",
        component : ()=> import("@/views/TodoCmp")
    }
]

const router= createRouter({
    routes,
    history: createWebHistory()
});

export default router;