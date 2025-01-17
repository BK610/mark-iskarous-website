// @ts-check
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), sanity({
    projectId: 'neusm05o',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
    studioBasePath: "/admin",
    apiVersion: "2025-01-16",
  })],
});