import Button from "../components/Button";
import PageHero from "../components/PageHero";
import CertificatesSection from "../components/CertificatesSection";
import { certificates } from "../data/certificates";
import { ui } from "../lib/ui";

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificates"
        title="A dedicated certificate gallery that gives each achievement room to breathe"
        description="This page presents your verified learning in a cleaner full-page format while keeping the same card and modal experience used in the one-page portfolio."
        actions={
          <>
            <Button href="/#certificates">Back to Portfolio Section</Button>
            <Button href="/#contact" variant="secondary">
              Contact Me
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>Included details</p>
            {[
              `Certificates: ${certificates.length}`,
              "Certificate image preview",
              "Title, issuer, and completion date",
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <CertificatesSection id="certificates-page" className="pt-4" />
    </>
  );
}
