import { servicesContent } from "@/content/copy";
import { Container, Section } from "@/components/ui";

const caseStudy = servicesContent.caseStudy;

export function CaseStudySection() {
  return (
    <Section className="bg-black py-24">
      <Container className="space-y-16">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Case Studies
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            See How Smart AI Automation Transforms Businesses
          </h2>
          <p className="mt-4 text-lg text-white/60">
            See how AI automation streamlines operations, boosts efficiency, and drives growth.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-black/60 p-0 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="relative flex h-[360px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black">
              <div className="h-40 w-72 rounded-3xl border border-white/10 bg-black/50" />
            </div>
          </div>

          <div className="space-y-6 text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Logoipsum</p>
            <h3 className="text-2xl font-semibold">{caseStudy.quote}</h3>
            <p className="text-white/70">{caseStudy.body}</p>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Impact</p>
              <ul className="mt-4 space-y-3 text-white/80">
                {caseStudy.impact.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#7b3fe4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
