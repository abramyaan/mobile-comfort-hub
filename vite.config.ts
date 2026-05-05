import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Важно: слэши с обеих сторон для GitHub Pages
    base: "/mobile-comfort-hub/", 
    build: {
      outDir: "dist/client",
      minify: true, // Оставляем, это полезно для скорости
      // Можно добавить sourcemap: true, если захочешь дебажить ошибки прямо на сайте
      sourcemap: false, 
    },
  },
});