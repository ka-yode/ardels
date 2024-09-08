import { buttonVariants } from "@repo/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import InterviewInviteDialog from "./components/interviewInviteDialog";
import PersonalDetails from "../../components/personDetails";
import WorkerDetailsCard from "./components/workerDetailsCard";

function WorkerDetailsPage() {
  const employeeDetails = {
    name: "Sunday Moses",
    phoneNumber: "08104359615",
    role: "Kitchen Assistant",
    image: "/signup/man1.png",
    address: "No 9 Alebiosu Close Oluyole",
    dob: "20/12/2001",
    stateOfOrigin: "Ogun",
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard/available-workers"
          className={buttonVariants({ variant: "ghost" })}
        >
          <ChevronLeft />
          Back
        </Link>
        <InterviewInviteDialog />
      </div>
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        <WorkerDetailsCard
          employeeImage={employeeDetails.image}
          employeeName={employeeDetails.name}
          phoneNumber={employeeDetails.phoneNumber}
          employeeRole={employeeDetails.role}
        />
        <PersonalDetails />
      </div>
    </div>
  );
}
export default WorkerDetailsPage;
