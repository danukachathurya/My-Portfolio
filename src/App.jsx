import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CareerPlanPage from "./pages/CareerPlanPage";
import CertificatesPage from "./pages/CertificatesPage";
import ContactPage from "./pages/ContactPage";
import CvPage from "./pages/CvPage";
import HomePage from "./pages/HomePage";
import JournalPage from "./pages/JournalPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="journal" element={<JournalPage />} />
        <Route path="career-plan" element={<CareerPlanPage />} />
        <Route path="cv" element={<CvPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
