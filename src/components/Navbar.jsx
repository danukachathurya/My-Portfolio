import { navigationLinks } from "../data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#" className="text-lg font-semibold tracking-[0.2em] text-sky-300 uppercase">
          Portfolio
        </a>

        <ul className="flex items-center gap-3 text-sm text-slate-300 sm:gap-6">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
