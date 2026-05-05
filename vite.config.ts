import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/mobile-comfort-hub/",
    build: {
      // Это гарантирует, что билд будет ориентирован на клиентскую часть
      outDir: "dist/client",
    }
  },
});