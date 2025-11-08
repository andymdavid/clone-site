"use client";

import type { HomeContent } from "@/content/copy";
import { motion, useReducedMotion } from "framer-motion";
import { Badge, Card, Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

type ServicesSectionProps = {
  services: HomeContent["services"];
};

const SERVICE_DETAILS = [
  {
    badge: "Workflow Automation",
    title: "Automate repetitive tasks",
    description:
      "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approvals—saving time and reducing errors.",
    chips: ["Internal Task Bots", "100+ Automations"],
    demo: "tasks",
  },
  {
    badge: "AI Assistant",
    title: "Delegate daily tasks",
    description:
      "From calendars to summaries, our assistants draft replies, schedule meetings, and keep your team prepared around the clock.",
    chips: ["Summaries", "Scheduling", "Many more"],
    demo: "assistant",
  },
  {
    badge: "Sales & Marketing",
    title: "Accelerate sales growth",
    description:
      "AI-led lead generation, personalized outreach, and automated content creation that scales your revenue engine.",
    chips: ["Leads", "Content", "Social post"],
    demo: "crm",
  },
] as const;

export function ServicesSection({ services }: ServicesSectionProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  void services;
  const serviceDetails = SERVICE_DETAILS;

  return (
    <Section id="services" className="bg-black py-24">
      <Container className="space-y-16">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Our Services
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            AI Solutions That Take Your Business to the Next Level
          </h2>
          <p className="mt-4 text-lg text-white/60">
            We design, develop, and implement automation tools that help you work smarter, not harder.
          </p>
        </div>

        <div className="space-y-32">
          {serviceDetails.map((service, idx) => (
            <div
              key={service.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {idx % 2 === 0 ? (
                <ServiceDemo variant={service.demo} prefersReducedMotion={prefersReducedMotion} compact={idx === 0} />
              ) : (
                <ServiceCopy service={service} prefersReducedMotion={prefersReducedMotion} />
              )}
              {idx % 2 === 0 ? (
                <ServiceCopy
                  service={service}
                  prefersReducedMotion={prefersReducedMotion}
                  className="lg:max-w-[85%]"
                />
              ) : (
                <ServiceDemo variant={service.demo} prefersReducedMotion={prefersReducedMotion} compact={idx === 0} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ServiceCopy({
  service,
  prefersReducedMotion,
  className,
}: {
  service: (typeof SERVICE_DETAILS)[number];
  prefersReducedMotion: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={cn("space-y-6 text-white", className)}
    >
      <Badge className="w-fit rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em]">
        {service.badge}
      </Badge>
      <h3 className="text-3xl font-semibold">{service.title}</h3>
      <p className="text-white/70">{service.description}</p>
      <div className="flex flex-wrap gap-3">
        {service.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/10 px-4 py-1 text-sm text-white/80"
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ServiceDemo({
  variant,
  prefersReducedMotion,
  compact = false,
}: {
  variant: "tasks" | "assistant" | "crm";
  prefersReducedMotion: boolean;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <Card
        className={`rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-black/60 p-8 text-left text-white shadow-[0_20px_120px_rgba(0,0,0,0.45)] ${compact ? "min-h-[320px]" : "min-h-[420px]"}`}
      >
        {variant === "tasks" && <TasksDemo />}
        {variant === "assistant" && <AssistantDemo />}
        {variant === "crm" && <CrmDemo />}
      </Card>
    </motion.div>
  );
}

function TasksDemo() {
  const rows = [
    { title: "Employee Tracking", meta: "2 days ago" },
    { title: "Social media post", meta: "Cancelled by user" },
    { title: "Lead list", meta: "70% prepared" },
    { title: "Payment reminder", meta: "Sent to clients" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {["All Tasks", "Waiting for approval"].map((tab, idx) => (
          <span
            key={tab}
            className={`rounded-full px-4 py-1 text-xs ${idx === 0 ? "bg-white/10" : "text-white/50"}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm"
          >
            <p className="font-semibold">{row.title}</p>
            <p className="text-white/50">{row.meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssistantDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-white/60">What can I help with?</p>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <p className="text-sm text-white/70">Schedule a 30m sync with Jess</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {["Analyze", "Generate", "Research"].map((chip) => (
          <span key={chip} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function CrmDemo() {
  const contacts = [
    { name: "Gorge Chapel", tag: "Founder" },
    { name: "Mike Tylor", tag: "Growth" },
  ];
  return (
    <div className="space-y-4">
      <p className="text-sm text-white/60">E-mail sending...</p>
      <div className="flex flex-wrap gap-2">
        {["LinkedIn", "IT Services", "Founders"].map((chip) => (
          <span key={chip} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
            {chip}
          </span>
        ))}
      </div>
      <div className="space-y-3">
        {contacts.map((contact) => (
          <div key={contact.name} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm">
            <p className="font-semibold">{contact.name}</p>
            <p className="text-white/50">{contact.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
