import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 7000,
    open: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "/index.html",
      },
    },
  },
});
