import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Заставляем TanStack Start генерировать статический index.html
  start: {
    ssr: false,
  },
  vite: {
    // Базовый путь для GitHub Pages
    base: "/mobile-comfort-hub/",
  },
});