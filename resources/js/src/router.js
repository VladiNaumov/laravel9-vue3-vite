import {createWebHistory, createRouter} from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Body from './components/Body.vue';
import Desks from './components/Desks/Desks.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/desks',
            name: 'desks',
            component: Desks
        },
        {
            path: '/body',
            name: 'body',
            component: Body
        },
    ]

})
