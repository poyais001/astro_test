// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://visionary-rolypoly-445885.netlify.app",
  integrations: [preact()]
});