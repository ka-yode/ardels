import { Button } from "@repo/ui/button";
import { Form, FormControl, FormField } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

function UpdateProfile() {
  const updateProfileSchema = z.object({
    name: z.string().min(6, "The company name isn't long enough"),
    cacNumber: z.string(),
    phoneNumber: z.string().min(11, "Phone number is not complete"),
    email: z.string().email("this email is not valid"),
    state: z.string(),
    address: z.string(),
  });

  type updateProfileInput = z.infer<typeof updateProfileSchema>;
  const form = useForm<updateProfileInput>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      cacNumber: "99999999",
      email: "",
      state: "",
      address: "",
    },
  });

  return (
    <div className="pb-0 lg:p-6">
      <Form {...form}>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-10">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} />
                </FormControl>
              )}
            />
            <FormField
              name="cacNumber"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} disabled />
                </FormControl>
              )}
            />
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} />
                </FormControl>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} />
                </FormControl>
              )}
            />
            <FormField
              name="state"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} />
                </FormControl>
              )}
            />
            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} />
                </FormControl>
              )}
            />
          </div>
          <Button variant="action" className="w-full self-end lg:w-max">
            Update Information
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UpdateProfile;
