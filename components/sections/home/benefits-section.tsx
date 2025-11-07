import { CircleDollarSign, BarChart3, Clock, HandHelping, PieChart, Zap } from "lucide-react";
import { Container, Section } from "@/components/ui";

const benefitDetails = [
  {
    title: "Increased Productivity",
    description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    icon: Zap,
  },
  {
    title: "Better Customer Experience",
    description: "Personalized AI interactions improve response times, engagement, and satisfaction.",
    icon: HandHelping,
  },
  {
    title: "24/7 Availability",
    description: "AI-powered systems operate around the clock, ensuring seamless support without downtime.",
    icon: Clock,
  },
  {
    title: "Cost Reduction",
    description: "Automation minimizes manual work, cuts operational costs, and optimizes resources.",
    icon: CircleDollarSign,
  },
  {
    title: "Data-Driven Insights",
    description: "Leverage AI to analyze data, identify trends, and make smarter, faster decisions.",
    icon: PieChart,
  },
  {
    title: "Scalability & Growth",
    description: "AI adapts to your business needs, allowing you to scale efficiently without extra load.",
    icon: BarChart3,
  },
];

export function BenefitsSection() {
  return (
    <Section className="bg-black py-24">
      <Container className="space-y-16">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Benefits
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
            The Key Benefits of AI for Your Business Growth
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Discover how AI automation enhances efficiency, reduces costs, and drives smarter growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefitDetails.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#13101d] to-[#090909] p-8 text-white shadow-[0_20px_120px_rgba(0,0,0,0.35)]"
            >
              <benefit.icon className="h-5 w-5 text-white/70" />
              <h3 className="mt-4 text-2xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
