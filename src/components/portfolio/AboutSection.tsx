import { GraduationCap, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm constantly learning and building
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 card-hover bg-card border-border">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gradient-accent">Education</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium text-foreground">B.E. Computer Science & Engineering</p>
              <p>East Point College of Engineering</p>
              <p>3rd Year (5th Semester)</p>
              <p className="text-primary font-semibold">CGPA: 9.0</p>
              <p className="text-sm">Expected Graduation: 2027</p>
            </div>
          </Card>

          <Card className="p-8 card-hover bg-card border-border">
            <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gradient-accent">Achievements</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• 6+ Virtual Internships Completed</p>
              <p>• 10+ Professional Certifications</p>
              <p>• AI & Data Science Specialization</p>
              <p>• Web Development Expertise</p>
              <p>• 9.0 CGPA Academic Excellence</p>
            </div>
          </Card>

          <Card className="p-8 card-hover bg-card border-border">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gradient-accent">Experience</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• JP Morgan Chase - Software Engineering</p>
              <p>• Tata Group - Data Visualization</p>
              <p>• Deloitte - Cybersecurity & Data Analysis</p>
              <p>• AWS - Cloud Computing</p>
              <p>• Multiple Academic Projects</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;