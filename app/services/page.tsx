import { servicesContent, homeContent } from "@/content/copy";
import { Badge, Card, Container, Grid, Section } from "@/components/ui";

export const metadata = {
  title: "Services — Clone",
};

export default function ServicesPage() {
  const { hero, tasks, process, caseStudy, benefits } = servicesContent;
  const pillars = homeContent.pillars;
  return (
    <div className="space-y-0 bg-black text-white">
      <Section padded={false} className="py-24">
        <Container className="space-y-6 text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Our Services
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold sm:text-5xl">{hero.title}</h1>
          <p className="text-lg text-white/70">{hero.subtitle}</p>
        </Container>
      </Section>

      <Section className="bg-black">
        <Container>
          <Grid className="grid-cols-1 gap-6 md:grid-cols-2">
            {tasks.map((task) => (
              <Card
                key={task.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-6"
              >
                <h3 className="text-2xl font-semibold">{task.title}</h3>
                <p className="mt-3 text-white/70">{task.description}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="bg-black">
        <Container>
          <h2 className="text-center text-4xl font-semibold">Workflow snapshots</h2>
          <Grid className="mt-10 grid-cols-1 gap-6 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{pillar.meta}</p>
                <h3 className="mt-3 text-xl font-semibold">{pillar.title}</h3>
                <Badge variant="outline" className="mt-4 text-xs">
                  {pillar.badge}
                </Badge>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="bg-black">
        <Container>
          <h2 className="text-center text-4xl font-semibold">Our simple, smart process</h2>
          <Grid className="mt-10 grid-cols-1 gap-6 md:grid-cols-2">
            {process.map((step) => (
              <Card
                key={step.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{step.step}</p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-white/70">{step.copy}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="bg-black">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Card className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Case study</p>
            <h2 className="mt-4 text-3xl font-semibold">{caseStudy.title}</h2>
            <p className="mt-4 text-lg text-white/90">{caseStudy.quote}</p>
            <p className="mt-4 text-white/70">{caseStudy.body}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {caseStudy.impact.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#7b3fe4]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1033] via-[#2a1055] to-[#090909] p-8 text-white">
            <p className="text-sm uppercase tracking-[0.35em]">Benefits</p>
            <h2 className="mt-4 text-3xl font-semibold">The key benefits of AI for your growth</h2>
            <ul className="mt-6 space-y-3 text-base">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
