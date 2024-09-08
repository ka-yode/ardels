import { buttonVariants } from "@repo/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown";
import StatusBadge from "@repo/ui/statusBadge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@repo/ui/table";
import { VerificationStatus } from "@repo/ui/types";
import { CircleSlash, Ellipsis, LinkIcon, User } from "lucide-react";
import Link from "next/link";

export interface EmployeeDataProps {
  name: string;
  phoneNumber: string;
  jobTitle: string;
  status: VerificationStatus;
}
type EmployeeListProps = { employeesList: EmployeeDataProps[] };
function EmployeeTable({ employeesList }: EmployeeListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-max">Name</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employeesList.map((employee, index) => (
          <TableRow key={index}>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.phoneNumber}</TableCell>
            <TableCell>{employee.jobTitle}</TableCell>
            <TableCell>
              <StatusBadge status={employee.status} />
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/employees/1"
                      className="flex items-center gap-2"
                    >
                      <User size={16} />
                      View Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LinkIcon size={16} />
                    Resend Link
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CircleSlash size={16} />
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default EmployeeTable;
