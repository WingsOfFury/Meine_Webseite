// Astro-Config-Datei
import { defineConfig } from "astro/config";

// Tailwind CSS importieren
import tailwind from "@astrojs/tailwind";

// React importieren
import react from "@astrojs/react";

// Sentry und Spotlight importieren
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// MDX importieren
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Astro-Plugins registrieren
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sentry(),
    spotlightjs(),
    mdx(),
  ],
  // site: "https://example.com",
  // Markdown-Plugin konfigurieren
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    // gfm: true,
  },
});
