import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    base: '/locale',

    resolve: {
        alias: {
            utils: './src/utils',
            scripts: './src/scripts',
            css: './src/assets/css',
        }
    },

    build: {
        outDir: './dist',
        assetsDir: './assets',

    }
})
