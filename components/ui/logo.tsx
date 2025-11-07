import Link from "next/link";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.3em] text-white",
        className
      )}
      {...props}
    >
      CLONE
    </Link>
  );
}
