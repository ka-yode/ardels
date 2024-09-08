import EmployeeTable, { EmployeeDataProps } from "../components/employeeTable";
import { VerificationStatus } from "@repo/ui/types";
import AddEmployeesDialog from "./components/addEmployeesDialog";

function EmployeePage() {
  const employeeData: EmployeeDataProps[] = [
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.FAILED_ADDRESS,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.FAILED_GUARANTOR,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.IN_VERIFICATION,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.VERIFIED,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.NOT_RESPONDED,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.NOT_RESPONDED,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.IN_VERIFICATION,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.FAILED_ADDRESS,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.FAILED_GUARANTOR,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.FAILED_ADDRESS,
    },
  ];
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Employees Salary</p>
        <AddEmployeesDialog />
      </div>
      <EmployeeTable employeesList={employeeData} />
    </div>
  );
}

export default EmployeePage;
