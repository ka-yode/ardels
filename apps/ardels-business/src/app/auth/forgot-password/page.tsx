"use client";
import { useForm } from "react-hook-form";
import { Form } from "@repo/ui/form";
import { resetPasswordInput, resetPasswordSchema } from "./components";
import FillEmail from "./components/FillEmail";
import { useMultiStep } from "@repo/ui/hooks";
import { Button } from "@repo/ui/button";
import VerifyResetEmail from "./components/verifyResetEmail";
import ResetPasswordInputs from "./components/ResetPassword";
import { ChevronLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import FormWrapper from "@repo/ui/formwrapper";
import { useMutation } from "@tanstack/react-query";
import { resetPasswordEmail } from "@repo/api/auth";
import { toast } from "@repo/ui/use-toast";

function ResetPassword() {
  const form = useForm<resetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: "", otp: "", password: "", confirmPassword: "" },
  });
  const { step, nextStep, prevStep, currentStep } = useMultiStep([
    <FillEmail />,
    <VerifyResetEmail />,
    <ResetPasswordInputs />,
  ]);
  const {
    mutateAsync: resetPasswordEmailAsync,
    isError: resetPasswordEmailError,
  } = useMutation({
    mutationFn: resetPasswordEmail,
    onSuccess: () => {
      toast({
        description:
          "An OTP has been sent to this email, verify the OTP in the next stage",
        variant: "success",
      });
    },
  });
  type resetPasswordKeys = keyof resetPasswordInput;
  const validateFields: Record<number, resetPasswordKeys[]> = {
    0: ["email"],
    1: ["otp"],
    2: ["password", "confirmPassword"],
  };
  console.log(currentStep);
  let isLoading = false;
  const handleformNext = async () => {
    const fieldsValid = await form.trigger(validateFields[currentStep], {
      shouldFocus: true,
    });
    const formValues = form.getValues();
    if (!fieldsValid) return;
    if (currentStep == 0) {
      isLoading = true;
      await resetPasswordEmailAsync({ email: formValues.email });
      if (resetPasswordEmailError) return;
      isLoading = false;
    }
    if (currentStep == 1) {
    }
    nextStep();
  };
  return (
    <div className="flex items-center justify-between p-4 lg:h-screen lg:p-8">
      <div className="hidden text-white lg:block">
        <p className="mb-4 line-clamp-2 w-1/2 text-3xl font-semibold">
          Simplify Employee Management with ARDELS
        </p>
        <p className="line-clamp-3 w-3/5 text-white/60">
          Are you tired of the hassle of managing employee verification? Look no
          further! Ardels is here to streamline your entire process.
        </p>
      </div>
      <FormWrapper>
        {currentStep > 0 ||
          (currentStep == 2 && (
            <Button
              leftIcon={<ChevronLeft />}
              variant="ghost"
              className="self-start"
              onClick={prevStep}
            >
              Back
            </Button>
          ))}
        <Form {...form}>{step}</Form>
        <Button
          variant="action"
          type="button"
          className="w-full"
          onClick={handleformNext}
        >
          {currentStep === 0 ? "Check Email" : "Submit"}
        </Button>
      </FormWrapper>
    </div>
  );
}

export default ResetPassword;
