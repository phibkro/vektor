import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind({ applyBaseStyles: false}), 
    db(),
  ],
  site: "https://vektor.pages.dev/",
  output: "hybrid",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  security: {
    checkOrigin: true,
  },
  vite: {
		optimizeDeps: {
			exclude: ["astro:db"]
		}
	},
});