import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginRadar } from "vite-plugin-radar";
import seo from "./seo.js";

// Production builds swap React for Preact (same API via preact/compat, a
// fraction of the size). Dev keeps React so fast refresh keeps working.
const preact = {
  react: "preact/compat",
  "react-dom/client": "preact/compat/client",
  "react-dom": "preact/compat",
  "react/jsx-runtime": "preact/jsx-runtime",
  "react/jsx-dev-runtime": "preact/jsx-dev-runtime",
};

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    seo(),
    VitePluginRadar({
      analytics: {
        id: "G-NGY6H64ENF",
      },
    }),
  ],
  resolve: command === "build" ? { alias: preact } : {},
  base: "/", // Use root path since we're using a custom domain
}));
