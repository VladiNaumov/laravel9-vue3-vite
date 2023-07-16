import {createWebHistory, createRouter} from 'vue-router';


import Home from './components/Home.vue';
import Desks from './components/Desks/Desks.vue'
import ShowDesk from "./components/Desks/ShowDesk.vue";

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
          path: '/desks/:deskId',
          name: 'showDesk',
          component: ShowDesk,
          // для передачи :deskId
          props: true
       },
    ]

})
