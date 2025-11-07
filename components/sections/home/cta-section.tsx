import type { HomeContent } from "@/content/copy";
import { Button, Container, Section } from "@/components/ui";

type CtaSectionProps = {
  cta: HomeContent["cta"];
};

export function CtaSection({ cta }: CtaSectionProps) {
  return (
    <Section className="bg-black py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1b1033] via-[#090909] to-[#1b1033] px-8 py-16 text-center text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">Book a call</p>
          <h3 className="mt-6 text-4xl font-semibold sm:text-5xl">{cta.title}</h3>
          <p className="mt-4 text-white/70">Book a call today and start automating</p>
          <Button asChild href={cta.primaryCta.href} className="mt-8 inline-flex w-auto justify-center">
            {cta.primaryCta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
