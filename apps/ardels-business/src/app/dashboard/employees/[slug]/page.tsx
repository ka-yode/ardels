import { VerificationStatus } from "@repo/ui/types";
import PersonalDetails from "../../components/personDetails";
import EmployeeDetailsCard from "./components/employeeCard";

function EmployeeDetails() {
  const employeeDetails = {
    name: "Sunday Moses",
    number: "08155586675",
    role: "Kitchen Assitant",
    status: VerificationStatus.NOT_RESPONDED,
    image: "/signup/man2.png",
  };
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <EmployeeDetailsCard
        employeeName={employeeDetails.name}
        phoneNumber={employeeDetails.number}
        employeeImage={employeeDetails.image}
        status={employeeDetails.status}
        employeeRole={employeeDetails.role}
      />
      <PersonalDetails />
    </div>
  );
}

export default EmployeeDetails;
