"use client";
import FormWrapper from "~/app/auth/components/formwrapper";
import { createBusinessInput } from ".";
import { FormControl, FormField, FormItem, FormLabel } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { useFormContext } from "react-hook-form";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import { useCheckString } from "@repo/ui/hooks";
import { CircleCheck, CircleX } from "lucide-react";
import PasswordChecks from "~/app/auth/components/passwordChecks";

function CreateAccount() {
  const form = useFormContext<createBusinessInput>();

  const passwordString = form.watch("password");
  console.log(passwordString);
  const { hasLowercase, hasUppercase, stringCount, hasNumeric } =
    useCheckString(passwordString);

  return (
    <div className="flex h-full flex-col gap-10 lg:gap-20">
      <div className="mt-6 flex flex-col gap-4">
        <p className="text-3xl">Join Our Platform</p>
        <p className="text-black/50">
          Sign up today to verify your employees, manage their information.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email Address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmedPassWord"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...field}
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

export default CreateAccount;
