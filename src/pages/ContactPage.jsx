import Button from "../components/Button";
import ContactSection from "../components/ContactSection";
import PageHero from "../components/PageHero";
import { contactInfo } from "../data/contact";
import { ui } from "../lib/ui";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Make it obvious how people should reach you and what they can reach out about."
        description="A clear contact page reduces hesitation. It tells visitors which channel to use, what kinds of conversations are welcome, and what sort of response they can expect."
        actions={
          <>
            <Button href={contactInfo.emailHref}>Email Me</Button>
            <Button href="/cv" variant="secondary">
              Open CV
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>Direct Contact</p>
            {[
              `Phone: ${contactInfo.phone}`,
              `Email: ${contactInfo.email}`,
              `Response time: ${contactInfo.responseTime}`,
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <ContactSection id="contact-page" className="pt-4" />
    </>
  );
}
