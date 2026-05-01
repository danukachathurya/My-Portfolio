import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="border-t"
      id="footer"
      style={{
        background: "color-mix(in srgb, var(--background-elevated) 86%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <Container
        size="wide"
        className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="space-y-1">
          <p className="meta-copy">Built for developer portfolios that want product-level polish.</p>
          <p className="body-copy">
            Shared tokens, reusable buttons, and responsive containers keep every section aligned.
          </p>
        </div>
        <p className="mono-copy">React + Vite + Tailwind CSS + class-based dark mode</p>
      </Container>
    </footer>
  );
}
