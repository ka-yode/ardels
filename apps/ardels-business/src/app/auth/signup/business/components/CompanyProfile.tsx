import { useFormContext } from "react-hook-form";
import { createBusinessInput } from ".";
import { FormControl, FormField, FormItem } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { STATES } from "@repo/ui/location";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@repo/ui/select";
import { SelectValue } from "@repo/ui/select";

function CompanyProfile() {
  const form = useFormContext<createBusinessInput>();
  const states = STATES;
  return (
    <div className="flex h-full w-full flex-col gap-8">
      <div>
        <p className="mb-4 text-2xl">Set Up Company Profile</p>
        <p className="font-normal text-black/50">
          Establish Your Business Identity and Optimize Employee Management.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyCAC"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="CAC Number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyPhoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company Phone Number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyEmail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
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
          control={form.control}
          name="companyAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company Address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default CompanyProfile;
