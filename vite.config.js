import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split(".").pop();
          if (/svg|png|jpg|jpeg|gif|webp/.test(ext)) {
            return "assets/images/[name].[ext]";
          } else if (/css/.test(ext)) {
            return "assets/styles/[name].[ext]";
          } else if (/woff|woff2|ttf|otf|eot/.test(ext)) {
            return "assets/fonts/[name].[ext]";
          } else {
            return "assets/[name].[ext]";
          }
        },
        chunkFileNames: "assets/scripts/[name].js",
        entryFileNames: "assets/scripts/[name].js",
      },
    },
  },
});
