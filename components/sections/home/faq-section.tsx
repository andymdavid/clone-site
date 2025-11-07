"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { HomeContent } from "@/content/copy";
import { Container, Section } from "@/components/ui";

type FaqSectionProps = {
  faqs: HomeContent["faqs"];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section className="bg-black py-24">
      <Container className="space-y-12">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            FAQs
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            We’ve Got the Answers You’re Looking For
          </h2>
          <p className="mt-4 text-white/60">Quick answers to your AI automation questions.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={faq.question}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full rounded-3xl border border-white/10 bg-gradient-to-r from-black via-[#13101d] to-[#090909] p-6 text-left text-white shadow-[0_10px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
                {isOpen && <p className="mt-4 text-sm text-white/70">{faq.answer}</p>}
              </button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
