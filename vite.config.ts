import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Убираем basepath отсюда, оставляем только базовые настройки
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tsconfigPaths(),
  ],
  // Это главный параметр для GitHub Pages
  base: "/mobile-comfort-hub/",
  build: {
    outDir: "dist",
    minify: true,
    sourcemap: false,
  },
});