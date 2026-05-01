import Button from "../components/Button";
import PageHero from "../components/PageHero";
import CareerDevelopmentSection from "../components/CareerDevelopmentSection";
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
            <Button href="/">Back to Portfolio</Button>
            <Button href="/#contact" variant="secondary">
              Contact Me
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

      <CareerDevelopmentSection />
    </>
  );
}
