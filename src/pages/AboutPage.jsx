import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Use this page to explain the person behind the portfolio, not just the stack."
        description="Strong About pages connect technical ability to judgment, communication, and values. This template gives you space to show how you think, what you care about, and how you work with others."
        actions={
          <>
            <Button to="/career-plan">See the Growth Plan</Button>
            <Button to="/contact" variant="secondary">
              Contact Page
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className="eyebrow-title">Suggested Story Blocks</p>
            {[
              "Your background and current focus",
              "The principles that guide your decisions",
              "How you collaborate with teams and stakeholders",
            ].map((item) => (
              <div key={item} className="surface-card p-4">
                <p className="meta-copy">{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <PageSection
        eyebrow="Sections"
        title="Core ideas worth covering on an About page"
        description="Keep the page grounded in useful signals: what you build, how you work, and what teammates can count on when they work with you."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Working Style",
              body: "Describe how you balance product thinking, technical depth, and delivery discipline.",
            },
            {
              title: "Engineering Values",
              body: "Explain your standards around maintainability, clarity, accessibility, and team trust.",
            },
            {
              title: "Human Context",
              body: "Add interests, motivations, or experiences that make the portfolio feel personal and memorable.",
            },
          ].map((item) => (
            <div key={item.title} className="surface-card p-5">
              <p className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                {item.title}
              </p>
              <p className="body-copy mt-3">{item.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Narrative"
        title="A strong About page usually blends credibility with personality"
        description="Use one column to cover your path and another to show the practical outcomes of that path in real product or engineering settings."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          <div className="surface-card p-6">
            <p className="meta-copy">Background and trajectory</p>
            <p className="body-copy mt-3">
              Summarize the moments, projects, or transitions that shaped your current direction.
              This is a good place to show progression rather than listing every detail.
            </p>
          </div>
          <div className="surface-card p-6">
            <p className="meta-copy">What collaborators experience</p>
            <p className="body-copy mt-3">
              Explain what it feels like to work with you: communication style, speed of iteration,
              ownership, documentation habits, and willingness to mentor or coordinate.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
