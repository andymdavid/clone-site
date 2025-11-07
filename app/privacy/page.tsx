import { Container, Section } from "@/components/ui";

export const metadata = {
  title: "Privacy — Clone",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-muted">
          This replica build showcases layout and motion behavior from the reference site. No production data is collected and forms are for demonstration only.
        </p>
        <p className="text-muted">
          When this project is converted to a live experience we will document data collection, cookies, retention windows, and contact information here.
        </p>
      </Container>
    </Section>
  );
}
