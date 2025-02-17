import { z } from "zod";
export const LoginValidationSchema = z.object({
  email: z
    .string({ required_error: "Name should be string" })
    .email("First Latter must be Capital"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least character"),
});
