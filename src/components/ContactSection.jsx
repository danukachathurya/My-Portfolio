import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Button from "./Button";
import PageSection from "./PageSection";
import {
  CheckCircleIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
} from "./icons/PortfolioIcons";
import { contactHighlights, contactInfo } from "../data/contact";
import { getItemMotionProps, getSectionMotionProps } from "../lib/motion";
import { ui } from "../lib/ui";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

function validateContactForm(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    nextErrors.name = "Name should be at least 2 characters.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    nextErrors.message = "Please enter your message.";
  } else if (values.message.trim().length < 12) {
    nextErrors.message = "Message should be at least 12 characters.";
  }

  return nextErrors;
}

export default function ContactSection({ className = "", id = "contact" }) {
  const shouldReduceMotion = useReducedMotion();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  const fieldClassName = (hasError) =>
    `w-full rounded-[1.4rem] border bg-white/82 px-4 py-3.5 text-sm text-slate-950 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)] outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20 motion-reduce:transition-none dark:bg-slate-950/55 dark:text-white dark:placeholder:text-slate-500 ${
      hasError
        ? "border-rose-400/60 focus:border-rose-400/60 focus:ring-rose-400/20"
        : "border-slate-200/80 dark:border-slate-700/60"
    }`;

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });

    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateContactForm(formValues);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(
        "Thanks. Your message passed validation successfully and the form is ready to connect to an email or backend service.",
      );
      setFormValues(initialFormValues);
    }, 500);
  };

  return (
    <PageSection
      id={id}
      className={`scroll-mt-28 ${className}`.trim()}
      eyebrow="Contact"
      title="Let's connect for internships, backend projects, and collaboration"
      description="Reach out directly by phone or email, or use the form below to draft a polished message with built-in validation."
      panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.18)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.84)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
    >
      <motion.div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]" {...sectionMotionProps}>
        <motion.article className={`${ui.card} p-6 sm:p-8`} {...itemMotionProps}>
          <div className="space-y-6">
            <div className="space-y-3">
              <span className={ui.badge}>Available For Opportunities</span>
              <h3 className={ui.title}>Start the conversation with the channel that fits best.</h3>
              <p className={ui.body}>
                I'm open to internship opportunities, backend-focused work, and meaningful
                collaboration. Clear contact details and a simple form make reaching out easy.
              </p>
            </div>

            <div className="grid gap-4">
              {contactHighlights.map((detail) => {
                const Icon = detail.label === "Phone" ? PhoneIcon : MailIcon;

                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="block rounded-[1.8rem] border border-slate-200/80 bg-white/78 p-5 shadow-[0_22px_54px_-34px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/20 hover:bg-white/92 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/58 dark:hover:bg-slate-900/76"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 space-y-2">
                        <p className={ui.eyebrowTitle}>{detail.label}</p>
                        <p className="text-base font-semibold text-slate-950 dark:text-white">
                          {detail.value}
                        </p>
                        <p className={ui.body}>{detail.helper}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="rounded-[1.8rem] border border-sky-400/20 bg-sky-400/10 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-white/55 text-sky-700 dark:bg-slate-950/55 dark:text-sky-300">
                  <MessageIcon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <p className={ui.eyebrowTitle}>Response Window</p>
                  <p className="text-base font-semibold text-slate-950 dark:text-white">
                    {contactInfo.responseTime}
                  </p>
                  <p className={ui.body}>
                    Email is the best option for detailed project discussions and opportunity
                    inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={contactInfo.emailHref}>Email Me</Button>
              <Button href={contactInfo.phoneHref} variant="secondary">
                Call Me
              </Button>
            </div>
          </div>
        </motion.article>

        <motion.article className={`${ui.card} p-6 sm:p-8`} {...itemMotionProps}>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className={ui.eyebrowTitle}>Contact Form</p>
              <h3 className={ui.title}>Send a polished message with clear validation.</h3>
              <p className={ui.body}>
                This form currently uses client-side validation and a success state. Connect it to
                a backend or email service whenever you want to receive live submissions.
              </p>
            </div>

            {successMessage ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-[1.6rem] border border-emerald-400/20 bg-emerald-400/10 p-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-300" />
                  <p className="text-sm leading-7 text-emerald-800 dark:text-emerald-200">
                    {successMessage}
                  </p>
                </div>
              </div>
            ) : null}

            <form className="space-y-4" noValidate onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor={`${id}-name`} className={ui.eyebrowTitle}>
                    Name
                  </label>
                  <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formValues.name}
                    onChange={handleFieldChange}
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? `${id}-name-error` : undefined}
                    className={fieldClassName(Boolean(errors.name))}
                  />
                  {errors.name ? (
                    <p id={`${id}-name-error`} className="text-sm text-rose-600 dark:text-rose-300">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor={`${id}-email`} className={ui.eyebrowTitle}>
                    Email
                  </label>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={handleFieldChange}
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? `${id}-email-error` : undefined}
                    className={fieldClassName(Boolean(errors.email))}
                  />
                  {errors.email ? (
                    <p id={`${id}-email-error`} className="text-sm text-rose-600 dark:text-rose-300">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor={`${id}-message`} className={ui.eyebrowTitle}>
                  Message
                </label>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  rows="6"
                  value={formValues.message}
                  onChange={handleFieldChange}
                  placeholder="Tell me a little about the opportunity or project."
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? `${id}-message-error` : undefined}
                  className={`${fieldClassName(Boolean(errors.message))} resize-none`}
                />
                {errors.message ? (
                  <p id={`${id}-message-error`} className="text-sm text-rose-600 dark:text-rose-300">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button as="button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </Button>
                <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Phone: {contactInfo.phone} | Email: {contactInfo.email}
                </p>
              </div>
            </form>
          </div>
        </motion.article>
      </motion.div>
    </PageSection>
  );
}
