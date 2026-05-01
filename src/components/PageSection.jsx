import Container from "./Container";
import { cn } from "../lib/cn";
import { ui } from "../lib/ui";

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
    <section id={id} className={cn("py-10", className)}>
      <Container size={size}>
        <div className={cn(ui.panel, "p-6 sm:p-8 lg:p-10", panelClassName)}>
          {(eyebrow || title || description) && (
            <div className="space-y-3">
              {eyebrow ? <p className={ui.eyebrowTitle}>{eyebrow}</p> : null}
              {title ? <h2 className={ui.sectionTitle}>{title}</h2> : null}
              {description ? <p className={`${ui.lead} max-w-4xl`}>{description}</p> : null}
            </div>
          )}

          <div className={eyebrow || title || description ? "mt-8" : ""}>{children}</div>
        </div>
      </Container>
    </section>
  );
}
