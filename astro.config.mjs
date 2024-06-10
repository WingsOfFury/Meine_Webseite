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

//Remark Reading Time importieren
import { remarkReadingTime } from "./remark-reading-time.mjs";

//Rehype External Links importieren
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";

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
    sitemap(),
  ],
  // site: "http://192.168.0.199:4321/",
  // Markdown-Plugin konfigurieren
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: {
            type: "text",
            value: " ↗️",
          },
        },
      ],
    ],
    // gfm: true,
  },
});
