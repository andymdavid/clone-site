"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container, Section } from "@/components/ui";

const logos = [
  "Linear",
  "Zapier",
  "Notion",
  "Airtable",
  "Figma",
  "Intercom",
  "Webflow",
];

export function LogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, skipSnaps: false });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <Section className="bg-black py-10">
      <Container className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">Trusted by teams shipping with AI</p>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="min-w-[120px] rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
