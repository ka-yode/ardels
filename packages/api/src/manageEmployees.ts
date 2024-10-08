import { z } from "zod";
import { f } from ".";

export type employeeShape = {
  _id: string;
  name: string;
  phoneNumber: string;
  company: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  status: string;
};

export const getEmployeesByCompany = async () => {
  const data = (await f("GET", "getAllEmployees")) as employeeShape[];
  return data;
};
export const EmployeeSignUpSchema = z.object({
  phoneNumber: z.string(),
  inviteToken: z.string(),
  password: z.string(),
  comnfirmPassword: z.string(),
});
export const EmployeeSignUp = async ({
  ...values
}: z.infer<typeof EmployeeSignUpSchema>) => {
  const data = (await f("POST", "employee-signup", { ...values })) as {
    message: string;
    employee: {
      id: string;
      name: string;
      phoneNumber: string;
      role: string;
      company: string;
      invite: string;
    };
  };
  return data;
};

export const EmployeeProfileSchema = z.object({
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
});

export const createEmployeeProfile = async ({
  ...values
}: z.infer<typeof EmployeeProfileSchema>) => {
  const data = (await f("POST", "employee-create-profile", { ...values })) as {
    message: "Employee Profile Created Successfully";
    data: {
      firstName: string;
      lastName: string;
      NIN: string;
      NIN_status: string;
      dateOfBirth: string;
      address: string;
      address_status: {
        address_check: string;
      };
      address_details: {
        city: string;
        initialLatitude: number;
        initialLongitude: number;
        landmark: string;
        latitude: number;
        lgaName: string;
        locationUrl: string;
        longitude: string;
        stateName: string;
        street: string;
      };
      stateOfOrigin: string;
      resume: string;
      utilityBill: string;
      phone: string;
      lga: string;
      landmark: string;
      passportPhoto: string;
      company: string;
      employee: string;
      _id: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  };
  return data;
};

export const AddGuarantorsSchema = z.object({
  guarantor_1_name: z.string(),
  guarantor_1_phoneNumber: z.string(),
  guarantor_1_relationship: z.string(),
  guarantor_1_address: z.string(),
  guarantor_1_passportPhoto: z.string(),
  guarantor_2_name: z.string(),
  guarantor_2_phoneNumber: z.string(),
  guarantor_2_relationship: z.string(),
  guarantor_2_address: z.string(),
  guarantor_2_passportPhoto: z.string(),
  employeeProfileId: z.string(),
  companyId: z.string(),
});
export const addGuarantors = async ({
  ...values
}: z.infer<typeof AddGuarantorsSchema>) => {
  const data = f("POST", "employee-create-guarantor-profile", { ...values });
  return data;
};
