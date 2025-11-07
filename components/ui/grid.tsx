import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: string;
}

export function Grid({ className, cols = "grid-cols-1", ...props }: GridProps) {
  return (
    <div
      className={cn("grid gap-6", cols, className)}
      {...props}
    />
  );
}
