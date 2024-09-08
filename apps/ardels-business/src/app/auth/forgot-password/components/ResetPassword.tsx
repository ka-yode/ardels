import { useFormContext } from "react-hook-form";
import { resetPasswordInput } from ".";
import { FormControl, FormField } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { useCheckString } from "@repo/ui/hooks";
import PasswordChecks from "../../components/passwordChecks";

function ResetPasswordInputs() {
  const form = useFormContext<resetPasswordInput>();
  const password = form.watch("password");
  const { hasLowercase, hasNumeric, hasUppercase, stringCount } =
    useCheckString(password);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-10">
        <div>
          <p className="mb-4 text-2xl">Update your Password</p>
          <p className="text-black/50">Enter your new password</p>
        </div>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormControl>
                <Input {...field} placeholder="New password" type="password" />
              </FormControl>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormControl>
                <Input
                  {...field}
                  placeholder="Confirm Password"
                  type="password"
                />
              </FormControl>
            )}
          />
        </div>
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

export default ResetPasswordInputs;
