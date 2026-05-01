import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/ContactSection";
import HomeHeroSection from "../components/home/HomeHeroSection";
import EducationSection from "../components/home/EducationSection";
import ExperienceSection from "../components/home/ExperienceSection";
import SkillsSection from "../components/home/SkillsSection";
import UniversityProjectsSection from "../components/home/UniversityProjectsSection";
import PersonalProjectsSection from "../components/home/PersonalProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import ReflectiveJournalSection from "../components/ReflectiveJournalSection";
import CareerDevelopmentSection from "../components/CareerDevelopmentSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <UniversityProjectsSection />
      <PersonalProjectsSection />
      <CertificatesSection />
      <ReflectiveJournalSection />
      <CareerDevelopmentSection />
      <ContactSection />
    </>
  );
}
