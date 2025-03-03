// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  site: "https://takacsmark.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    jopSoftwarecookieconsent({
      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {},
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies (just for analytics, nothing creepy)",
              description:
                "We only use cookies for <b>Google Analytics</b> to understand how people use the site—no tracking, no ads. Click Accept to help us improve.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Reject",
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Somebody said ... cookies?",
                  description: "I want one!",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More information",
                  description:
                    'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                },
              ],
            },
          },
        },
      },
      guiOptions: {
        consentModal: {
          layout: "bar inline",
          position: "bottom center",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
