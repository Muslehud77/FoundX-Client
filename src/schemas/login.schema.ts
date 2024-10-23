import { z } from "zod";

export const loginValidationSchema = z.object({
    email: z.string().trim().email("Please enter a valid email"),
    password: z.string().min(5,"Password must be at least 5 characters long"),
})