import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { ui } from "../lib/ui";

export default function CvPage() {
  return (
    <>
      <PageHero
        eyebrow="CV"
        title="Present experience in a way that feels concise, credible, and easy to scan."
        description="This route is a clean place to summarize strengths, roles, outcomes, and tools without forcing visitors to dig through dense formatting."
        actions={
          <>
            <Button to="/contact">Start the Conversation</Button>
            <Button to="/certificates" variant="secondary">
              View Certificates
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>Recommended CV Signals</p>
            {[
              "Impact statements over task lists",
              "Core strengths grouped into themes",
              "Evidence that connects to real work",
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <PageSection
        eyebrow="Strengths"
        title="Use capability pillars instead of one long undifferentiated list"
        description="Grouping experience by themes helps readers understand the shape of your contribution much faster."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Product Engineering",
              body: "Explain how you translate ideas into shipped interfaces, features, and customer-facing improvements.",
            },
            {
              title: "Frontend Systems",
              body: "Show your approach to design systems, performance, component architecture, routing, and accessibility.",
            },
            {
              title: "Communication",
              body: "Highlight documentation, technical writing, team coordination, and the ability to create shared clarity.",
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
        eyebrow="Proof"
        title="Support the CV with outcomes and context"
        description="Each role or project summary should answer what changed, why it mattered, and what your direct contribution was."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Role summary format</p>
            <p className={`${ui.body} mt-3`}>
              Scope, collaboration context, technical challenge, measurable outcome, and one
              notable lesson.
            </p>
          </div>
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Linked evidence</p>
            <p className={`${ui.body} mt-3`}>
              Reference projects, journal entries, or certificates so the page feels connected to
              the rest of the portfolio.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
