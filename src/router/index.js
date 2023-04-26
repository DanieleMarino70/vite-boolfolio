import { createRouter, createWebHistory } from "vue-router";

import ProjectList from "../pages/ProjectList.vue";
import HomePage from "../pages/HomePage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: HomePage
        },
        {
            path: '/projects',
            name:'projects',
            component: ProjectList

        }
    ]
});

export {router};