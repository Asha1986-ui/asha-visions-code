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
            <span className="text-gradient-primary">Asha M</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science Student & Web Developer
            <br />
            <span className="text-gradient-accent">Building the future with code</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student with a strong foundation in web development 
            and a keen interest in artificial intelligence. I enjoy creating clean, user-focused 
            digital experiences using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="tech" size="lg" className="animate-glow-pulse">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button variant="hero" size="lg">
              View My Work
            </Button>
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
    </section>
  );
};

export default HeroSection;