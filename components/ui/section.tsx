import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  padded?: boolean;
}

export function Section({ padded = true, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        padded && "py-16 sm:py-20 lg:py-24",
        className
      )}
      {...props}
    />
  );
}
