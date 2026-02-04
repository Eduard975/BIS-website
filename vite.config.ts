import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { visualizer } from "rollup-plugin-visualizer";
import { beasties } from "vite-plugin-beasties";
import { BASE_PATH } from "./basepath";

export default defineConfig({
  base: BASE_PATH,
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    beasties({
      options: {
        pruneSource: false,
        reduceInlineStyles: true,
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
