import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Route, Routes, useLocation } from "react-router";
import Layout from "./components/Layout";
import ScrollManager from "./components/ScrollManager";
import CertificatesPage from "./pages/CertificatesPage";
import CvPage from "./pages/CvPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Layout>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
