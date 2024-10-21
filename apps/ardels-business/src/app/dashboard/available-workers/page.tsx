"use client";
import { Input } from "@repo/ui/input";
import EmployeeCard, { EmployeeCardProps } from "./components/employeeCard";
import { useQuery } from "@tanstack/react-query";
import { getAllAvailableEmployees } from "@repo/api/manageEmployee";

function AvailableWorkersPage() {
  // const availableWorkers: EmployeeCardProps[] = [
  //   {
  //     employeeName: "Tunde Adebayo",
  //     employeeImage: "/signup/lojay.png",
  //     employeeRole: "Kitchen Assistant",
  //   },
  //   {
  //     employeeName: "Tunde Adebayo",
  //     employeeImage: "/signup/lojay.png",
  //     employeeRole: "Kitchen Assistant",
  //   },
  //   {
  //     employeeName: "Tunde Adebayo",
  //     employeeImage: "/signup/lojay.png",
  //     employeeRole: "Kitchen Assistant",
  //   },
  //   {
  //     employeeName: "Tunde Adebayo",
  //     employeeImage: "/signup/lojay.png",
  //     employeeRole: "Kitchen Assistant",
  //   },
  //   {
  //     employeeName: "Tunde Adebayo",
  //     employeeImage: "/signup/lojay.png",
  //     employeeRole: "Kitchen Assistant",
  //   },
  // ];
  const { data, isError } = useQuery({
    queryFn: getAllAvailableEmployees,
    queryKey: ["GET_AVAILABLE_EMPLOYEES"],
  });
  return (
    <div className="flex flex-col items-center gap-4 rounded-md md:bg-white md:p-8">
      <Input placeholder="Search for role or name" className="md:w-3/5" />
      <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {!!data &&
          data.map((availableWorker, index) => (
            <EmployeeCard
              key={index}
              employeeName={availableWorker.inviteId.employee.name}
              employeeImage={availableWorker.inviteId.employee.passportPhoto}
              employeeRole={availableWorker.inviteId.employee.role}
              employeeRating={availableWorker.rating}
            />
          ))}
      </div>
    </div>
  );
}

export default AvailableWorkersPage;
