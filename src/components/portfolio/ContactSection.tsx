import { Mail, Phone, Linkedin, Github, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "1ep23cs020@eastpoint.ac.in",
      href: "mailto:1ep23cs020@eastpoint.ac.in",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8904051999",
      href: "tel:+918904051999",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/asha-m-96821836b",
      href: "https://linkedin.com/in/asha-m-96821836b",
      color: "text-secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Asha1986-ui",
      href: "https://github.com/Asha1986-ui",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-accent mr-3" />
                <span className="text-lg font-semibold">Bengaluru, India</span>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or share knowledge about technology and development. Feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-4 rounded-lg bg-muted hover:bg-card-hover transition-all duration-300 glow-hover group"
                    >
                      <IconComponent className={`w-5 h-5 ${contact.color} mr-4 group-hover:scale-110 transition-transform`} />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="text-foreground font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <a 
                href="https://drive.google.com/file/d/1p0Gh1sVcPfqTYmUpRelHJuGu6XMb4W8h/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="download" size="lg" className="w-full">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </a>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Available for Opportunities</h3>
              <p className="mb-6 opacity-90">
                Currently seeking internships and entry-level positions in:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Software Development</li>
                <li>• Web Development</li>
                <li>• Data Analysis</li>
                <li>• AI/ML Projects</li>
                <li>• Cloud Computing</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-semibold mb-4 text-gradient-accent">
                Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Bengaluru, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium">B.E. Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">3rd Year (5th Semester)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CGPA</span>
                  <span className="font-medium text-primary">9.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Graduation</span>
                  <span className="font-medium">2027</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;