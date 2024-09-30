"use client";

import { useForm } from "react-hook-form";
import CreateAccount from "./components/CreateAccount";
import { createBusinessInput, createBusinessSchema } from "./components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@repo/ui/form";
import { useMultiStep } from "@repo/ui/hooks";
import FormWrapper from "../../components/formwrapper";
import { ChevronLeft, CircleCheck } from "lucide-react";
import VerifyEmail from "./components/VerifyEmail";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import CompanyProfile from "./components/CompanyProfile";
import AddEmployees from "./components/AddEmployees";
import { cn } from "@repo/ui/utils";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  createBusiness,
  createBusinessRegisterSchema,
  sendOTP,
  verifyOtp,
} from "@repo/api/auth";
import { createcompanyProfile, sendEmployeeInvite } from "@repo/api/manageUser";
import { toast } from "@repo/ui/use-toast";
import { z } from "zod";
import { cookies } from "next/headers";

export default function BusinessSignUp() {
  const router = useRouter();

  const stepBreakdown = [
    "Create Account",
    "Verify your email",
    "Setup your company profile",
    "Add your employees",
  ];
  const form = useForm<createBusinessInput>({
    resolver: zodResolver(createBusinessSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmedPassWord: "",
      employees: [
        { name: "", phoneNumber: "", role: "" },
        { name: "", phoneNumber: "", role: "" },
      ],
    },
  });

  const { mutateAsync: createBusinessAsync, data: userProfileData } =
    useMutation({
      mutationFn: createBusiness,
      onSuccess: async (data) => {
        console.log(data.data);
      },
    });
  const { mutateAsync: verifyOtpAsync, isError: verifyOTPError } = useMutation({
    mutationFn: verifyOtp,
  });
  const { mutateAsync: createCompanyProfile, isError } = useMutation({
    mutationFn: createcompanyProfile,
  });

  const { mutateAsync: sendInviteAsync, isSuccess: inviteSentSuccessfully } =
    useMutation({
      mutationFn: sendEmployeeInvite,
    });

  const { mutateAsync: resendOTPAsync } = useMutation({
    mutationFn: sendOTP,
    onSuccess: () => {
      toast({ description: "OTP resent successfully", variant: "success" });
    },
  });
  const resendOTPHandler = async () => {
    if (userProfileData) {
      const email = form.getValues("email");
      await resendOTPAsync({ userId: userProfileData.data.userId, email });
    }
  };
  const createBusinessHandler = async (
    data: z.infer<typeof createBusinessRegisterSchema>
  ) => {
    await createBusinessAsync({ ...data });
  };
  type createBusinessKey = keyof createBusinessInput;
  const validateFields: Record<number, createBusinessKey[]> = {
    0: ["email", "password", "confirmedPassWord"],
    1: ["otp"],
    2: [
      "companyName",
      "companyAddress",
      "companyPhoneNumber",
      "companyCAC",
      "state",
      "companyEmail",
    ],
    3: ["employees"],
  };

  const { step, currentStep, nextStep, prevStep, jumpToStep } = useMultiStep([
    <CreateAccount key="1" />,
    <VerifyEmail key="2" resendAction={resendOTPHandler} />,
    <CompanyProfile key="3" />,
    <AddEmployees key="4" />,
  ]);

  const handleFormNext = async () => {
    const fieldsValid = await form.trigger(validateFields[currentStep], {
      shouldFocus: true,
    });
    if (currentStep === 0) {
      const email = form.getValues("email");
      const password = form.getValues("password");
      const confirmPassword = form.getValues("confirmedPassWord");
      if (password !== confirmPassword) {
        form.setError("root", {
          type: "value",
          message: "Passwords do not match",
        });
        toast({
          description: "Passwords do not match",
          variant: "destructive",
        });
        return;
      }
      await createBusinessHandler({ email, password, confirmPassword });
    }
    if (currentStep === 1 && userProfileData) {
      const userId = userProfileData.data.userId;
      const otp = form.getValues("otp");
      await verifyOtpAsync({ userId, otp });
      if (verifyOTPError) {
        toast({ description: "Incorrect OTP", variant: "destructive" });
        return;
      }
    }
    if (currentStep == 2) {
      const values = form.getValues();
      console.log(values);
      await createCompanyProfile({
        companyName: values.companyName,
        companyPhoneNumber: values.companyPhoneNumber,
        companyEmail: values.companyEmail,
        companyAddress: values.companyAddress,
        cacNumber: values.companyCAC,
        state: values.state,
      });
      if (isError) return;
    }
    if (currentStep === 3) {
      const employees = form.getValues("employees");
      await sendInviteAsync(employees);
      if (inviteSentSuccessfully) router.replace("/dashboard");
    }
    if (!fieldsValid) return;
    nextStep();
  };

  return (
    <div className="flex h-full items-center gap-4">
      <div className="hidden h-full w-1/2 flex-col gap-32 py-20 text-white lg:flex">
        <p className="text-3xl font-semibold">
          Create Your Organization Profile
        </p>
        <div className="flex flex-col gap-12">
          {stepBreakdown.map((breakdown, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2 text-xl font-light opacity-60",
                currentStep === index && "opacity-100"
              )}
            >
              {currentStep === index || currentStep > index ? (
                <div>
                  <CircleCheck />
                </div>
              ) : (
                <div className="flex size-6 items-center justify-center rounded-full border-2 border-white p-2 text-xs">
                  {index + 1}
                </div>
              )}
              <p>{breakdown}</p>
            </div>
          ))}
        </div>
      </div>
      <FormWrapper className="justify-between overflow-auto lg:!py-5">
        {currentStep === 3 && (
          <Link href="dashboard" className="text-green-500">
            Skip
          </Link>
        )}
        <Form {...form}>{step}</Form>
        <div className="flex w-full flex-col gap-10">
          <div className="flex w-full flex-col gap-6">
            <Button variant="action" onClick={handleFormNext}>
              {currentStep === 0 ? "Sign up for free" : "Submit"}
            </Button>
            {currentStep === 0 && (
              <p className="text-center text-black/50">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-semibold text-black">
                  Login
                </Link>
              </p>
            )}
          </div>
          <p className="self-center text-center text-black/50">
            {currentStep === 0
              ? "By clicking on sign up for free you agree to our "
              : "Read our "}
            <Link href={"/tnc"} className="font-semibold text-action">
              Terms and condition
            </Link>
          </p>
        </div>
      </FormWrapper>
    </div>
  );
}
