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

export const createcompanyPRofile = async ({
  ...values
}: z.infer<typeof CreateCompanyProfileSchema>) => {
  const data = await f("POST", "createcompanyPRofile", { ...values });
  return data;
};
