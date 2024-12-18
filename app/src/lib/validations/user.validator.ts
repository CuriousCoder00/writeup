import { z } from "zod";

export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const userSignupSchema = z.object({
    name: z.string().min(6, "Name must be at least 6 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password should be of at least 6 characters"),
    confirmPassword: z.string().min(6, "Password should be of at least 6 characters")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const User = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    createdAt: z.string().transform((val) => new Date(val)),
    updatedAt: z.string().transform((val) => new Date(val)),
})

export type User = z.infer<typeof User>
export type UserLoginInput = z.infer<typeof userLoginSchema>
export type UserSignupInput = z.infer<typeof userSignupSchema>