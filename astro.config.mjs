// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// Hosted as a GitHub Pages project site at https://nugehs.github.io/repoctx-web/
export default defineConfig({
  site: "https://nugehs.github.io",
  base: "/repoctx-web",
  vite: {
    plugins: [tailwindcss()],
  },
});
