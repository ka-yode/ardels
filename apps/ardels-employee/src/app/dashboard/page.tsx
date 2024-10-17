import { EmployeeCard } from "./components/employeeCard";
import { EmployeeDetails } from "./components/employeeDetails";

export default function EmployeeDashboard() {
  return (
    <div className="grid lg:grid-cols-6 gap-6 h-full">
      <EmployeeCard />
      <EmployeeDetails />
    </div>
  );
}
