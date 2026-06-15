import { defineConfig } from 'vite';
import path from 'path';
import { currentVersion } from "./src/plugins/currentVersion"
import fileCount from "./src/plugins/fileCount";

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

    plugins: [currentVersion(), fileCount()]
})
