import { z } from "zod";

export const guarantorSchema = z.object({
  name: z.string(),
  relationship: z.string(),
  address: z.string(),
  phoneNumber: z.string(),
});

export const createEmployeeSchema = z.object({
  phoneNumber: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  name: z.string(),
  nin: z.string(),
  dob: z.date(),
  stateOfOrigin: z.string(),
  address: z.string(),
  guarantors: z.array(guarantorSchema),
});

export type createGuarantorInput = z.infer<typeof guarantorSchema>;
export type createEmployeeInput = z.infer<typeof createEmployeeSchema>;
