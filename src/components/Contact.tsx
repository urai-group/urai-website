import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = "Interest in URAI";
    const body = message || "I would like to learn more about URAI and participate.";
    const mailtoLink = `mailto:contact@urai-group.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + "\n\nMy email: " + email)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email",
      description: "Your email client should open now.",
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 glow-strong">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Interested?</h2>
            <p className="text-xl text-muted-foreground">
              Send us an email and we'll get back to you!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card/50 border-border/50 focus:border-primary h-12"
              />
            </div>
            <div>
              <Textarea
                placeholder="Optional: Tell us about yourself and your interest in AI"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="bg-card/50 border-border/50 focus:border-primary resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-lg bg-primary hover:bg-primary/90 glow-strong"
            >
              Express Interest
            </Button>
          </form>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            Or write to us directly at{" "}
            <a 
              href="mailto:contact@urai-regensburg.de" 
              className="text-primary hover:underline"
            >
              contact@urai-group.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
