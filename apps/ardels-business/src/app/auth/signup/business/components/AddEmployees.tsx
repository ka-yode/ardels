import { useFormContext } from "react-hook-form";
import { createBusinessInput, createEmployeeInput } from ".";
import { useState } from "react";
import { Input } from "@repo/ui/input";
import { FormControl, FormField, FormItem } from "@repo/ui/form";
import { Button } from "@repo/ui/button";
import { Plus } from "lucide-react";

function AddEmployees() {
  const newEmployee = { name: "", phoneNumber: "", role: "" };
  const form = useFormContext<createBusinessInput>();

  // form.setValue("employees", [
  //   { name: "", phoneNumber: "", role: "" },
  //   { name: "", phoneNumber: "", role: "" },
  // ]);
  let employees = form.getValues("employees");

  const handleAddMoreEmployees = () => {
    const currentEmployees = form.getValues("employees");
    form.setValue("employees", [...currentEmployees, newEmployee]);
    employees = form.getValues("employees");
    const employeeLength = employees.length;
    form.trigger(`employees.${employeeLength - 1}.name`, { shouldFocus: true });
    console.log(employees);
  };
  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div>
        <p className="mb-4 text-2xl">Add your employees</p>
        <p className="font-normal text-black/50">
          Easily add your employees to our platform, streamline their
          verification process.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {employees.map((employee, index) => (
          <>
            <div
              key={index}
              className="flex flex-col items-center gap-2 lg:flex-row"
            >
              <FormField
                name={`employees.${index}.name`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="">
                      <Input placeholder="Name" {...field} className="w-full" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name={`employees.${index}.phoneNumber`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name={`employees.${index}.role`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Role" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </>
        ))}
        <Button leftIcon={<Plus />} onClick={handleAddMoreEmployees}>
          Add more employees
        </Button>
      </div>
    </div>
  );
}

export default AddEmployees;
