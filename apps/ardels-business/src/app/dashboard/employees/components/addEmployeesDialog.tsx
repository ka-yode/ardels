"use client";
import { createEmployeeSchema } from "~/app/auth/signup/business/components";
import { Button } from "@repo/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@repo/ui/dialog";
import { Form, FormControl, FormField } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@repo/ui/dialog";
import { Minus, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { sendEmployeeInvite } from "@repo/api/manageUser";

export const addEmployeesSchema = z.object({
  employees: z.array(createEmployeeSchema),
});

type addEmployeesInput = z.infer<typeof addEmployeesSchema>;

function AddEmployeesDialog() {
  const form = useForm<addEmployeesInput>({
    resolver: zodResolver(addEmployeesSchema),
    defaultValues: {
      employees: [
        { name: "", phoneNumber: "", userRole: "" },
        { name: "", phoneNumber: "", userRole: "" },
      ],
    },
  });
  let employees = form.getValues("employees");
  const removeEmployee = (index: number) => {
    employees.splice(index, 1);
    form.setValue("employees", employees);
    // employees = form.getValues("employees");
    console.log(employees);
    form.trigger("employees");
  };
  const newEmployee = { name: "", phoneNumber: "", userRole: "" };

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: sendEmployeeInvite,
  });

  const handleAddMoreEmployees = () => {
    const currentEmployees = form.getValues("employees");
    form.setValue("employees", [...currentEmployees, newEmployee]);
    // employees = form.getValues("employees");
    const employeeLength = employees.length;
    form.trigger(`employees.${employeeLength - 1}.name`, { shouldFocus: true });
    console.log(employees);
  };
  const handleSendInvite = async () => {
    const employees = form.getValues("employees");
    console.log(employees);
    await mutateAsync({ ...employees });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="action" size="sm" leftIcon={<Plus />}>
          Add Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[40%] lg:p-20">
        <div>
          <DialogTitle className="text-2xl">Add employees</DialogTitle>
          <DialogDescription className="text-black/50">
            Easily add your employees to our platform, streamline their
            verification process.
          </DialogDescription>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSendInvite)}>
            <div className="flex flex-col gap-6">
              {employees.map((employee, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 lg:flex-row"
                >
                  <div className="flex w-full flex-1 flex-col gap-4 lg:flex-row">
                    <FormField
                      control={form.control}
                      name={`employees.${index}.name`}
                      render={({ field }) => (
                        <FormControl>
                          <Input {...field} placeholder="Name" />
                        </FormControl>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`employees.${index}.phoneNumber`}
                      render={({ field }) => (
                        <FormControl>
                          <Input {...field} placeholder="Phone Number" />
                        </FormControl>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`employees.${index}.userRole`}
                      render={({ field }) => (
                        <FormControl>
                          <Input {...field} placeholder="userRole" />
                        </FormControl>
                      )}
                    />
                  </div>
                  {index > 0 && (
                    <Button
                      className="!size-4 self-end rounded-full !p-2 lg:self-auto"
                      onClick={() => {
                        removeEmployee(index);
                      }}
                      size="icon"
                    >
                      <Minus size={12} />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="link"
                leftIcon={<Plus />}
                className="self-end p-0"
                onClick={handleAddMoreEmployees}
              >
                Add more employees
              </Button>
            </div>
            <Button variant="action" type="submit" loading={isPending}>
              Send Link
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddEmployeesDialog;
