/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleX from "vite-plugin-stylex";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleX({
      useRemForFontSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@IndexComponents": "/src/index.ts",
      "@storybookConfig": "/.storybook",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file that we created earlier
    setupFiles: ["./src/setupTests.ts"],
  },
});

