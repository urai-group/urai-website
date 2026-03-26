import { ArrowRight, Sparkles } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@src/components/ui/accordion";

const listItems = [
    {
        num: "01",
        title: "Real-World Projects",
        tag: "EXPERIENCE",
        content: "Work on cutting-edge AI challenges and industry-partnered initiatives that solve actual problems and build your practical portfolio."
    },
    {
        num: "02",
        title: "Expert Mentorship",
        tag: "GROWTH",
        content: "Learn directly from experienced researchers and professionals who provide guidance, code reviews, and career advice."
    },
    {
        num: "03",
        title: "Vibrant Community",
        tag: "NETWORK",
        content: "Connect with like-minded peers, collaborate on hackathons, and participate in exclusive networking events to build lasting connections."
    },
    {
        num: "04",
        title: "Career Development",
        tag: "OPPORTUNITIES",
        content: "We mutually support each other with internships and job opportunities, share our experiences, and prepare for interviews together."
    },
];

export function StandForSection() {

    return (
        <section className="py-32 bg-zinc-50 dark:bg-zinc-900/20 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Text and Features */}
                    <div className="flex flex-col">
                        <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
                            Why Choose Us
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-[1.1]">
                            What We Stand For
                        </h2>

                        <div className="space-y-6 text-muted-foreground text-lg sm:text-xl leading-relaxed mb-12 max-w-xl">
                            <p>
                                We're more than just an organization. We're a movement dedicated to democratizing AI knowledge and connecting passionate learners with real-world opportunities.
                            </p>
                            <p>
                                Our commitment is to foster innovation, build a supportive community, and create meaningful career pathways for the next generation of AI researchers and engineers.
                            </p>
                        </div>

                        {/* Bottom Feature Blocks */}
                        <div className="grid sm:grid-cols-2 gap-8 sm:gap-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                    <ArrowRight className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-foreground text-sm leading-tight mb-1">
                                        Innovation First
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                        Cutting-edge projects and research
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-foreground text-sm leading-tight mb-1">
                                        Community Driven
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                        Support and collaboration for all
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Numbered List */}
                    <div className="flex flex-col sm:px-4 lg:px-0 min-h-[450px] lg:min-h-[500px]">
                        <Accordion type="single" collapsible defaultValue="item-0" className="w-full border-t border-border/40 mt-4">
                            {listItems.map((item, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`item-${idx}`}
                                    className="group data-[state=open]:bg-muted/30 hover:bg-muted/10 transition-all duration-300"
                                >
                                    <AccordionTrigger className="hover:no-underline py-6 px-4 [&[data-state=open]>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-muted-foreground">
                                        <div className="flex items-center gap-6 text-left flex-1 pr-6">
                                            <span className="text-muted-foreground/40 font-mono text-sm font-semibold mt-1 shrink-0">
                                                {item.num}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold transition-colors text-foreground group-hover:text-primary group-data-[state=open]:text-primary flex-1">
                                                {item.title}
                                            </h3>
                                            <span className="text-xs font-semibold text-muted-foreground/40 uppercase tracking-[0.2em] hidden sm:block">
                                                {item.tag}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-14 sm:pl-[4.5rem] pr-4 pb-6">
                                        <p className="text-muted-foreground text-base leading-relaxed">
                                            {item.content}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
}
