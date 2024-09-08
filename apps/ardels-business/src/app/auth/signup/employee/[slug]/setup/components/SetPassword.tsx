import FormWrapper from "~/app/auth/components/formwrapper";
import { useFormContext } from "react-hook-form";
import { createEmployeeInput } from ".";
import { FormControl, FormField } from "@repo/ui/form";
import { Input } from "@repo/ui/input";

export default function SetPassword() {
  const form = useFormContext<createEmployeeInput>();
  return (
    <FormWrapper>
      <p>Invite Accepted</p>
      <p>Setup your details and password </p>

      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormControl>
            <Input placeholder="Phone number" {...field} />
          </FormControl>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormControl>
            <Input placeholder="Password" {...field} />
          </FormControl>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormControl>
            <Input placeholder="Confirm Password" {...field} />
          </FormControl>
        )}
      />
    </FormWrapper>
  );
}
