import { useFormContext } from "react-hook-form";
import { EmployeeAcceptInviteInput } from ".";
import { FormControl, FormField, FormItem } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@repo/ui/select";
import Image from "next/image";
import { STATES } from "@repo/ui/location";
import FileUploader from "@repo/ui/file-uploader";
import { useState } from "react";

export default function EmployeeProfile() {
  const form = useFormContext<EmployeeAcceptInviteInput>();
  const [resumeDataURL, setResumeDataURL] = useState("");
  useState();
  const handleResumeChange = (fileBaseURL: string) => {
    setResumeDataURL(fileBaseURL);
    form.setValue("resume", resumeDataURL);
    form.clearErrors();
  };
  const resumeString = form.watch("resume");
  console.log(resumeString);
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-4 mb-10">
        <p className="text-2xl">Enter your Personal Information</p>
        <p className="text-black/50">
          Please provide the following personal information.
        </p>
      </div>
      <div className="space-y-6">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input placeholder="Name" {...field} />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="NIN"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input placeholder="NIN" {...field} />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          control={form.control}
          name="stateOfOrigin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="State of Origin" />
                  </SelectTrigger>
                  <SelectContent>
                    {STATES.map((state) => (
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
          name="address"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input placeholder="Address" {...field} />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="city"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input placeholder="City" {...field} />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input placeholder="Phone" {...field} />
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          name="landmark"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormItem>
                <Input placeholder="Landmark" {...field} />
              </FormItem>
            </FormControl>
          )}
        />
        <FileUploader
          maxFileSize={400}
          onChange={handleResumeChange}
          placeholder="upload resume"
        />
      </div>
    </div>
  );
}
