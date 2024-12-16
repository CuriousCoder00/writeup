import { z } from "zod";

export const passwordChange = z.object({
    oldPassword: z.string().min(6, "Password should be of at least 6 characters"),
    newPassword: z.string().min(6, "Password should be of at least 6 characters"),
    confirmPassword: z.string().min(6, "Password should be of at least 6 characters")
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});