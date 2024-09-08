import { cn } from "@repo/ui/utils";

export default function FormWrapper({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-4 rounded-lg bg-neutral-100 p-4 lg:h-full lg:w-1/2 lg:p-28",
        className
      )}
    >
      {children}
    </div>
  );
}
