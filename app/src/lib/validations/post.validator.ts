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
    Likes: z.array(z.object({
        id: z.string().uuid(),
        userId: z.string().uuid(),
    })),
    Comments: z.array(z.object({
        id: z.string().uuid(),
        content: z.string().min(5).max(1000),
        authorId: z.string().uuid(),
    })),
    createdAt: z.string().transform((val) => new Date(val)),
    updatedAt: z.string().transform((val) => new Date(val)),
})

export const createPostSchema = z.object({
    title: z.string().min(5).max(100),
    content: z.string().min(5).max(1000),
})

export const updatePostSchema = z.object({
    title: z.string().min(5).max(100),
    content: z.string().min(5).max(1000),
})

export type Post = z.infer<typeof postSchema>;
export type CreatePostType = z.infer<typeof createPostSchema>;
export type updatePostType = z.infer<typeof updatePostSchema>;