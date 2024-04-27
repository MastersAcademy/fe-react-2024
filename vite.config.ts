import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    plugins: [react(), tsconfigPaths(), svgr()],
    base: '/fe-react-2024/',
});
