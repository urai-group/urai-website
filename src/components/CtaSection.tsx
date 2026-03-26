import { Button } from "@src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CtaSection() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="gradient-primary rounded-[2.5rem] p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                    
                    {/* Subtle glow / light accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Ready to shape the future of AI?
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg sm:text-xl">
                            Whether you're a student looking to gain real-world experience, or a company seeking to collaborate with emerging top talent — there's a place for you at URAI.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 font-medium gap-2 rounded-xl"
                                asChild
                            >
                                <Link to="/member">
                                    Become a Member <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-white/30 text-white hover:text-white hover:bg-white/10 font-medium gap-2 rounded-xl"
                                asChild
                            >
                                <a href="mailto:partners@urai-group.com">
                                    Become a Partner <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
