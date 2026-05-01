import Container from "./Container";

export default function PageHero({ actions, aside, description, eyebrow, title }) {
  return (
    <section className="pb-10">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <span className="eyebrow">{eyebrow}</span>
            <div className="space-y-5">
              <h1 className="display-hero max-w-5xl">{title}</h1>
              <p className="lead-copy">{description}</p>
            </div>
            {actions ? <div className="flex flex-wrap gap-4">{actions}</div> : null}
          </div>

          {aside ? <div className="panel panel-strong p-6 sm:p-8">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
