const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Regensburg's<br />
          first student <span className="text-primary text-glow">AI</span> initiative
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Connecting motivated students with real research and industry projects
        </p>
        <button 
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-sm text-muted-foreground hover:text-foreground transition-all"
        >
          Scroll to register interest ↓
        </button>
      </div>
    </section>
  );
};

export default Hero;
