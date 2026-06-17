import { defineConfig } from 'vite';
import path from 'path';
import { currentVersion } from "./src/plugins/currentVersion"
import fileCount from "./src/plugins/fileCount";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
    root: '.',
    base: '/locale',
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        },

    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "@@": path.resolve(__dirname, '.'),
        }
    },

    build: {
        outDir: './dist',
        assetsDir: 'assets',
        sourcemap: mode === 'development',
        minify: mode !== 'development',
        rolldownOptions: {
            output: {
                codeSplitting: {
                    groups: [
                        {
                            test: /node_modules/,
                            name: 'libs'
                        }
                    ]
                }
            }
        }
    },

    plugins: [currentVersion(), fileCount(), visualizer()]
}))
