"use client";

import { useState } from "react";
import type { HomeContent } from "@/content/copy";
import { Button, Card, Container, Grid, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  pricing: HomeContent["pricing"];
};

export function PricingSection({ pricing }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  return (
    <Section className="bg-black py-24">
      <Container>
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{pricing.heading}</h2>
          <p className="mt-3 text-white/60">{pricing.copy}</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 text-white/70">
          <span className={billingCycle === "monthly" ? "font-semibold text-white" : "text-white/50"}>
            Monthly
          </span>
          <button
            type="button"
            className="flex items-center rounded-full bg-white/10 p-1"
            onClick={() => setBillingCycle((prev) => (prev === "monthly" ? "annual" : "monthly"))}
            aria-label="Toggle billing cycle"
          >
            <span
              className={cn(
                "inline-flex h-6 w-12 items-center rounded-full",
                billingCycle === "monthly" ? "justify-start" : "justify-end"
              )}
            >
              <span className="h-5 w-5 rounded-full bg-white" />
            </span>
          </button>
          <span className={billingCycle === "annual" ? "font-semibold text-white" : "text-white/50"}>
            Annually
          </span>
        </div>
        <Grid className="mt-12 grid-cols-1 gap-8 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-black via-[#13101d] to-[#090909] p-8 text-white shadow-[0_20px_120px_rgba(0,0,0,0.35)]",
                plan.highlighted && "from-[#1b1033] via-[#2a1055] to-[#090909]"
              )}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em]">{plan.name}</p>
                  {plan.highlighted && (
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-4xl font-semibold">
                  {billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual}
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  {billingCycle === "monthly" ? "per month" : "per year"}
                </p>
                <p className="text-sm text-white/70">{plan.description}</p>
              </div>
              <Button
                variant={plan.highlighted ? "secondary" : "primary"}
                className={cn(
                  "mt-8 w-full border border-white/20 text-white",
                  plan.highlighted ? "bg-[#7b3fe4]" : "bg-transparent"
                )}
              >
                {plan.highlighted ? "Choose this plan" : "Schedule a call"}
              </Button>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">What's included</p>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#7b3fe4]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
