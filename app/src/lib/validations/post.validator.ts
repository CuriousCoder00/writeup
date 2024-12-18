import { z } from "zod";

export const postSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(5).max(100),
    content: z.string().min(5).max(1000),
    authorId: z.string().uuid(),
    author: z.object({
        id: z.string().uuid(),
        name: z.string().min(5).max(100),
        email: z.string().email(),
    }),
    createdAt: z.string().transform((val) => new Date(val)),
    updatedAt: z.string().transform((val) => new Date(val)),
})

export type Post = z.infer<typeof postSchema>;