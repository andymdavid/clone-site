import { homeContent, servicesContent } from "@/content/copy";
import {
  CtaSection,
  FaqSection,
  HeroSection,
  LogoCarousel,
  ProcessSection,
  CaseStudySection,
  BenefitsSection,
  PricingSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections/home";

export default function Home() {
  const { hero, services, pricing, testimonials, faqs, cta } = homeContent;
  const { process: processSteps } = servicesContent;
  return (
    <div className="space-y-0">
      <HeroSection hero={hero} />
      <LogoCarousel />
      <ServicesSection services={services} />
      <ProcessSection steps={processSteps} />
      <CaseStudySection />
      <BenefitsSection />
      <PricingSection pricing={pricing} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
      <CtaSection cta={cta} />
    </div>
  );
}
