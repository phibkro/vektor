import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), db()],
  site: "https://phibkro.github.io",
  base: "vektor",
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});