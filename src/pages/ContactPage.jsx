import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { ui } from "../lib/ui";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Make it obvious how people should reach you and what they can reach out about."
        description="A clear contact page reduces hesitation. It tells visitors which channel to use, what kinds of conversations are welcome, and what sort of response they can expect."
        actions={
          <>
            <Button to="/cv">Open CV</Button>
            <Button to="/about" variant="secondary">
              Read About
            </Button>
          </>
        }
        aside={
          <div className="space-y-4">
            <p className={ui.eyebrowTitle}>Contact Best Practices</p>
            {[
              "List your preferred channels clearly",
              "Say what kinds of opportunities fit best",
              "Set expectations around response time",
            ].map((item) => (
              <div key={item} className={`${ui.card} p-4`}>
                <p className={ui.meta}>{item}</p>
              </div>
            ))}
          </div>
        }
      />

      <PageSection
        eyebrow="Channels"
        title="Add only the channels you genuinely monitor"
        description="This keeps the page trustworthy and reduces dead ends for hiring managers, collaborators, or clients."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Email",
              body: "Use for hiring conversations, consulting inquiries, and thoughtful project requests.",
            },
            {
              title: "LinkedIn",
              body: "Use for networking, professional introductions, and recruiter outreach.",
            },
            {
              title: "GitHub or Portfolio Form",
              body: "Use for technical collaboration, open-source follow-ups, or general inbound interest.",
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
        eyebrow="Expectations"
        title="A little process can make the page feel far more professional"
        description="Tell people how you like to start a conversation so they know what useful outreach looks like."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Good first message</p>
            <p className={`${ui.body} mt-3`}>
              Include the opportunity type, timeline, context, and any links that help clarify
              scope.
            </p>
          </div>
          <div className={`${ui.card} p-6`}>
            <p className={ui.meta}>Response rhythm</p>
            <p className={`${ui.body} mt-3`}>
              Share a realistic response window so visitors know what to expect after reaching out.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
