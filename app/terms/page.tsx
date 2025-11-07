import { Container, Section } from "@/components/ui";

export const metadata = {
  title: "Terms — Clone",
};

export default function TermsPage() {
  return (
    <Section>
      <Container className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold">Terms & Conditions</h1>
        <p className="text-muted">
          This environment is for demonstration purposes only. All content, pricing, and service descriptions are placeholders informed by the reference design.
        </p>
        <p className="text-muted">
          Replace this copy with live contractual language before launching publicly.
        </p>
      </Container>
    </Section>
  );
}
