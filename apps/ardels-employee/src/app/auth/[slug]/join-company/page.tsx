"use client";
import { useMultiStep } from "@repo/ui/hooks";
import { CircleCheck } from "lucide-react";
import { cn } from "@repo/ui/utils";
import FormWrapper from "@repo/ui/formwrapper";
import EmployeeSignUpForm from "./components/EmployeeSignUpForm";
import { EmployeeAcceptInviteInput } from "./components";
import { useForm } from "react-hook-form";
import { Form } from "@repo/ui/form";
import { Button } from "@repo/ui/button";
import EmployeeProfile from "./components/EmployeeProfile";
import GuarantorsInformationForm from "./components/GuarantorsInformation";

export default function SetupEmployeePage() {
  const stepBreakdown = [
    "Create account",
    "Fill your personal Information",
    "Fill your Guarantor information",
  ];
  const form = useForm<EmployeeAcceptInviteInput>({
    defaultValues: {
      phoneNumber: "",
      inviteToken: "",
      password: "",
      comnfirmPassword: "",
      name: "",
      companyId: "",
      NIN: "",
      dateOfBirth: new Date(),
      address: "",
      stateOfOrigin: "",
      resume: "",
      utilityBill: "",
      passportPhoto: "",
      lga: "",
      city: "",
      phone: "",
      landmark: "",
      guarantor_1_name: "",
      guarantor_1_phoneNumber: "",
      guarantor_1_relationship: "",
      guarantor_1_address: "",
      guarantor_1_passportPhoto: "",
      guarantor_2_name: "",
      guarantor_2_phoneNumber: "",
      guarantor_2_relationship: "",
      guarantor_2_address: "",
      guarantor_2_passportPhoto: "",
      employeeProfileId: "",
    },
  });
  //mutations
  //validation
  type employeeAcceptInviteKey = keyof EmployeeAcceptInviteInput;
  const validateFields: Record<number, employeeAcceptInviteKey[]> = {
    0: ["phoneNumber", "password", "comnfirmPassword"],
    1: [
      "name",
      "NIN",
      "dateOfBirth",
      "stateOfOrigin",
      "address",
      "resume",
      "utilityBill",
      "passportPhoto",
      "lga",
      "city",
      "phone",
      "landmark",
    ],
    2: [
      "guarantor_1_name",
      "guarantor_1_address",
      "guarantor_1_phoneNumber",
      "guarantor_1_passportPhoto",
      "guarantor_1_relationship",
      "guarantor_2_name",
      "guarantor_2_phoneNumber",
      "guarantor_2_passportPhoto",
      "guarantor_2_address",
      "guarantor_2_relationship",
      "employeeProfileId",
      "companyId",
    ],
  };

  const { currentStep, nextStep, step } = useMultiStep([
    <EmployeeSignUpForm />,
    <EmployeeProfile />,
    <GuarantorsInformationForm />,
  ]);

  const handleNextSteps = async () => {
    const fieldsValid = await form.trigger(validateFields[currentStep], {
      shouldFocus: true,
    });
    if (!fieldsValid) return;
    nextStep();
  };
  return (
    <div className="flex h-full items-center gap-4">
      <section className="hidden h-full w-1/2 flex-col gap-32 py-20 text-white lg:flex">
        <p className="text-3xl font-semibold">Join Your Organization</p>
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
      </section>
      <FormWrapper>
        <Form {...form}>
          {step}
          <Button
            variant="action"
            className="w-full"
            loading
            onClick={handleNextSteps}
          >
            Continue
          </Button>
        </Form>
      </FormWrapper>
    </div>
  );
}
