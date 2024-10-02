"use client";
import { getMe } from "@repo/api/auth";
import { toast } from "@repo/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

export const useUser = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryFn: getMe,
    queryKey: ["GET_BUSINESS"],
    retry: false,
  });
  const isAuthPath = pathname.includes("auth");

  if (isError) {
    !isAuthPath &&
      toast({ description: error.message, variant: "destructive" });
    router.replace("/auth/login");
  }
  if (isSuccess && isAuthPath) {
    toast({ description: "Succesfully logged in", variant: "success" });
    router.replace("/dashboard");
  }
  return {
    data: data?.user,
    isLoading,
    isError,
  };
};
