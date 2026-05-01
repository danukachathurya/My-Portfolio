import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { ui } from "../lib/ui";

export default function CareerPlanPage() {
  return (
    <>
      <PageHero
        eyebrow="Career Plan"
        title="Show that your growth is deliberate, not accidental."
        description="A career plan page gives structure to your ambition. It signals direction, self-awareness, and the specific skills or responsibilities you are investing in over time."
        actions={
          <>
            <Button to="/cv">Open CV</Button>
            <Button to="/certificates" variant="secondary">
              Review Credentials
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>Roadmap Rhythm</p>
            {[
              "Now: strengthen execution and system fluency",
              "Next: broaden ownership and influence",
              "Later: lead larger product and technical bets",
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <PageSection
        eyebrow="Roadmap"
        title="Break growth into phases that are easy to communicate"
        description="Clear phases help you explain what you are prioritizing today without losing sight of the broader destination."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Now",
              body: "Deepen technical execution, sharpen writing, and turn good habits into repeatable systems.",
            },
            {
              title: "Next",
              body: "Take on broader product context, architectural responsibility, and stronger cross-functional influence.",
            },
            {
              title: "Later",
              body: "Grow into leading initiatives, mentoring others, and shaping strategy with technical credibility.",
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
        eyebrow="Signals"
        title="Tie the plan to observable proof"
        description="Career plans become stronger when they connect to habits, projects, writing, or credentials that visitors can actually inspect."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Evidence to link</p>
            <p className={`${ui.body} mt-3`}>
              Projects, journal entries, certificates, mentorship stories, or examples of
              increased scope.
            </p>
          </div>
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Signals to avoid</p>
            <p className={`${ui.body} mt-3`}>
              Vague ambition without action, generic titles without context, or goals that are not
              reflected anywhere else in the portfolio.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
