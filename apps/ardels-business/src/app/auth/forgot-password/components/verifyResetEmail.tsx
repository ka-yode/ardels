import { useFormContext } from "react-hook-form";
import { FormControl, FormField } from "@repo/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui/otp";
import { useCountdown } from "@repo/ui/hooks";
import { Button } from "@repo/ui/button";
import { resetPasswordInput } from ".";
function VerifyResetEmail() {
  const form = useFormContext<resetPasswordInput>();
  const companyEmail = form.getValues("email");
  console.log(companyEmail);
  const { currentTime, counterDone } = useCountdown(30);
  return (
    <div className="flex h-full flex-col justify-between gap-20">
      <div className="flex flex-col gap-5">
        <p className="text-2xl">Verify your email</p>
        <p className="text-sm text-black/50 lg:text-base">
          Enter the 6 digit code sent to your email. We sent it to{" "}
          <span className="font-semibold text-black">{companyEmail}</span>
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-between">
        <FormField
          name="otp"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <InputOTP maxLength={6} {...field}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FormControl>
          )}
        />
        {counterDone ? (
          <Button variant="link">Resend OTP</Button>
        ) : (
          <p className="text-sm text-black/50">
            Resend code in:{" "}
            <span className="font-semibold text-black">
              {currentTime} sec(s)
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default VerifyResetEmail;
