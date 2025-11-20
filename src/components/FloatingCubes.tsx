const FloatingCubes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl glow-strong animate-float" 
           style={{ animationDelay: "0s", animationDuration: "8s" }} />
      <div className="absolute top-1/4 right-20 w-48 h-48 bg-gradient-to-br from-accent/25 to-primary/25 rounded-3xl blur-2xl glow animate-float-slow" 
           style={{ animationDelay: "1s", animationDuration: "10s" }} />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl glow animate-float" 
           style={{ animationDelay: "2s", animationDuration: "9s" }} />
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-2xl glow-strong animate-float-slow" 
           style={{ animationDelay: "1.5s", animationDuration: "11s" }} />
      <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-primary/25 to-accent/25 rounded-xl blur-xl glow animate-float" 
           style={{ animationDelay: "0.5s", animationDuration: "7s" }} />
    </div>
  );
};

export default FloatingCubes;
