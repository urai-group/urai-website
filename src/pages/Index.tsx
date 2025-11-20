import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCubes from "@/components/FloatingCubes";
import WhoWeAre from "@/components/we";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FloatingCubes />
      <Navigation />
      <Hero />
      <About />
      <Mission />
      <WhoWeAre />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
