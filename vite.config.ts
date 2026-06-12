import { defineConfig } from 'vite';
import path from 'path';
import { version } from "./src/plugins/version"

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
    },

    plugins: [version()]
})
