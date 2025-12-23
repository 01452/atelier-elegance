import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";
import { join } from "path";

// Плагин для создания 404.html из index.html для GitHub Pages
const copy404Plugin = () => ({
  name: "copy-404",
  closeBundle() {
    const distPath = join(__dirname, "dist");
    copyFileSync(join(distPath, "index.html"), join(distPath, "404.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path для GitHub Pages (имя репозитория)
  base: mode === "production" ? "/atelier-elegance/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
