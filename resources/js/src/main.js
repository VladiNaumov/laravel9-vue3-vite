import {createApp} from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://laravel9-vue3-vite/api'

/* main.js точка входа в приложение здесь подключен глобально компонент "App.vue" с которого начинается выполнение вашего приложения */
createApp(App)
   .use(router)
    .use(store)

.mount('#app')



