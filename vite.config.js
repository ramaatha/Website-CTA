import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7000,
    open: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "/index.html",
        about: "/about.html",
        contact: "/contact.html",
        estimasi: "/estimasi.html",
      },
    },
  },
});
