import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    { name: "AI in Azure", provider: "Microsoft", category: "Cloud & AI" },
    { name: "AWS Cloud Practitioner Essentials", provider: "AWS", category: "Cloud Computing" },
    { name: "Java Fundamentals", provider: "Oracle", category: "Programming" },
    { name: "Java Programming", provider: "Infosys", category: "Programming" },
    { name: "Data Structures and Algorithms", provider: "Simplilearn", category: "Programming" },
    { name: "CompTIA IT Fundamentals", provider: "Infosys", category: "IT Fundamentals" },
    { name: "Google Basic Tech Badge", provider: "Google", category: "Technology" },
    { name: "Cybersecurity Fundamentals", provider: "Deloitte", category: "Security" },
    { name: "Data Visualization", provider: "Tata Group", category: "Data Science" },
    { name: "Technology Innovation", provider: "Deloitte", category: "Technology" }
  ];

  const internships = [
    { company: "JP Morgan Chase", role: "Software Engineering Intern", logo: "🏦" },
    { company: "Tata Group", role: "Data Visualization Intern", logo: "🏢" },
    { company: "Deloitte", role: "Cybersecurity & Data Analyst", logo: "💼" },
    { company: "AWS", role: "Cloud Computing Intern", logo: "☁️" }
  ];

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section className="section-padding-sm">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-primary mr-4" />
              <h3 className="text-3xl font-bold text-gradient-primary">
                Certifications
              </h3>
            </div>

            <div className="grid gap-4 mb-6">
              {displayedCertifications.map((cert, index) => (
                <Card key={index} className="p-4 card-hover bg-card border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {cert.provider}
                      </p>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {certifications.length > 6 && (
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="w-full"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Show All Certifications <ChevronDown className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>

          {/* Virtual Internships */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 text-accent mr-4 text-2xl">💼</div>
              <h3 className="text-3xl font-bold text-gradient-accent">
                Virtual Internships
              </h3>
            </div>

            <div className="space-y-4">
              {internships.map((internship, index) => (
                <Card key={index} className="p-6 card-hover bg-card border-border">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{internship.logo}</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {internship.company}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {internship.role}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 mt-6 bg-gradient-primary text-primary-foreground">
              <h4 className="font-semibold mb-2">Experience Highlights</h4>
              <p className="text-sm opacity-90">
                Completed 6+ virtual internships across top companies, gaining experience in 
                software engineering, data analysis, cybersecurity, and cloud computing.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;