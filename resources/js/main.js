import {createApp} from 'vue'
import App from './src/App.vue'
import './bootstrap';
import '../sass/app.scss'




/* main.js точка входа в приложение здесь подключен глобально компонент "App.vue" с которого начинается выполнение вашего приложения */

createApp(App)

/* (global) глобальная регистрастрация компонента */
    // .use(Route)
    // .use(Store)
.mount('#app')
