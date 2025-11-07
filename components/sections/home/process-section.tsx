"use client";

import { Container, Section } from "@/components/ui";
import { motion, useReducedMotion } from "framer-motion";

const demos = ["analyze", "code", "integration", "optimize"] as const;

type Step = {
  step: string;
  title: string;
  copy: string;
};

type ProcessSectionProps = {
  steps: Step[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section className="bg-black py-24">
      <Container className="space-y-16">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Our Process
          </p>
          <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Our Simple, Smart, and Scalable Process
          </h2>
          <p className="mt-4 text-lg text-white/60">
            We design, develop, and implement automation tools that help you work smarter, not harder.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-3xl border border-white/5 bg-[#090909] p-8 text-white shadow-[0_20px_120px_rgba(0,0,0,0.35)]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{step.step}</p>
              <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-white/70">{step.copy}</p>
              <div className="mt-6 rounded-2xl border border-white/5 bg-black/60 p-6">
                <ProcessDemo variant={demos[index] ?? "analyze"} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

type DemoVariant = (typeof demos)[number];

function ProcessDemo({ variant }: { variant: DemoVariant }) {
  switch (variant) {
    case "analyze":
      return <AnalyzeDemo />;
    case "code":
      return <CodeDemo />;
    case "integration":
      return <IntegrationDemo />;
    case "optimize":
      return <OptimizeDemo />;
    default:
      return null;
  }
}

function AnalyzeDemo() {
  const checks = ["System check", "Process check", "Speed check", "Manual work", "Repetitive task"];
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 px-4 py-6 text-sm text-white/70">
        <div className="h-24 w-24 rounded-full bg-gradient-to-b from-[#7b3fe4]/40 to-transparent" />
        <p className="mt-3 text-xs uppercase tracking-widest">Analyzing workflow</p>
      </div>
      <div className="space-y-2 text-sm">
        {checks.map((check) => (
          <div key={check} className="rounded-xl border border-white/10 px-3 py-2 text-white/70">
            {check}
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeDemo() {
  const lines = [
    "def check_trigger():",
    "    if value > threshold:",
    "        status = 'active'",
    "        return 'Automation triggered'",
    "    return 'No action'",
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-white/80">
      {lines.map((line, idx) => (
        <p key={line} className={idx === 2 ? "text-[#7b3fe4]" : undefined}>
          {line}
        </p>
      ))}
    </div>
  );
}

function IntegrationDemo() {
  return (
    <div className="flex items-center justify-between gap-4">
      <BadgePill label="Our solution" />
      <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20" />
      <BadgePill label="Your stack" />
    </div>
  );
}

function OptimizeDemo() {
  const items = [
    { label: "Chatbot system", status: "Efficiency +20%" },
    { label: "Workflow system", status: "Update available" },
    { label: "Sales system", status: "Up to date" },
  ];
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm">
          <div>
            <p className="font-semibold text-white/90">{item.label}</p>
            <p className="text-xs text-white/60">{item.status}</p>
          </div>
          <span className="text-[#7b3fe4]">↗</span>
        </div>
      ))}
    </div>
  );
}

function BadgePill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">
      {label}
    </span>
  );
}
