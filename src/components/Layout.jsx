import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(45,212,191,0.12),_transparent_28%)]" />
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-12 sm:px-8 lg:px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
