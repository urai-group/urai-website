import logo from "@/assets/we.jpeg";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 backdrop-blur-sm border border-primary/20 glow flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src={logo} 
              alt="URAI Team" 
              className="rounded-2xl shadow-lg object-cover w-full h-auto max-h-80" 
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-6 text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Who We Are</h2>
            <p>
              We are a diverse community of students and researchers with different areas of focus.
              We are united by a shared fascination and the goal of solving complex problems from various disciplines through data science and artificial intelligence.
            </p>
            <p className="text-xl text-foreground font-medium">
Join us to connect, learn, and innovate with people who love solving real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
