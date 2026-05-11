import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy"; // Импорт плагина для старых устройств

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
      // Генерирует облегченный JS для старых версий Android и Chrome
      targets: ["defaults", "not IE 11", "android > 4.4"],
    }),
  ],
  base: "/mobile-comfort-hub/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "terser", // Используем установленный terser для мощного сжатия
    terserOptions: {
      compress: {
        drop_console: true, // Убирает логи из кода, ускоряя выполнение JS
        pure_funcs: ["console.info", "console.debug"],
      },
    },
    sourcemap: false,
    rollupOptions: {
      output: {
        // Разбиваем код на части, чтобы старый телефон не зависал при загрузке
        manualChunks: {
          vendor: ["react", "react-dom", "lucide-react"],
        },
      },
    },
  },
});