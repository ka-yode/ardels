import { z } from "zod";

export const createEmployeeSchema = z.object({
  name: z.string().min(6, "This name is not long enough"),
  phoneNumber: z
    .string()
    .min(11, "This phone number is too short")
    .max(11, "this phone number is too long"),
  role: z.string().min(6, "This name is not long enough"),
});

export const createBusinessSchema = z
  .object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmedPassWord: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
    otp: z.string().max(6).min(6),
    companyName: z.string(),
    conpanyCAC: z.string(),
    companyPhoneNumber: z
      .string()
      .min(11, "This phone number isn't complete")
      .max(11, "Phone number is too long"),
    companyEmail: z.string().email(),
    state: z.string(),
    companyAddress: z.string(),
    employees: z.array(createEmployeeSchema),
  })
  .refine((data) => data.password === data.confirmedPassWord, {
    message: "Password doesn't match",
    path: ["confirmedPassWord"],
  });

export type createEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type createBusinessInput = z.infer<typeof createBusinessSchema>;
