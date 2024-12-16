import { z } from "zod";

export const createPost = z.object({
    title: z.string().min(3, "Title should be of at least 3 characters").max(50, "Title should be of at most 50 characters"),
    content: z.string().min(10, "Content should be of at least 10 characters")
});
