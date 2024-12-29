import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: '/AI-timeline/', // Use root path since we're using a custom domain
});