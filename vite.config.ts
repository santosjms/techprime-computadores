import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr'
import path from "path";

export default defineConfig(({ mode }) => ({
  base: '/techprime-computadores/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(),svgr()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
