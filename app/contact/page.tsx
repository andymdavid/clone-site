import { contactContent } from "@/content/copy";
import { Card, Container, Section } from "@/components/ui";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata = {
  title: "Contact — Clone",
};

export default function ContactPage() {
  const { hero, details } = contactContent;
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-muted">Contact</p>
          <h1 className="text-4xl font-semibold">{hero.title}</h1>
          <p className="text-lg text-muted">{hero.subtitle}</p>
          <dl className="mt-8 space-y-3 text-sm text-muted">
            <div>
              <dt className="font-semibold text-white">Email</dt>
              <dd>{details.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Phone</dt>
              <dd>{details.phone}</dd>
            </div>
          </dl>
        </div>
        <Card className="bg-surface/70 p-8">
          <ContactForm />
        </Card>
      </Container>
    </Section>
  );
}
