import { Input } from "@repo/ui/input";
import EmployeeCard, { EmployeeCardProps } from "./components/employeeCard";

function AvailableWorkersPage() {
  const availableWorkers: EmployeeCardProps[] = [
    {
      employeeName: "Tunde Adebayo",
      employeeImage: "/signup/lojay.png",
      employeeRole: "Kitchen Assistant",
    },
    {
      employeeName: "Tunde Adebayo",
      employeeImage: "/signup/lojay.png",
      employeeRole: "Kitchen Assistant",
    },
    {
      employeeName: "Tunde Adebayo",
      employeeImage: "/signup/lojay.png",
      employeeRole: "Kitchen Assistant",
    },
    {
      employeeName: "Tunde Adebayo",
      employeeImage: "/signup/lojay.png",
      employeeRole: "Kitchen Assistant",
    },
    {
      employeeName: "Tunde Adebayo",
      employeeImage: "/signup/lojay.png",
      employeeRole: "Kitchen Assistant",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 rounded-md md:bg-white md:p-8">
      <Input placeholder="Search for role or name" className="md:w-3/5" />
      <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {availableWorkers.map((availableWroker, index) => (
          <EmployeeCard
            key={index}
            employeeName={availableWroker.employeeName}
            employeeImage={availableWroker.employeeImage}
            employeeRole={availableWroker.employeeRole}
          />
        ))}
      </div>
    </div>
  );
}

export default AvailableWorkersPage;
