// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/BIS-website/", // Your repo name
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split external libraries into valid chunks
          vendor: ["react", "react-dom", "react-router", "react-ga4"],
          ui: ["swiper", "flag-icons", "react-icons"],
        },
      },
    },
  },
});
