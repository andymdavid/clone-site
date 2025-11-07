"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { CAL_URL, mainNav } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90",
        scrolled && "backdrop-blur"
      )}
    >
      <div className="container flex items-center justify-between gap-6 py-4">
        <Logo className="tracking-widest" />
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href ? "text-white" : "text-muted hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild href={CAL_URL}>
            Book a call
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <nav
        className={cn(
          "md:hidden",
          "origin-top overflow-hidden transition-[max-height] duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container flex flex-col gap-4 pb-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium",
                pathname === item.href ? "text-white" : "text-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild href={CAL_URL} className="w-full">
            Book a call
          </Button>
        </div>
      </nav>
    </header>
  );
}
