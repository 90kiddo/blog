import { z } from "zod"

export const userSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(4, "Name must be at least 4 characters")
    .max(50, "Name must be at most 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string({ error: "Email is required" })
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
})