"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HomeContent } from "@/content/copy";
import { Badge, Button, Container, Section } from "@/components/ui";

type HeroSectionProps = {
  hero: HomeContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? 0 : 0.08;

  const baseVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section
      padded={false}
      className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-black pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <video
          className="h-[720px] w-[720px] rounded-[48px] object-cover opacity-70 shadow-[0_40px_160px_rgba(0,0,0,0.7)]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>
      <Container className="relative flex max-w-3xl flex-col items-center gap-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: stagger }}
          className="text-center"
        >
          <motion.div variants={baseVariants}>
            <Badge className="bg-white/10 text-white">{hero.badge}</Badge>
          </motion.div>
          <motion.h1
            variants={baseVariants}
            className="mt-6 text-balance text-5xl font-semibold sm:text-6xl lg:text-[4.5rem]"
          >
            {hero.title}
          </motion.h1>
          <motion.p variants={baseVariants} className="mt-6 text-lg text-white/70">
            {hero.subtitle}
          </motion.p>
          <motion.div
            variants={baseVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Button>
            <Button asChild href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
