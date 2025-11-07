import { aboutContent } from "@/content/copy";
import { Button, Card, Container, Grid, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "About — Clone",
};

export default function AboutPage() {
  const { hero, stats, values, whyUs, team } = aboutContent;
  return (
    <div className="space-y-0 bg-black text-white">
      <Section padded={false} className="py-24">
        <Container className="space-y-6 text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            {hero.eyebrow}
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold sm:text-5xl">{hero.title}</h1>
          <p className="text-lg text-white/70">
            We are a team of innovators dedicated to making AI automation simple and effective.
          </p>
        </Container>
      </Section>

      <Section className="bg-black">
        <Container className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-6"
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">
                {stat.label}
              </p>
            </Card>
          ))}
        </Container>
      </Section>

      <Section className="bg-black">
        <Container>
          <h2 className="text-center text-4xl font-semibold">The values behind Clone</h2>
          <Grid className="mt-10 grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card
                key={value.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-6"
              >
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-white/70">{value.copy}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="bg-black">
        <Container className="space-y-8">
          <div className="text-center">
            <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
              Why us
            </p>
            <h2 className="mt-3 text-4xl font-semibold">{whyUs.title}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <ComparisonList title="Manual Work" items={whyUs.manual} />
            <ComparisonList title="Clone AI Automation" items={whyUs.automated} accent />
          </div>
        </Container>
      </Section>

      <Section className="bg-black">
        <Container>
          <h2 className="text-center text-4xl font-semibold">Meet the minds behind Clone</h2>
          <Grid className="mt-10 grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member) => (
              <Card
                key={member.name}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-6 text-center"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-[#7b3fe4] to-[#2a1055] opacity-80" />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-white/70">{member.role}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="bg-black py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1b1033] via-[#090909] to-[#1b1033] px-8 py-16 text-center text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Work with us</p>
            <h2 className="mt-6 text-4xl font-semibold">Let AI do the work so you can scale faster</h2>
            <Button asChild href="/contact" className="mt-8">
              Book a call today
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function ComparisonList({
  title,
  items,
  accent = false,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <Card
      className={cn(
        "rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909]",
        accent && "from-[#1b1033] via-[#2a1055] to-[#090909]"
      )}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-white/80">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
