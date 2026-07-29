// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// Hosted as a GitHub Pages project site at https://bashbop.github.io/otito-web/
export default defineConfig({
  site: "https://bashbop.github.io",
  base: "/otito-web",
  vite: {
    plugins: [tailwindcss()],
  },
});
