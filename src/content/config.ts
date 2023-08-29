import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});

export const collections = { posts };
