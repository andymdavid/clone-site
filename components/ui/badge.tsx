import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "solid" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  solid: "bg-accent/20 text-accent",
  outline: "border border-accent/40 text-accent",
};

export function Badge({ className, variant = "solid", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
