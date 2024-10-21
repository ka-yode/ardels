import Image from "next/image";
import { EmployeeCardProps } from "../../components/employeeCard";
interface WorkerDetailsProps {
  employeeImage: string;
  employeeName: string;
  employeeRole: string;
  phoneNumber: string;
}
function WorkerDetailsCard({
  employeeImage,
  employeeName,
  employeeRole,
  phoneNumber,
}: WorkerDetailsProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-white px-16 py-4 text-center shadow md:w-max">
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
    </div>
  );
}

export default WorkerDetailsCard;
