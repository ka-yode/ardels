import { z } from "zod";
import { f } from ".";

export const CreateCompanyProfileSchema = z.object({
  companyName: z.string().min(8),
  cacNumber: z.string(),
  companyEmail: z.string().email(),
  companyPhoneNumber: z.string(),
  state: z.string(),
  companyAddress: z.string().min(20, "Address is too short"),
});

export const createcompanyProfile = async ({
  ...values
}: z.infer<typeof CreateCompanyProfileSchema>) => {
  const data = await f("POST", "create-company-profile", { ...values });
  return data;
};

export const createEmployeeSchema = z.object({
  name: z.string().min(6, "This name is not long enough"),
  phoneNumber: z
    .string()
    .min(14, "This phone number is too short")
    .max(14, "this phone number is too long"),
  userRole: z.string().min(6, "This name is not long enough"),
});

export const sendEmployeeInviteSchema = z.array(createEmployeeSchema);

export const sendEmployeeInvite = async ({
  ...value
}: z.infer<typeof sendEmployeeInviteSchema>) => {
  const employees = [...Object.values(value)];
  console.log(employees);
  const data = await f("POST", "send-invite", { employees });
  return data;
};
