import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { ui } from "../lib/ui";

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Turn the portfolio into a publishing surface for technical thinking."
        description="A journal page helps visitors see how you reason through architecture, product tradeoffs, frontend craft, debugging, and lessons learned over time."
        actions={
          <>
            <Button to="/about">Back to About</Button>
            <Button to="/contact" variant="secondary">
              Invite Collaboration
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>Writing Tracks</p>
            {[
              "Engineering notes and implementation lessons",
              "Product thinking and UX decisions",
              "Career reflections and learning logs",
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <PageSection
        eyebrow="Publishing Ideas"
        title="Organize entries by themes instead of posting into one undifferentiated stream"
        description="Themes make the archive easier to scan and help hiring managers or clients quickly find the kind of thinking that matters to them."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Frontend Systems",
              body: "Write about design systems, performance, accessibility, routing, and component architecture.",
            },
            {
              title: "Product Delivery",
              body: "Share how you scope work, prioritize tradeoffs, and move ideas from concept to shipped experience.",
            },
            {
              title: "Learning in Public",
              body: "Capture experiments, failures, and evolving viewpoints so the journal feels alive and honest.",
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
        eyebrow="Entry Templates"
        title="Simple content structures that keep writing consistent"
        description="You do not need every post to be long. Even short notes become valuable when they follow a clear pattern."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Case note</p>
            <p className={`${ui.body} mt-3`}>
              Problem, constraints, decision, outcome, and what you would change next time.
            </p>
          </div>
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Learning log</p>
            <p className={`${ui.body} mt-3`}>
              Topic explored, why it mattered, key lesson, and one practical application going forward.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
