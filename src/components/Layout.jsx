import { motion, useReducedMotion } from "motion/react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { ui } from "../lib/ui";

export default function Layout() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={ui.shell}>
      <div className={ui.gridOverlay} />
      <div className={ui.topGlow} />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-24 pt-8 sm:pt-12">
        <motion.div
          key={location.pathname}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
