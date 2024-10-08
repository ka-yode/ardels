import { useFormContext } from "react-hook-form";
import { EmployeeAcceptInviteInput } from ".";
import { FormControl, FormField, FormItem } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import FileUploader from "@repo/ui/file-uploader";
import { useState } from "react";

export default function GuarantorsInformationForm() {
  const form = useFormContext<EmployeeAcceptInviteInput>();
  const [g1Photo, setg1Photo] = useState("");
  const [g2Photo, setg2Photo] = useState("");
  const handleG1PhotoChange = (fileBaseURL: string) => {
    setg1Photo(fileBaseURL);
    form.setValue("guarantor_1_passportPhoto", g1Photo);
    form.clearErrors();
  };
  const handleG2PhotoChange = (fileBaseURL: string) => {
    setg2Photo(fileBaseURL);
    form.setValue("guarantor_2_passportPhoto", g2Photo);
    form.clearErrors();
  };
  return (
    <div>
      <div className="mb-6">
        <p className="text-2xl">Enter your Guarantor Information</p>
        <p className="text-black/60">
          Please provide the following information
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <FormField
          name="guarantor_1_name"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Guarantor name 1" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_1_phoneNumber"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} type="tel" placeholder="Phone Number " />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_1_relationship"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Realtionship" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_1_address"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Address" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_1_state"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="State" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_1_city"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="City" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_1_lga"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="LGA" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_1_landmark"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Landmark" />
              </FormItem>
            </FormControl>
          )}
        />
        <FileUploader onChange={handleG1PhotoChange} />
        <FormField
          name="guarantor_2_name"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Guarantor Name 2" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_2_phoneNumber"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} type="tel" placeholder="Phone number" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_2_relationship"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Relationship" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_2_address"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Address" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_2_state"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="State" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_2_city"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="City" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_2_lga"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="LGA" />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="guarantor_2_landmark"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input {...field} placeholder="Landmark" />
              </FormItem>
            </FormControl>
          )}
        />
        <FileUploader onChange={handleG2PhotoChange} />
      </div>
    </div>
  );
}
