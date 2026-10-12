import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const IDEA_STATUSES = ["proposed", "in-progress", "achieved"] as const;

const ideas = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/next" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    origin: z.enum(["my-proposal", "government-initiative"]),
    status: z.enum(IDEA_STATUSES),
    themes: z.array(z.string()).min(1),
    targetChannel: z.string().optional(),
    relatedNow: z.string().optional(),
    relatedMilestone: z.string().optional(),
    updated: z.string(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/now" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    theme: z.enum([
      "money",
      "mobility",
      "connectivity",
      "energy",
      "society",
      "livelihoods",
      "space",
    ]),
    datasets: z.array(z.string()).default([]),
    unit: z.string(),
    sources: z
      .array(
        z.object({
          name: z.string(),
          url: z.url(),
          retrieved: z.string(),
          note: z.string().optional(),
        }),
      )
      .min(1, "Every visualisation must cite at least one source"),
    updated: z.string(),
  }),
});

export const collections = { ideas, now };
