import Container from "./Container";

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PageSection({
  children,
  className = "",
  description,
  eyebrow,
  id,
  panelClassName = "",
  size = "wide",
  title,
}) {
  return (
    <section id={id} className={joinClasses("py-10", className)}>
      <Container size={size}>
        <div className={joinClasses("panel p-6 sm:p-8 lg:p-10", panelClassName)}>
          {(eyebrow || title || description) && (
            <div className="space-y-3">
              {eyebrow ? <p className="eyebrow-title">{eyebrow}</p> : null}
              {title ? (
                <h2 className="section-title" style={{ color: "var(--foreground)" }}>
                  {title}
                </h2>
              ) : null}
              {description ? <p className="lead-copy max-w-4xl">{description}</p> : null}
            </div>
          )}

          <div className={eyebrow || title || description ? "mt-8" : ""}>{children}</div>
        </div>
      </Container>
    </section>
  );
}
