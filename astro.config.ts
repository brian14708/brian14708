import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://brian14708.dev",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
