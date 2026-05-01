import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CertificatesPage from "./pages/CertificatesPage";
import CvPage from "./pages/CvPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
