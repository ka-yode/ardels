"use client";
import { Input } from "@repo/ui/input";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login, loginSchema } from "@repo/api/auth";
import { Form, FormControl, FormField, FormItem } from "@repo/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "@repo/ui/use-toast";
import { useUser } from "~/utils/useUser";
import FormWrapper from "@repo/ui/formwrapper";

type loginInputs = z.infer<typeof loginSchema>;

function LoginPage() {
  useUser();
  const form = useForm<loginInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast({ description: "Successfully logged in", variant: "success" });
    },
    onError: (error) => {
      toast({ description: error.message, variant: "destructive" });
    },
  });

  const handleLogin = async () => {
    await mutateAsync({ ...form.getValues() });
  };
  return (
    <div className="flex h-full items-center justify-center lg:justify-between">
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
      <FormWrapper className="justify-center items-center">
        <div className="flex w-full flex-col items-start gap-2">
          <p className="text-xl lg:text-2xl">Manage your Workforce</p>
          <p className="text-sm font-light text-black/50">
            Log in to your account
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Link
              className="mb-5 self-end text-sm font-medium"
              href="forgot-password"
            >
              Forgot Password?
            </Link>
            <Button variant="action" type="submit" loading={isPending}>
              Login
            </Button>
          </form>
        </Form>
        <div className="flex w-full flex-col gap-2 text-center">
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
