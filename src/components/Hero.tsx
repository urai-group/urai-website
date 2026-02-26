import hetznerLogo from "@/assets/sponsors/hetzner-logo.png";

const Hero = () => {
  return (
    <section className="min-h-dvh flex items-center justify-center relative overflow-hidden pt-20">
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

      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1.5 md:gap-2">
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground/40">
          Supported by
        </span>
        <img
          src={hetznerLogo}
          alt="Hetzner – Infrastructure Sponsor"
          className="h-10 md:h-14 w-auto object-contain rounded-md"
        />
        <span className="text-[10px] md:text-xs text-muted-foreground/30">
          Infrastructure Sponsor
        </span>
      </div>
    </section>
  );
};

export default Hero;
