import { Input } from "@repo/ui/input";
import FormWrapper from "../components/formwrapper";
import Link from "next/link";
import { Button } from "@repo/ui/button";

function LoginPage() {
  return (
    <div className="flex h-auto items-center justify-center p-4 lg:h-screen lg:justify-between lg:p-8">
      <section className="hidden w-1/3 text-white lg:block">
        <p className="text-2xl font-bold">
          Simplify Employee Management with ARDELS
        </p>
        <p className="text-gray-200">
          Are you tired of the hassle of managing employee verification and
          payments? Look no further! Ardels is here to streamline your entire
          process.
        </p>
      </section>
      <FormWrapper>
        <div className="flex w-full flex-col items-start gap-2">
          <p className="text-xl lg:text-2xl">Manage your Workforce</p>
          <p className="text-sm font-light text-black/50">
            Log in to your account
          </p>
        </div>
        <div className="flex w-full flex-col gap-6">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>
        <Link
          className="mb-5 self-end text-sm font-medium"
          href="reset-password"
        >
          Forgot Password?
        </Link>
        <div className="flex w-full flex-col gap-2 text-center">
          <Button variant="action">Login</Button>
          <div className="flex items-center justify-center gap-2 text-sm">
            <p className="text-black/50">Don&apos;t have an account?</p>
            <Link href="signup" className="font-medium">
              Sign up for free
            </Link>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
}

export default LoginPage;
