"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { HomeContent } from "@/content/copy";
import { Card, Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL = 5500;

type TestimonialsSectionProps = {
  testimonials: HomeContent["testimonials"];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || prefersReducedMotion) return;
    const timer = setInterval(() => {
      if (!emblaApi) return;
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [emblaApi, prefersReducedMotion]);

  return (
    <Section className="bg-background">
      <Container>
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Testimonials
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            Why businesses love our AI solutions
          </h2>
        </div>
        <div className="mt-12 space-y-6">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="-ml-6 flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.author}
                    className="min-w-0 shrink-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="mt-6 flex justify-center gap-4 md:absolute md:-top-24 md:right-0 md:mt-0">
              <CarouselButton onClick={scrollPrev} disabled={testimonials.length <= 1} ariaLabel="Previous testimonial">
                <ArrowLeft className="h-4 w-4" />
              </CarouselButton>
              <CarouselButton onClick={scrollNext} disabled={testimonials.length <= 1} ariaLabel="Next testimonial">
                <ArrowRight className="h-4 w-4" />
              </CarouselButton>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "h-2 w-8 rounded-full bg-white/10 transition-colors",
                  selectedIndex === index ? "bg-white" : "hover:bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: HomeContent["testimonials"][number];
}) {
  return (
    <Card className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-6">
      <Quote className="h-5 w-5 text-accent" />
      <p className="text-lg leading-relaxed text-white/90">{testimonial.quote}</p>
      <div>
        <p className="text-sm font-semibold">{testimonial.author}</p>
        <p className="text-sm text-muted">{testimonial.role}</p>
      </div>
    </Card>
  );
}

function CarouselButton({
  onClick,
  disabled,
  children,
  ariaLabel,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white hover:bg-white/10 disabled:opacity-40"
    >
      {children}
    </button>
  );
}
