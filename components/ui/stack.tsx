import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const GAP_MAP = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
  "3xl": "gap-16",
} as const;

type GapKey = keyof typeof GAP_MAP;

type StackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: GapKey;
};

export function Stack({ className, gap = "lg", ...props }: StackProps) {
  return (
    <div className={cn("flex flex-col", GAP_MAP[gap], className)} {...props} />
  );
}
