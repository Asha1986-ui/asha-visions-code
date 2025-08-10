import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-primary">Asha</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-gradient-accent">Computer Science Student | Web Developer | AI Enthusiast</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            3rd-year Computer Science student with 6+ virtual internships, 10+ certifications, and a CGPA of 9.0. 
            Skilled in Java, Python, Web Development, and Cloud Technologies. Passionate about building impactful 
            projects in AI and software development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="https://drive.google.com/file/d/1p0Gh1sVcPfqTYmUpRelHJuGu6XMb4W8h/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="tech" size="lg" className="animate-glow-pulse">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
            <a 
              href="https://drive.google.com/file/d/1p0Gh1sVcPfqTYmUpRelHJuGu6XMb4W8h/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                View Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="mailto:1ep23cs020@eastpoint.ac.in"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 glow-hover"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/asha-m-96821836b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 glow-hover"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://github.com/Asha1986-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 glow-hover"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </div>

          <button
            onClick={scrollToNext}
            className="animate-float text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      {/* Quick Highlights Section */}
      <div className="bg-card border-t border-border py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gradient-primary mb-2">6+</div>
              <div className="text-muted-foreground">Virtual Internships</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gradient-accent mb-2">10+</div>
              <div className="text-muted-foreground">Professional Certifications</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-gradient-primary mb-2">9.0</div>
              <div className="text-muted-foreground">CGPA in Computer Science</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;