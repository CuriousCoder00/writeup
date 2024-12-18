import { z } from "zod";

export const postSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(5).max(100),
    content: z.string().min(5).max(1000),
    authorId: z.string().uuid(),
    createdAt: z.string().transform((val) => new Date(val)),
    updatedAt: z.string().transform((val) => new Date(val)),
})

export type Post = z.infer<typeof postSchema>;