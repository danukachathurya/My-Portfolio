import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { secondaryNavigationLinks } from "../data/navigation";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Developer Portfolio"
        title={
          <>
            Present the work with
            {" "}
            <span className="gradient-text">clarity, depth, and momentum.</span>
          </>
        }
        description="This routed portfolio starter gives each major section its own focused space while keeping the same polished SaaS-inspired visual language across the entire experience."
        actions={
          <>
            <Button to="/about" size="lg">
              Explore the Story
            </Button>
            <Button to="/contact" size="lg" variant="secondary">
              Open Contact
            </Button>
          </>
        }
        aside={
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow-title">Portfolio Structure</p>
                <h2
                  className="mt-3 text-2xl font-semibold tracking-tight"
                  style={{ color: "var(--foreground)" }}
                >
                  Seven core routes, one shared system
                </h2>
              </div>
              <span className="theme-indicator">Live</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="surface-card p-5">
                <p className="meta-copy">Routes</p>
                <p className="stat-value mt-4" style={{ color: "var(--foreground)" }}>
                  7
                </p>
                <p className="body-copy mt-3">Dedicated pages for story, proof, planning, and outreach.</p>
              </div>
              <div className="surface-card p-5">
                <p className="meta-copy">Navbar</p>
                <p className="stat-value mt-4" style={{ color: "var(--foreground)" }}>
                  1
                </p>
                <p className="body-copy mt-3">Responsive, animated, and consistent across every route.</p>
              </div>
              <div className="surface-card p-5">
                <p className="meta-copy">Motion</p>
                <p className="stat-value mt-4" style={{ color: "var(--foreground)" }}>
                  2
                </p>
                <p className="body-copy mt-3">Smooth route scrolling and page transitions out of the box.</p>
              </div>
            </div>
          </div>
        }
      />

      <PageSection
        eyebrow="Navigation"
        title="Every route is ready to become a real portfolio page"
        description="Use these pages as polished starting points, then replace the template copy with your own projects, writing, credentials, and contact details."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryNavigationLinks.map((link) => (
            <article key={link.label} className="surface-card flex h-full flex-col p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                  {link.label}
                </h3>
                <span className="theme-indicator">Route</span>
              </div>
              <p className="body-copy mt-3 flex-1">{link.description}</p>
              <div className="mt-5">
                <Button to={link.to} variant="ghost">
                  Open {link.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Recommended Flow"
        title="A portfolio structure that mirrors how modern product teams present value"
        description="Guide visitors from identity, to proof, to trajectory, to next steps so the site feels intentional rather than just informational."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="surface-card p-5">
            <p className="meta-copy">1. Start with context</p>
            <p className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
              Home and About
            </p>
            <p className="body-copy mt-3">
              Introduce who you are, what you build, and the principles that shape your decisions.
            </p>
          </div>
          <div className="surface-card p-5">
            <p className="meta-copy">2. Show thought process</p>
            <p className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
              Journal and Career Plan
            </p>
            <p className="body-copy mt-3">
              Demonstrate how you think today and where you are investing in growth next.
            </p>
          </div>
          <div className="surface-card p-5">
            <p className="meta-copy">3. Close with proof</p>
            <p className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
              CV, Certificates, and Contact
            </p>
            <p className="body-copy mt-3">
              Make it easy for hiring managers, clients, or collaborators to validate and respond.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
