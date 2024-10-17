"use client";
import EmployeeTable from "../components/employeeTable";
import AddEmployeesDialog from "./components/addEmployeesDialog";
import { useUser } from "~/utils/useUser";
import { useQuery } from "@tanstack/react-query";
import { getEmployeesByCompany } from "@repo/api/manageEmployee";

function EmployeePage() {
  const { data: employeesData } = useQuery({
    queryFn: getEmployeesByCompany,
    queryKey: ["get_employees"],
  });

  return (
    <div className="bg-white p-4 h-full">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Employees Summary</p>
        <AddEmployeesDialog />
      </div>
      <EmployeeTable employeesList={employeesData} />
    </div>
  );
}

export default EmployeePage;
