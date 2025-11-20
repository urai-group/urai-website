const Mission = () => {
  return (
    <section id="mission" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 backdrop-blur-sm border border-primary/20 glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Through workshops, projects, and practical experiments, we prepare our members 
                for a future in research or industry – with a clear practical focus on 
                <span className="text-primary font-semibold"> AI, Machine Learning, and Data Science</span>.
              </p>
              <p className="text-xl text-foreground font-medium">
                If you want to go beyond lectures, work on real problems, and turn ideas into 
                projects: Then URAI is the right place for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
