import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
2;
