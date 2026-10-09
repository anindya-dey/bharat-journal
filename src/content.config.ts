import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const IDEA_STATUSES = [
  "proposed",
  "submitted",
  "in-progress",
  "achieved",
  "stalled",
  "declined",
] as const;

const ideas = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/next" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    origin: z.enum(["my-proposal", "government-initiative"]),
    status: z.enum(IDEA_STATUSES),
    statusNote: z.string().optional(),
    themes: z.array(z.string()).min(1),
    recipient: z.string().optional(),
    targetChannel: z.string().optional(),
    submissions: z
      .array(
        z.object({
          platform: z.string(),
          channel: z.string(),
          date: z.string(),
          referenceNumber: z.string().optional(),
          archivedUrl: z.string().optional(),
        }),
      )
      .default([]),
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
    sparkline: z
      .object({
        dataset: z.string(),
        key: z.string(),
      })
      .optional(),
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
    relatedIdeas: z.array(z.string()).default([]),
    updated: z.string(),
  }),
});

export const collections = { ideas, now };
