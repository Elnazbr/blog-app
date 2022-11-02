import PostsPage from "@/views/PostsPage";
import MeI from "@/views/MeI";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { 
        path: "/", 
        component: PostsPage 
    },
    {
        path: "/me",
        component: MeI
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
