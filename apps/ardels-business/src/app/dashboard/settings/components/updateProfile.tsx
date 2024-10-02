import { createcompanyProfile } from "@repo/api/manageUser";
import { Button } from "@repo/ui/button";
import { Form, FormControl, FormField, FormItem } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { STATES } from "@repo/ui/location";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@repo/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUser } from "~/utils/useUser";

const updateProfileSchema = z.object({
  companyName: z.string().min(6, "The company name isn't long enough"),
  cacNumber: z.string(),
  companyPhoneNumber: z.string().min(11, "Phone number is not complete"),
  companyEmail: z.string().email("this email is not valid"),
  state: z.string(),
  companyAddress: z.string(),
});

type updateProfileInput = z.infer<typeof updateProfileSchema>;

function UpdateProfile() {
  const { data: user } = useUser();
  const companyProfile = user?.companyProfile;
  console.log(user);
  const form = useForm<updateProfileInput>({
    defaultValues: {
      companyName: companyProfile?.companyName ?? "",
      companyPhoneNumber: companyProfile?.companyPhoneNumber,
      cacNumber: companyProfile?.cacNumber,
      companyEmail: companyProfile?.companyEmail,
      state: companyProfile?.state,
      companyAddress: companyProfile?.companyAddress,
    },
  });

  const states = STATES;
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createcompanyProfile,
  });
  const createProfileHandler = async () => {
    await mutateAsync({ ...form.getValues() });
  };
  return (
    <div className="pb-0 lg:p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(createProfileHandler)}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-10">
              <FormField
                name="companyName"
                control={form.control}
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} placeholder="Company Name" />
                  </FormControl>
                )}
              />
              <FormField
                name="cacNumber"
                control={form.control}
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                )}
              />
              <FormField
                name="companyPhoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} placeholder="Phone Number" />
                  </FormControl>
                )}
              />
              <FormField
                name="companyEmail"
                control={form.control}
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} placeholder="Email" />
                  </FormControl>
                )}
              />
              <FormField
                name="state"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((state) => (
                            <SelectItem key={state.alias} value={state.name}>
                              {state.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="companyAddress"
                control={form.control}
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} placeholder="Address" />
                  </FormControl>
                )}
              />
            </div>
            <Button
              variant="action"
              type="submit"
              className="w-full self-end lg:w-max"
            >
              Update Information
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default UpdateProfile;
