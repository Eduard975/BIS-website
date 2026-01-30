import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { visualizer } from "rollup-plugin-visualizer";
import { beasties } from "vite-plugin-beasties";

// https://vite.dev/config/
export default defineConfig({
  base: "/BIS-website/",
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    beasties({
      options: {
        pruneSource: true,
      },
    }),
    // visualizer({
    //   open: true,
    //   filename: "stats.html",
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
});
