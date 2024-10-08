"use client";
import { z } from "zod";
import { EmployeeSignUpSchema } from "@repo/api/manageEmployees";
import { FormControl, FormField, FormItem } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { useCheckString } from "@repo/ui/hooks";
import PasswordChecks from "@repo/ui/passwordChecks";
import { EmployeeAcceptInviteInput } from ".";
import { useFormContext } from "react-hook-form";

export default function EmployeeSignUpForm() {
  const form = useFormContext<EmployeeAcceptInviteInput>();

  const passwordString = form.watch("password");
  const { hasLowercase, hasUppercase, stringCount, hasNumeric } =
    useCheckString(passwordString);
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-4 mb-10">
        <p className="text-2xl">Invite accepted</p>
        <p className="text-black/50">Setup your details and password</p>
      </div>
      <div className="space-y-6">
        <FormField
          name="phoneNumber"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Phone Number"
                  {...field}
                  className="w-full"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="w-full"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="comnfirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  {...field}
                  className="w-full"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <PasswordChecks
          hasLowercase={hasLowercase}
          hasUppercase={hasUppercase}
          hasNumeric={hasNumeric}
          stringCount={stringCount}
        />
      </div>
    </div>
  );
}
