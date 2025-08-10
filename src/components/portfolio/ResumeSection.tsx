import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            View or download my latest resume directly from this page
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-4 bg-card border-border mb-8">
            <iframe 
              src="https://drive.google.com/file/d/1p0Gh1sVcPfqTYmUpRelHJuGu6XMb4W8h/preview" 
              width="100%" 
              height="800" 
              style={{ border: 'none', borderRadius: '8px' }}
              title="Asha M Resume"
            />
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://drive.google.com/file/d/1p0Gh1sVcPfqTYmUpRelHJuGu6XMb4W8h/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="tech" size="lg" className="w-full sm:w-auto">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
            <a 
              href="https://drive.google.com/file/d/1p0Gh1sVcPfqTYmUpRelHJuGu6XMb4W8h/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <ExternalLink className="w-5 h-5" />
                View in New Tab
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;