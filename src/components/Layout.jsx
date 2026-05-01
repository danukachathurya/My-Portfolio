import { motion, useReducedMotion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ui } from "../lib/ui";

export default function Layout({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={ui.shell}>
      <div className={ui.gridOverlay} />
      <div className={ui.topGlow} />
      <Navbar />
      <main className="flex-1 pb-24 pt-8 sm:pt-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
