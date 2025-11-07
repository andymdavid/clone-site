import type { HomeContent } from "@/content/copy";
import { Container, Section } from "@/components/ui";

type StatsSectionProps = {
  stats: HomeContent["stats"];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <Section className="bg-background">
      <Container className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border/30 bg-surface/40 p-6">
            <p className="text-4xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted">{stat.label}</p>
          </div>
        ))}
      </Container>
    </Section>
  );
}
