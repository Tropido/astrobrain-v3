import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    vendor: z.enum(['Microsoft','AWS','ISTQB']).optional(),
    category: z.string().optional(),
    level: z.enum(['Fundamentals','Associate','Professional','Expert']).optional(),
    durationHours: z.number().int().positive().optional(),
    delivery: z.array(z.enum(['On-site','Remote','Hybrid','Self-paced'])).default(['Remote','On-site']),
    featured: z.boolean().default(false),

    // Landing page additions (optional)
    heroTagline: z.string().optional(),
    heroBadges: z.array(z.string()).default([]),
    heroImage: z.string().optional(), // path in /public

    audience: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    modules: z.array(z.string()).default([]),

    includes: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),

    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),

    exam: z.object({
      name: z.string().optional(),
      code: z.string().optional(),
      version: z.string().optional(),
    }).optional(),

    seoKeywords: z.array(z.string()).default([]),
  }),
});

export const collections = { pages, courses };
