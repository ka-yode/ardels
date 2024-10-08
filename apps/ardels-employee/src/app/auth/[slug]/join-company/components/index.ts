import { z } from "zod";

export const EmployeeAcceptInviteSchema = z.object({
  phoneNumber: z
    .string()
    .min(14, "Phone number is too short")
    .max(14, "Phone number is too short"),
  inviteToken: z.string(),
  password: z.string().min(8, "Password is too short"),
  comnfirmPassword: z.string().min(8, "Password is too short"),
  name: z.string(),
  companyId: z.string(),
  NIN: z.string(),
  dateOfBirth: z.date(),
  address: z.string().min(30, "Adress is too short"),
  stateOfOrigin: z.string(),
  resume: z.string(),
  utilityBill: z.string(),
  passportPhoto: z.string(),
  lga: z.string(),
  city: z.string(),
  phone: z.string(),
  landmark: z.string(),
  guarantor_1_name: z.string(),
  guarantor_1_phoneNumber: z.string(),
  guarantor_1_relationship: z.string(),
  guarantor_1_address: z.string(),
  guarantor_1_passportPhoto: z.string(),
  guarantor_1_city: z.string(),
  guarantor_1_state: z.string(),
  guarantor_1_lga: z.string(),
  guarantor_1_landmark: z.string(),
  guarantor_2_name: z.string(),
  guarantor_2_phoneNumber: z.string(),
  guarantor_2_relationship: z.string(),
  guarantor_2_address: z.string(),
  guarantor_2_passportPhoto: z.string(),
  guarantor_2_city: z.string(),
  guarantor_2_state: z.string(),
  guarantor_2_lga: z.string(),
  guarantor_2_landmark: z.string(),
  employeeProfileId: z.string(),
});
export type EmployeeAcceptInviteInput = z.infer<
  typeof EmployeeAcceptInviteSchema
>;
