import Button from "../components/Button";
import DownloadCvButton from "../components/DownloadCvButton";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { cvData } from "../data/cv";
import { ui } from "../lib/ui";

export default function CvPage() {
  return (
    <>
      <PageHero
        eyebrow="CV"
        title="A concise CV view with a direct PDF download."
        description={cvData.summary}
        actions={
          <>
            <DownloadCvButton size="lg">Download PDF CV</DownloadCvButton>
            <Button href="/#contact">Start the Conversation</Button>
            <Button to="/certificates" variant="secondary">
              View Certificates
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>Quick Overview</p>
            {[
              cvData.role,
              `${cvData.education.length} education entries`,
              `${cvData.skillGroups.length} skill categories`,
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <PageSection
        eyebrow="Profile"
        title="Core experience, education, and technical strengths in one place"
        description="This CV page mirrors the portfolio story while keeping the information compact enough to scan quickly."
      >
        <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <div className={`${ui.card} p-6`}>
            <p className={ui.eyebrowTitle}>Contact</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                  {cvData.contact.email}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Phone
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                  {cvData.contact.phone}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  GitHub
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                  {cvData.contact.github}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  LinkedIn
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                  {cvData.contact.linkedin}
                </p>
              </div>
            </div>
          </div>

          <div className={`${ui.card} p-6`}>
            <p className={ui.eyebrowTitle}>Education</p>
            <div className="mt-4 space-y-4">
              {cvData.education.map((item) => (
                <div key={`${item.institution}-${item.years}`} className="rounded-3xl border border-slate-200/70 bg-white/70 p-5 dark:border-slate-700/60 dark:bg-slate-950/45">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-slate-950 dark:text-white">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.title}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200">
                      {item.years}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Experience"
        title="Internship impact, technical toolkit, and selected projects"
        description="This section keeps the most relevant full stack experience close to the download action."
      >
        <div className="grid gap-4 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-4">
            {cvData.experience.map((item) => (
              <div key={`${item.company}-${item.duration}`} className={`${ui.card} p-6`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className={ui.title}>{item.role}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {item.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200">
                    {item.duration}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                      <p className={ui.body}>{highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            <div className={`${ui.card} p-6`}>
              <p className={ui.eyebrowTitle}>Skills</p>
              <div className="mt-4 grid gap-4">
                {cvData.skillGroups.map((group) => (
                  <div key={group.title} className="rounded-3xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/60 dark:bg-slate-950/45">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      {group.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${ui.card} p-6`}>
              <p className={ui.eyebrowTitle}>Selected Projects</p>
              <div className="mt-4 space-y-4">
                {cvData.projects.map((project) => (
                  <div key={project.title} className="rounded-3xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/60 dark:bg-slate-950/45">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {project.stack.join(" | ")}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
