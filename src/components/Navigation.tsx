import { Button } from "@/components/ui/button";
import logo from "@/assets/urai-logo.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="URAI - University of Regensburg Artificial Intelligence" className="h-10 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About us
          </button>
          <button 
            onClick={() => scrollToSection("mission")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Mission
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 glow"
          >
            Join us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
