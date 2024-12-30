// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: process.env.GITHUB_REF === 'refs/heads/preview' ? '/preview/' : '/',
});