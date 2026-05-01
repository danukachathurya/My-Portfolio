import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { ui } from "../lib/ui";

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificates"
        title="Give verified learning its own space instead of burying it in the CV."
        description="Certificates work best when they support your story rather than replace it. This page is designed to present credentials as proof of focused growth and ongoing investment."
        actions={
          <>
            <Button to="/career-plan">Compare with Career Plan</Button>
            <Button to="/cv" variant="secondary">
              Return to CV
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>What to include</p>
            {[
              "Certificate title and issuing organization",
              "Date earned and verification link",
              "Why the credential matters to your goals",
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <PageSection
        eyebrow="Presentation"
        title="Display certificates by relevance, not just chronology"
        description="Group credentials around the story they support so visitors can quickly understand why each one belongs in the portfolio."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Engineering Foundations",
              body: "Credentials that reinforce the technical basics you rely on across projects.",
            },
            {
              title: "Specialized Depth",
              body: "Learning focused on advanced frontend, cloud, AI, data, or architecture topics.",
            },
            {
              title: "Professional Growth",
              body: "Credentials tied to communication, leadership, delivery practices, or product thinking.",
            },
          ].map((item) => (
            <div key={item.title} className={`${ui.card} p-5`}>
              <p className={ui.title}>{item.title}</p>
              <p className={`${ui.body} mt-3`}>{item.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Template"
        title="A simple card format is usually enough"
        description="Do not overload certificate entries. Keep them clean, verifiable, and connected to what the reader already saw elsewhere."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Suggested fields</p>
            <p className={`${ui.body} mt-3`}>
              Title, issuer, completion date, verification URL, and a one-line note on the skills
              reinforced.
            </p>
          </div>
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Suggested framing</p>
            <p className={`${ui.body} mt-3`}>
              Explain how the credential fits into your current work, portfolio direction, or
              long-term career plan.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
