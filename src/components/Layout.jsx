import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_54%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.16),_transparent_56%)]" />
      <Navbar />
      <main className="flex-1 pb-24 pt-8 sm:pt-12">{children}</main>
      <Footer />
    </div>
  );
}
