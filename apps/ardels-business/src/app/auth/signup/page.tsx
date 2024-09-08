import { CircleCheck } from "lucide-react";
import { Button, buttonVariants } from "@repo/ui/button";
import Link from "next/link";
import Image from "next/image";
import FormWrapper from "../components/formwrapper";
export default function SignUp() {
  const checks = [
    "Onboard all your organisation employees. ",
    "We will help you verify your staffs and their guarantors.",
    "Pay all your staffs from our platform.",
  ];
  return (
    <section className="flex h-full items-center justify-center lg:justify-between">
      <div className="hidden w-2/5 flex-col gap-3 text-white lg:flex">
        <h2 className="text-3xl font-semibold">
          Verify and Upload Employee Information
        </h2>
        <p className="font-light">
          Easily conduct thorough background checks, securely upload necessary
          documents and access detailed verification reports to ensure the
          reliability of your employees.
        </p>
        <div className="relative bg-teal-700">
          <Image
            src="/signup/lojay.png"
            alt=""
            width={40}
            height={50}
            className="absolute rounded-full"
          />
          <Image
            src="/signup/woman.png"
            alt=""
            width={40}
            height={50}
            className="absolute left-7 z-10 rounded-full"
          />
          <Image
            src="/signup/woman2.png"
            alt=""
            width={40}
            height={50}
            className="absolute left-14 z-20 rounded-full"
          />
          <Image
            src="/signup/man1.png"
            alt=""
            width={40}
            height={50}
            className="absolute left-20 z-30 rounded-full"
          />
          <Image
            src="/signup/man2.png"
            alt=""
            width={40}
            height={50}
            className="absolute left-[6.5rem] z-40 rounded-full"
          />
        </div>
      </div>
      <FormWrapper>
        <div className="flex w-full flex-col gap-4 rounded bg-white p-4 lg:p-8">
          <p>Sign Up as a Business to</p>
          <div className="flex flex-col items-start justify-start gap-4">
            {checks.map((check) => (
              <SignupChecks key={check} check={check} />
            ))}
          </div>
        </div>
        <Link
          href="signup/business"
          className={buttonVariants({ variant: "action" }) + " w-full"}
        >
          Next
        </Link>
        <span className="flex items-center gap-1 text-sm">
          <p className="font-light text-neutral-400">
            Already have an Account?
          </p>
          <Link href="login">Login</Link>
        </span>
      </FormWrapper>
    </section>
  );
}
type signUpCheckProp = { check: string };
const SignupChecks = ({ check }: signUpCheckProp) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div>
        <CircleCheck
          size={25}
          className="text-white"
          fill="green"
          fillRule="evenodd"
        />
      </div>
      <p className="text-sm font-light leading-relaxed text-neutral-400">
        {check}
      </p>
    </div>
  );
};
