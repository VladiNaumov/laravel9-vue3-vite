import {createApp} from 'vue'
import App from './App.vue'
import store from './store.js'
import router from './router.js';


/* main.js точка входа в приложение здесь подключен глобально компонент "App.vue" с которого начинается выполнение вашего приложения */
createApp(App)
   .use(router)
    .use(store)

.mount('#app')



