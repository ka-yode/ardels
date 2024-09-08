import { Button } from "@repo/ui/button";
import { Form, FormControl, FormField } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

function UpdatePassword() {
  const updatePasswordSchema = z
    .object({
      currentPassword: z.string(),
      newPassword: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords dont match",
      path: ["confrimPassword"],
    });
  type updatePaswordInput = z.infer<typeof updatePasswordSchema>;

  const form = useForm<updatePaswordInput>();

  return (
    <div className="pb-0 lg:p-6">
      <Form {...form}>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-10">
            <FormField
              name="currentPassword"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} placeholder="Current Password" />
                </FormControl>
              )}
            />
            <FormField
              name="newPassword"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} placeholder="New Password" />
                </FormControl>
              )}
            />
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} placeholder="Confirm Password" />
                </FormControl>
              )}
            />
          </div>
          <Button variant="action" className="w-full self-end lg:w-max">
            Update Password
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UpdatePassword;
