import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/util";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border p-2 text-xs text-  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-b-2 border-destructive bg-destructive/10 text-destructive",
        grayscale: "border-b-2 border-neutral-300  bg-neutral-200/80",
        success: "border-b-2 border-success bg-success/10 text-success",
        warning: "border-b-2 border-warning text-warning bg-warning/10 ",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
