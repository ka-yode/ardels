import StatusBadge from "@repo/ui/statusBadge";
import Image from "next/image";

export const EmployeeCard = () => {
  return (
    <div className="flex flex-col items-center text-black/50 gap-4 h-max bg-white p-6 rounded-sm w-full lg:col-span-2">
      <Image
        height={75}
        width={75}
        className="rounded-full"
        alt=""
        src="/man1.png"
      />
      <div className="text-center space-y-1">
        <h4 className="font-semibold text-lg text-black">Sunday Moses</h4>
        <p>08109763874</p>
        <p>Kitchen Assistant</p>
      </div>
      <StatusBadge status="success" />
    </div>
  );
};
