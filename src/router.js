import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomeComponent.vue';
import IndexUser from './pages/users/user_index.vue';

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/users", name: "users", component: IndexUser }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;