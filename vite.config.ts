import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite"; // 1. Добавь импорт

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(), // 2. Добавь плагин СЮДА
    tsconfigPaths(),
  ],
  base: "/mobile-comfort-hub/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
  },
});