import { useEffect, useState, useRef } from "react";
import communityBg from "@src/assets/community-bg.jpeg";

const stats = [
    { value: 20, suffix: "+", label: "Members" },
    { value: 5, suffix: "+", label: "Study Programs" },
    { value: 7, suffix: "+", label: "Nationalities" },
];

function CountUpItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    let startTimestamp: number;
                    const duration = 2000;

                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        // Easing function: easeOutCubic
                        const easeProgress = 1 - Math.pow(1 - progress, 3);
                        
                        setCount(Math.round(easeProgress * value));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(value);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <div ref={ref} className="flex flex-col items-start w-full">
            <p className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-foreground mb-2 tabular-nums">
                {count}{suffix}
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm font-semibold uppercase tracking-widest">{label}</p>
        </div>
    );
}

export function StatsSection() {
    return (
        <section className="py-32 bg-background" id="community">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Text and Stats */}
                    <div className="flex flex-col">
                        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
                            Our Scale
                        </h2>
                        <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-16 tracking-tight">
                            We are a growing community
                        </h3>
                        
                        {/* Using a strict grid to prevent layout shifting during animation */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 w-full">
                            {stats.map((s) => (
                                <CountUpItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Group Photo */}
                    <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl bg-muted">
                        <img
                            src={communityBg}
                            alt="Our Community"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
