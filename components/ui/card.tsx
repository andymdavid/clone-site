import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/30 bg-surface/60 p-6 shadow-sm backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
