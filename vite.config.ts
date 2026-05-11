import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    legacy({
      // Генерирует код, понятный для старых версий Android и Chrome
      targets: ["defaults", "not IE 11", "android > 4.4"],
      renderLegacyChunks: true,
      polyfills: true,
    }),
  ],
  base: "/mobile-comfort-hub/",
  build: {
    // Минификация terser должна быть строго в корне объекта build
    minify: "terser",
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true, // Убирает console.log для ускорения работы
        pure_funcs: ["console.info", "console.debug"],
      },
      format: {
        comments: false, // Удаляет комментарии, уменьшая вес файлов
      },
    },
    rollupOptions: {
      // Здесь мы оставляем только логику разделения кода
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "lucide-react"],
        },
      },
    },
  },
});