import { z } from "zod";

const register = z.object({
    name: z.string().min(3, "Name should be of at least 3 characters").max(50, "Name should be of at most 50 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password should be of at least 6 characters"),
});

const login = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password should be of at least 6 characters"),
});

export { register, login };
