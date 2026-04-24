import { Button } from "@src/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useParticleCanvas } from "@src/hooks/use-particle-canvas";
import { useMouseParallax } from "@src/hooks/use-mouse-parallax";

const FILM_GRAIN_URI = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const ORB_STYLES = [
    {
        width: "clamp(450px, 65vw, 1100px)", height: "clamp(450px, 65vw, 1100px)",
        top: "-20%", left: "-15%",
        background: "radial-gradient(circle, hsl(262 85% 52% / 0.5) 0%, hsl(280 65% 60% / 0.3) 35%, transparent 65%)",
        filter: "blur(70px)", animation: "orb1 25s ease-in-out infinite",
        parallaxScale: 1.2,
    },
    {
        width: "clamp(400px, 55vw, 950px)", height: "clamp(400px, 55vw, 950px)",
        bottom: "-25%", right: "-12%",
        background: "radial-gradient(circle, hsl(235 55% 58% / 0.45) 0%, hsl(260 45% 68% / 0.25) 35%, transparent 65%)",
        filter: "blur(65px)", animation: "orb2 30s ease-in-out infinite",
        parallaxScale: -0.8,
    },
    {
        width: "clamp(300px, 40vw, 700px)", height: "clamp(300px, 40vw, 700px)",
        top: "15%", right: "5%",
        background: "radial-gradient(circle, hsl(290 70% 58% / 0.45) 0%, hsl(270 55% 68% / 0.2) 40%, transparent 65%)",
        filter: "blur(55px)", animation: "orb3 35s ease-in-out infinite",
        parallaxScale: 1.5,
    },
    {
        width: "clamp(250px, 30vw, 550px)", height: "clamp(250px, 30vw, 550px)",
        bottom: "5%", left: "10%",
        background: "radial-gradient(circle, hsl(300 55% 62% / 0.4) 0%, hsl(280 50% 68% / 0.18) 40%, transparent 65%)",
        filter: "blur(55px)", animation: "orb1 40s ease-in-out infinite reverse",
        parallaxScale: -1.0,
    },
] as const;

export function HeroSection() {
    const canvasRef = useParticleCanvas();
    const parallax = useMouseParallax(0.012);

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#ffffff_0%,#ede4ff_20%,#d5c5f2_45%,#bea5e6_70%,#a080d8_100%)]" />

            <div className="absolute inset-0 overflow-hidden">
                {ORB_STYLES.map((orb, i) => {
                    const { parallaxScale, ...style } = orb;
                    return (
                        <div
                            key={i}
                            className="absolute rounded-full will-change-transform hero-orb"
                            style={{
                                ...style,
                                transform: `translate(${parallax.x * parallaxScale}px, ${parallax.y * parallaxScale}px)`,
                            }}
                        />
                    );
                })}
            </div>

            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: FILM_GRAIN_URI, backgroundSize: "256px 256px" }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_35%,hsl(262_25%_82%/0.45)_100%)]" />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[2]" />

            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight opacity-0 animate-fade-up">
                    Regensburg's
                    <br />
                    first student{" "}
                    <span className="text-primary animate-glow-pulse">AI</span>
                    {" "}initiative
                </h1>

                <p
                    className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-up"
                    style={{ animationDelay: "150ms" }}
                >
                    Shaping the future of artificial intelligence — together.
                </p>

                <div
                    className="flex flex-wrap gap-4 justify-center mt-8 opacity-0 animate-fade-up"
                    style={{ animationDelay: "300ms" }}
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="backdrop-blur-sm bg-white/60 border-purple-300/40 text-foreground hover:bg-white/85 hover:border-purple-400/60 hover:text-foreground hover:-translate-y-px transition-all duration-200"
                        asChild
                    >
                        <a href="mailto:partners@urai-group.com">Become a Partner</a>
                    </Button>
                    <Button
                        size="lg"
                        className="shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-px transition-all duration-200"
                        asChild
                    >
                        <Link to="/member">Become a Member</Link>
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-background from-10% via-background/70 via-50% to-transparent z-20" />

            <div
                className="absolute bottom-8 left-0 right-0 flex justify-center z-30 opacity-0 animate-fade-up"
                style={{ animationDelay: "600ms" }}
            >
                <div
                    className="animate-bounce cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                >
                    <ChevronDown className="w-10 h-10 text-primary opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300" />
                </div>
            </div>
        </section>
    );
}
