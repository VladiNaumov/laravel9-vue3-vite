import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue'
import * as path from "path";

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/src/main.js',
            ],
            refresh: true,
        }),
    ],

   resolve: {
      alias: {
         '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      }
   },

});
