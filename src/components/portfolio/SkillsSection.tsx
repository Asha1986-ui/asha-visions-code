import { Code, Database, Cloud, Shield, Brain, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
      color: "text-primary"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React", "Django", "REST APIs"],
      color: "text-accent"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Database Design"],
      color: "text-secondary"
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS", "Microsoft Azure", "GitHub", "VS Code"],
      color: "text-primary"
    },
    {
      title: "AI & Data Science",
      icon: Brain,
      skills: ["Machine Learning", "Data Analysis", "OpenAI API"],
      color: "text-accent"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Security Fundamentals", "CompTIA IT", "Risk Assessment"],
      color: "text-secondary"
    }
  ];

  const services = [
    {
      title: "Website Development",
      description: "Custom web applications with modern frameworks and responsive design"
    },
    {
      title: "Data Analysis",
      description: "Insights extraction and visualization from complex datasets"
    },
    {
      title: "Portfolio & Resume Guidance",
      description: "Professional portfolio creation and career development support"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 card-hover bg-card border-border">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color.split('-')[1]}/10 mr-4`}>
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm bg-muted text-muted-foreground px-3 py-2 rounded-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-gradient-accent">
            Services Offered
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 card-hover bg-card border-border text-center">
              <h4 className="text-xl font-semibold mb-4 text-primary">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;