import {createWebHistory, createRouter} from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Body from './components/Body.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/body',
            name: 'body',
            component: Body
        },
    ]

})
