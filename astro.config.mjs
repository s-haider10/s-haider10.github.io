import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// This is a USER site (s-haider10.github.io) deployed at root.
// If you ever migrate to a project subpath (e.g. /website/), set `base: '/website'`.
export default defineConfig({
  site: "https://s-haider10.github.io",
  integrations: [sitemap()],
});
