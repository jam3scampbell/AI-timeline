// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        // Let’s increase the limit so you don’t get “chunk size” warnings as easily
        // chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                // manualChunks splits big deps into separate chunks
                manualChunks(id) {
                    // Put framer-motion in its own chunk
                    if (id.includes('node_modules/framer-motion')) {
                        return 'framer-motion';
                    }
                    // If GSAP is installed, put it in its own chunk
                    if (id.includes('node_modules/gsap')) {
                        return 'gsap';
                    }
                    // Put all other node_modules in “vendor”
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    }
});
