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
