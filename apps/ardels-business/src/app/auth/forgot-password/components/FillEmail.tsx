"use client";
import { useFormContext } from "react-hook-form";
import { resetPasswordInput } from ".";
import { FormControl, FormField } from "@repo/ui/form";
import { Input } from "@repo/ui/input";

function FillEmail() {
  const form = useFormContext<resetPasswordInput>();
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-2xl">Regain Access to Your Account </p>
        <p className="leading-loose text-black/50">
          Forgot your password? No problem! Follow these simple steps to reset
          it and get back to managing your workforce
        </p>
      </div>
      <FormField
        name="email"
        control={form.control}
        render={({ field }) => (
          <FormControl>
            <Input placeholder="Email Address" {...field} />
          </FormControl>
        )}
      />
    </div>
  );
}

export default FillEmail;
