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
    base: "/mindcanvas-site/",
    plugins,
    publicDir: "./static",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  };
});
