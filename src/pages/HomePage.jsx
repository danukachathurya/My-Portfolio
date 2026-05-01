export default function HomePage() {
  return (
    <section className="grid w-full gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-200">
          Starter layout is ready
        </span>

        <div className="space-y-4">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build your portfolio on a clean React and Tailwind foundation.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            This starter includes a reusable navbar, footer, and main content
            area, plus the project folders you asked for so you can start
            adding sections and content right away.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#structure"
            className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Explore Structure
          </a>
          <a
            href="#next-steps"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Customize Next
          </a>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
        <div className="grid gap-4" id="structure">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-sm text-slate-400">Included folders</p>
            <p className="mt-2 text-lg font-semibold text-white">
              components, pages, assets, data
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-sm text-slate-400">Layout pieces</p>
            <p className="mt-2 text-lg font-semibold text-white">
              Navbar, main content, and footer
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4" id="next-steps">
            <p className="text-sm text-slate-400">Next step</p>
            <p className="mt-2 text-lg font-semibold text-white">
              Replace this page with your real portfolio sections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
