"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { toast } from "@repo/ui/use-toast";

export default function ReactQueryCleientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        // do not show toast when checking if user is logged in
        if (query?.queryKey[0] === "me") return;
        toast({ title: error.message, variant: "destructive" });
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        toast({ title: error.message, variant: "destructive" });
      },
    }),
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
