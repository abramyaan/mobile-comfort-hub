import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/mobile-comfort-hub/",
    build: {
      outDir: "dist/client",
      minify: true,
    },
  },
});