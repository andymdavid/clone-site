import Link from "next/link";
import { footerNav, CAL_URL } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="mt-auto bg-black">
      <div className="border-t border-white/10 bg-gradient-to-b from-[#1b1033] via-[#090909] to-black">
        <div className="container grid gap-12 py-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo className="text-lg tracking-[0.35em]" />
            <p className="max-w-sm text-sm text-white/70">
              Clone – Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Join our newsletter</p>
              <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" noValidate>
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  className="flex-1 rounded-[10px] border border-white/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3fe4]"
                  autoComplete="email"
                />
                <Button type="submit" className="rounded-[10px] bg-[#7b3fe4] px-6">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <FooterColumn title="Links" links={footerNav.links} />
          <FooterColumn title="Pages" links={footerNav.pages} />
          <FooterColumn title="Socials" links={footerNav.socials} />
        </div>
      </div>
      <div className="border-t border-white/10 bg-black">
        <div className="container flex flex-col items-center gap-4 py-6 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Clone. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <Button asChild variant="ghost" href={CAL_URL} className="text-xs text-white">
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="space-y-3 text-sm">
      <FooterHeading>{title}</FooterHeading>
      {links.map((link) => (
        <FooterLink key={link.href} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
      {children}
    </span>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn("block text-sm text-muted transition-colors hover:text-white")}
    >
      {children}
    </Link>
  );
}
