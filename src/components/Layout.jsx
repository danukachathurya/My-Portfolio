import Navbar from "./Navbar";
import Footer from "./Footer";
import { ui } from "../lib/ui";

export default function Layout({ children }) {
  return (
    <div className={ui.shell}>
      <div className={ui.gridOverlay} />
      <div className={ui.topGlow} />
      <div className={ui.bottomGlow} />
      <Navbar />
      <main className="relative flex-1 pb-24 pt-6 sm:pt-10 lg:pt-12">{children}</main>
      <Footer />
    </div>
  );
}
