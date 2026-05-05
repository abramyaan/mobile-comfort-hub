import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // В твоей версии это вызывается напрямую как функция
    TanStackRouterVite(), 
    react(),
    tsconfigPaths(),
  ],
  base: "/mobile-comfort-hub/",
  build: {
    outDir: "dist",
    minify: true,
    sourcemap: false,
  },
});