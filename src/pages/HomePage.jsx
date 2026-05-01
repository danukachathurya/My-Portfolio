import Button from "../components/Button";
import Container from "../components/Container";
import {
  buttonVariants,
  containerSystem,
  palette,
  typographyScale,
} from "../data/designSystem";

function swatchStyle(style) {
  return {
    background: style.background,
    boxShadow: style.boxShadow,
  };
}

export default function HomePage() {
  return (
    <>
      <section className="pb-10">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div className="space-y-8">
              <span className="eyebrow">Dark-first design system</span>

              <div className="space-y-6">
                <h1 className="display-hero max-w-5xl">
                  Crafted for <span className="gradient-text">modern builders</span> who want a
                  SaaS-grade portfolio.
                </h1>
                <p className="lead-copy">
                  This system pairs dark gradients, sharp typography, reusable buttons, and a
                  responsive container rhythm so portfolio pages feel polished from the first
                  screen to the final call to action.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="#components" size="lg">
                  View Components
                </Button>
                <Button href="#palette" variant="secondary" size="lg">
                  Explore Palette
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="surface-card p-5">
                  <p className="meta-copy">Color system</p>
                  <p className="stat-value mt-4" style={{ color: "var(--foreground)" }}>
                    6
                  </p>
                  <p className="body-copy mt-3">Core tokens spanning canvas, surfaces, text, and gradients.</p>
                </div>
                <div className="surface-card p-5">
                  <p className="meta-copy">Button variants</p>
                  <p className="stat-value mt-4" style={{ color: "var(--foreground)" }}>
                    3
                  </p>
                  <p className="body-copy mt-3">Primary, secondary, and ghost actions for predictable hierarchy.</p>
                </div>
                <div className="surface-card p-5">
                  <p className="meta-copy">Theme support</p>
                  <p className="stat-value mt-4" style={{ color: "var(--foreground)" }}>
                    2
                  </p>
                  <p className="body-copy mt-3">Light and dark modes powered by a persistent class toggle.</p>
                </div>
              </div>
            </div>

            <div className="panel panel-strong p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow-title">System Snapshot</p>
                  <h2
                    className="mt-3 text-2xl font-semibold tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    SaaS clarity with portfolio personality
                  </h2>
                </div>
                <span className="theme-indicator">v1</span>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="surface-card p-5">
                  <p className="meta-copy">Visual direction</p>
                  <div className="mt-4 flex items-center gap-3">
                    {[
                      "var(--background)",
                      "var(--accent)",
                      "var(--accent-strong)",
                      "var(--accent-tertiary)",
                    ].map((color) => (
                      <span
                        key={color}
                        className="h-11 w-11 rounded-2xl border"
                        style={{ background: color, borderColor: "var(--border)" }}
                      />
                    ))}
                  </div>
                  <p className="body-copy mt-4">
                    Deep canvas colors, airy glass surfaces, and luminous cyan-to-teal gradients
                    create a clean developer brand without drifting into generic templates.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <p className="meta-copy">Recommended structure</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Hero", "Projects", "Writing", "About", "CTA"].map((item) => (
                      <span key={item} className="theme-indicator">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="body-copy mt-4">
                    Use the container system to keep each section focused while letting featured
                    work, results, and testimonials breathe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10" id="palette">
        <Container size="wide">
          <div className="panel p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="eyebrow-title">Color Palette</p>
                <h2 className="section-title" style={{ color: "var(--foreground)" }}>
                  Dark gradients and calm surfaces built for developer credibility
                </h2>
              </div>
              <p className="mono-copy">Tokens adapt automatically when the root theme class changes.</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {palette.map((item) => (
                <div key={item.name} className="surface-card p-5">
                  <div className="token-swatch" style={swatchStyle(item.style)} />
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                      {item.name}
                    </p>
                    <span className="mono-copy">{item.token}</span>
                  </div>
                  <p className="body-copy mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10" id="type">
        <Container size="wide">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="panel p-6 sm:p-8 lg:p-10">
              <div className="space-y-3">
                <p className="eyebrow-title">Typography</p>
                <h2 className="section-title" style={{ color: "var(--foreground)" }}>
                  A type scale that feels technical, readable, and presentable
                </h2>
              </div>

              <div className="mt-8 space-y-4">
                {typographyScale.map((item) => (
                  <div key={item.name} className="surface-card p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="meta-copy">{item.name}</p>
                        <p className="body-copy">{item.usage}</p>
                      </div>
                      <span className="mono-copy">{item.token}</span>
                    </div>
                    <div className="mt-5">
                      <p className={item.previewClassName} style={{ color: "var(--foreground)" }}>
                        {item.sample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6 sm:p-8 lg:p-10" id="components">
              <div className="space-y-3">
                <p className="eyebrow-title">Buttons</p>
                <h2 className="section-title" style={{ color: "var(--foreground)" }}>
                  Reusable actions with a clear interaction hierarchy
                </h2>
              </div>

              <div className="mt-8 grid gap-4">
                {buttonVariants.map((item) => (
                  <div
                    key={item.variant}
                    className="surface-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="space-y-2">
                      <p className="meta-copy">{item.name}</p>
                      <p className="body-copy">{item.description}</p>
                    </div>
                    <Button variant={item.variant}>{item.label}</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10" id="layout">
        <Container size="wide">
          <div className="panel p-6 sm:p-8 lg:p-10">
            <div className="space-y-3">
              <p className="eyebrow-title">Container System</p>
              <h2 className="section-title" style={{ color: "var(--foreground)" }}>
                Layout widths that keep the portfolio consistent on every screen
              </h2>
              <p className="lead-copy max-w-4xl">
                Use wide containers for hero sections, default containers for general content, and
                narrow containers for reading-heavy areas like case studies or writing.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {containerSystem.map((item) => (
                <div key={item.name} className="surface-card p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                      {item.name}
                    </p>
                    <span className="mono-copy">{item.maxWidth}</span>
                  </div>
                  <p className="body-copy mt-3">{item.usage}</p>

                  <div
                    className="mt-5 rounded-full border p-2"
                    style={{ borderColor: "var(--border)", background: "var(--background)" }}
                  >
                    <div
                      className="h-3 rounded-full"
                      style={{ width: item.previewWidth, background: "var(--gradient-hero)" }}
                    />
                  </div>

                  <p className="mono-copy mt-4">{`<Container size="${item.name}" />`}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
