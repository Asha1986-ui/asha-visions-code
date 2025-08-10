import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import CertificationsSection from "./CertificationsSection";
import ResumeSection from "./ResumeSection";
import ContactSection from "./ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            © 2024 Asha M. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;