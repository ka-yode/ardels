"use client";
import EmployeeTable from "../components/employeeTable";
import AddEmployeesDialog from "./components/addEmployeesDialog";
import { useUser } from "~/utils/useUser";
import { useQuery } from "@tanstack/react-query";
import { getEmployeesByCompany } from "@repo/api/manageEmployee";

function EmployeePage() {
  const { isLoading } = useUser();
  const { data: employeesData } = useQuery({
    queryFn: getEmployeesByCompany,
    queryKey: ["get_employees"],
  });
  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <div className="min-h-10 size-10 rounded-full border-4 animate-spin border-r-0 border-action"></div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Employees Summary</p>
        <AddEmployeesDialog />
      </div>
      <EmployeeTable employeesList={employeesData} />
    </div>
  );
}

export default EmployeePage;
