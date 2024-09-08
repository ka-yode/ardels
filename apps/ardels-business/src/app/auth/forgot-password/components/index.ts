import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    email: z.string().email("This email is not valid"),
    otp: z.string().min(6, "otp is too short").max(6, "otp is too long"),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  });
export type resetPasswordInput = z.infer<typeof resetPasswordSchema>;
