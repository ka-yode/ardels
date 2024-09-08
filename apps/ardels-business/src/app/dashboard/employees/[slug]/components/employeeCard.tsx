import { Button } from "@repo/ui/button";
import StatusBadge from "@repo/ui/statusBadge";
import { EmployeeCardProps } from "../../../../dashboard/available-workers/components/employeeCard";
import { VerificationStatus } from "@repo/ui/types";
import Image from "next/image";
import RemoveEmployeeDialog from "./removeEmployeeDialog";

interface EmployeeDetailsCardProps extends EmployeeCardProps {
  phoneNumber: string;
  status: VerificationStatus;
}

function EmployeeDetailsCard({
  employeeImage,
  employeeName,
  employeeRole,
  phoneNumber,
  status,
}: EmployeeDetailsCardProps) {
  return (
    <div className="flex h-max w-full flex-col items-center gap-4 rounded-lg bg-white p-4 text-center shadow lg:w-72">
      <Image
        src={employeeImage}
        alt=""
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col items-center gap-1">
        <p className="font-semibold">{employeeName}</p>
        <p className="text-sm">{phoneNumber}</p>
        <p className="text-neutral-400">{employeeRole}</p>
      </div>
      <StatusBadge status={status} />
      <div className="flex w-full flex-row gap-4 lg:flex-col">
        <Button variant="greyscale" className="flex-1">
          Resend Link
        </Button>
        <RemoveEmployeeDialog />
      </div>
    </div>
  );
}

export default EmployeeDetailsCard;
