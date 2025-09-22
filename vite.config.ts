import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";

export default defineConfig(({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    plugins.push(screenGraphPlugin());
  }

  return {
    // base: "/mindcanvas-site/", // 이 줄을 삭제하거나 주석 처리
    plugins,
    publicDir: "./static",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  };
});
