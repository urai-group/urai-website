import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Networking & Collaboration",
      description: "We connect motivated students with real research and industry projects – a platform for learning, collaboration, and innovation."
    },
    {
      icon: Target,
      title: "Practical Experience",
      description: "We enable students to contribute to research during their studies, build skills beyond the curriculum, and work in interdisciplinary teams."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "We support student-initiated projects and develop applied research together with partners from academia and industry."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What is URAI?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            URAI is a student-organized AI initiative at the University of Regensburg.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 glow group-hover:glow-strong transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
