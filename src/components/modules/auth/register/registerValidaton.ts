import { z } from "zod";
export const registerValidationSchema = z.object({
  name: z
    .string({ required_error: "Name should be string" })
    .min(2, "First Latter must be Capital"),
  email: z
    .string({ required_error: "Name should be string" })
    .email("First Latter must be Capital"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least character"),
  passwordConfirm: z.string({
    required_error: "Password conformation is required",
  }),
});
