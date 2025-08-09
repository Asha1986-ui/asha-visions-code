import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Event Management System",
      description: "Full-stack web application for event creation, user registration, and resource allocation with role-based access control.",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "REST API"],
      type: "Team Project",
      features: [
        "Event creation and management",
        "User registration system",
        "Resource allocation tracking",
        "Role-based access control",
        "Real-time updates via REST APIs"
      ]
    },
    {
      title: "EduAssist – AI Study Assistant",
      description: "AI-powered academic assistant with intelligent chat-based Q&A system for students.",
      technologies: ["React", "JavaScript", "OpenAI API", "Natural Language Processing"],
      type: "Individual Project",
      features: [
        "AI-powered chat interface",
        "Natural language processing",
        "Academic content assistance",
        "Real-time Q&A support",
        "OpenAI API integration"
      ]
    },
    {
      title: "FocusNest – Pomodoro App",
      description: "Productivity application with customizable focus/break cycles, dark mode, and persistent user preferences.",
      technologies: ["React", "JavaScript", "HTML/CSS", "Local Storage"],
      type: "Individual Project",
      features: [
        "Custom focus/break timers",
        "Dark/light theme toggle",
        "Browser storage persistence",
        "Auto long breaks",
        "Productivity tracking"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my passion for creating innovative solutions and learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 card-hover bg-card border-border">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;