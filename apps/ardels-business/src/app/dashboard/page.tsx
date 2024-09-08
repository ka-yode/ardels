import { cn } from "@repo/ui/utils";
import { Button, buttonVariants } from "@repo/ui/button";
import { CircleSlash, Users } from "lucide-react";
import { title } from "process";

import EmployeeTable, { EmployeeDataProps } from "./components/employeeTable";
import { VerificationStatus } from "@repo/ui/types";
import Link from "next/link";

export default function DashboardPage() {
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
      status: VerificationStatus.IN_VERIFICATION,
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
      status: VerificationStatus.NOT_RESPONDED,
    },
    {
      name: "Sunday Moses",
      phoneNumber: "08104359615",
      jobTitle: "Kitchen Assistant",
      status: VerificationStatus.VERIFIED,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-6">
          <p className="text-3xl font-semibold">Welcome 44bukaz</p>
          <p className="text-neutral-400">
            Your One-Stop Solution for Employee Verification and Payment
            Management
          </p>
          <div className="flex items-center justify-between gap-4 rounded-lg bg-action px-5 py-10 text-white lg:p-10">
            <div className="flex flex-col items-start gap-2">
              <p className="text-2xl font-semibold">
                NGN 10,000
                <span className="text-sm font-light text-neutral-200">
                  /month
                </span>
              </p>
              <p className="text-xs text-neutral-200 lg:text-sm">
                Let’s provide the best for you
              </p>
            </div>
            <Button variant="white">Upgrade</Button>
          </div>
        </div>
        <div className="flex items-end justify-between gap-4 lg:col-span-2 lg:justify-normal">
          <DashboardDetails
            icon={<Users />}
            title="Employee"
            amount={50}
            className="bg-green-400/40 text-green-400"
          />
          <DashboardDetails
            icon={<CircleSlash />}
            title="Removed Employee"
            amount={12}
            className="bg-warning-foreground text-warning"
          />
        </div>
      </div>
      <div className="rounded-md bg-white p-4 lg:p-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-semibold">Employees Summary</p>
          <Link
            href="/dashboard/employees"
            className={buttonVariants({ variant: "ghost" })}
          >
            View All
          </Link>
        </div>
        <EmployeeTable employeesList={employeeData} />
      </div>
    </div>
  );
}
interface DashboardDetails {
  icon: React.ReactNode;
  title: string;
  amount: number;
  className: string;
}
function DashboardDetails({
  icon,
  title,
  amount,
  className,
}: DashboardDetails) {
  return (
    <div className="flex size-44 flex-col justify-between gap-4 rounded-lg bg-white p-5">
      <div
        className={cn(
          "flex size-14 items-center justify-center rounded-full " + className
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="text-xs">{title}</p>
        <p className="text-lg font-semibold">{amount}</p>
      </div>
    </div>
  );
}
