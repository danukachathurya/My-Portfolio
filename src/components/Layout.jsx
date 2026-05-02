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
      <main className="relative flex-1 pb-24 pt-20 sm:pt-24 lg:pt-28">{children}</main>
      <Footer />
    </div>
  );
}
