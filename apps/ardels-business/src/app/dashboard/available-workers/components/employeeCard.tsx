import StarRate from "~/components/starRate";
import Image from "next/image";
import Link from "next/link";

export interface EmployeeCardProps {
  employeeImage: string;
  employeeName: string;
  employeeRole: string;
  employeeRating: number;
}
function EmployeeCard({
  employeeImage,
  employeeName,
  employeeRole,
  employeeRating,
}: EmployeeCardProps) {
  return (
    <Link
      href={`/dashboard/available-workers/1`}
      className="flex flex-col items-center gap-4 rounded-md bg-neutral-50 p-4 shadow"
    >
      <Image
        src={employeeImage ?? "/man1.png"}
        alt=""
        width={50}
        height={50}
        className="rounded-full"
      />
      <p className="font-semibold">{employeeName}</p>
      <div className="rounded-full bg-neutral-200 p-2 text-xs shadow">
        <p>{employeeRole}</p>
      </div>
      <StarRate userRating={employeeRating} />
    </Link>
  );
}

export default EmployeeCard;
