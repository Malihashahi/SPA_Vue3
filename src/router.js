import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomeComponent.vue';
import TemplateUser from './pages/users/UserTemplate.vue';
import IndexUser from './pages/users/user_index.vue';
import ShowUser from './pages/users/ShowUser.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/users', name: 'userTemplate', component: TemplateUser , children:[
        {path: '', name: 'users', component: IndexUser},
        { path: ':id', name: 'userId', component: ShowUser }
    ] }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;