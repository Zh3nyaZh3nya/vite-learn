import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: '.',
    base: '/locale',

    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "@@": path.resolve(__dirname, '.'),
        }
    },

    build: {
        outDir: './dist',
        assetsDir: 'assets',

    }
})
