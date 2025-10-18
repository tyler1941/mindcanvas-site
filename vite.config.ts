// vite.config.ts / vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";

export default defineConfig(({ mode }) => {
  const plugins = [react()];
  if (mode === "development") plugins.push(screenGraphPlugin());

  return {
    plugins,
    publicDir: "public",          // ★ 여기만 이렇게 바꾸기 (또는 아예 지워도 기본값이 public)
    css: { postcss: { plugins: [tailwind()] } },
  };
});
