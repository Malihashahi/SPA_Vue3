import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomeComponent.vue';

import TemplateUser from './pages/users/UserTemplate.vue';
import IndexUser from './pages/users/user_index.vue';
import ShowUser from './pages/users/ShowUser.vue';

import TemplatePost from './pages/posts/PostTemplate.vue';
import IndexPost from './pages/posts/PostIndex.vue';
import ShowPost from './pages/posts/ShowPost.vue';
import CreatePost from './pages/posts/CreatePost.vue';
const routes = [
    { path: '/', name: 'home', component: Home },
    {
        path: '/users', name: 'userTemplate', component: TemplateUser, children: [
            { path: '', name: 'users', component: IndexUser },
            { path: ':id', name: 'userId', component: ShowUser }
        ]
    },
    {
        path: '/posts', name: 'postTemplate', component: TemplatePost, children: [
            { path: '', name: 'posts', component: IndexPost },
            { path: ':id', name: 'postId', component: ShowPost }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;