import Link from "next/link";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentProps,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  asChild?: boolean;
  href?: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps;

type AnchorProps = ComponentProps<typeof Link> & BaseProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[4px] px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#7b3fe4] text-white shadow-lg hover:shadow-xl",
  secondary:
    "border border-border bg-surface text-white hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-white",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild, href, ...props }, ref) => {
    if (asChild && href) {
      const anchorProps: AnchorProps = {
        href,
        className: cn(baseClasses, variants[variant], className),
        ...props,
      } as AnchorProps;
      return <Link {...anchorProps} />;
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
