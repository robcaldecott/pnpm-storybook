/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-dts";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: isExternal,
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    minify: false,
    target: "esnext",
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});
