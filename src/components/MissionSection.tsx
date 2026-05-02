import { useState, useEffect, useRef } from "react";
import one from "@src/assets/slideshow/one.jpeg";
import two from "@src/assets/slideshow/two.jpeg";
import three from "@src/assets/slideshow/three.jpeg";
import four from "@src/assets/slideshow/four.jpeg";

const images = [
    { src: one, caption: "URAI goes Campus Run 2026" },
    { src: two, caption: "URAI at AI DAY 2026" },
    { src: three, caption: "URAI goes Datafest 2026 (Mannheim)" },
    { src: four, caption: "URAI presents Scope Weaver" },
];

export function MissionSection() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent(i => (i + 1) % images.length);
        }, 4000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const goTo = (index: number) => {
        setCurrent(index);
        startTimer();
    };

    return (
        <section className="py-32 bg-background overflow-hidden relative">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="flex flex-col">
                        <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
                            About Us
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight">
                            Who we are.
                        </h2>

                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                We are a diverse community of students and researchers with different areas of focus. We are united by a shared fascination and the goal of solving complex problems from various disciplines through data science and artificial intelligence.
                            </p>

                            <p>
                                Whether you're taking your first steps into machine learning or already publishing research, you'll find a collaborative environment where ideas turn into reality.
                            </p>
                        </div>
                    </div>

                    {/* Right: Slideshow */}
                    <div className="flex flex-col gap-4 mt-12 lg:mt-0">

                        {/* Main image */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-lg"
                            style={{ aspectRatio: "4/3" }}
                        >
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img.src}
                                    alt={`Community ${i + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
                                    style={{ opacity: i === current ? 1 : 0 }}
                                />
                            ))}

                            {/* Caption overlay */}
                            <div
                                className="absolute inset-x-0 bottom-0 transition-opacity duration-700"
                                style={{ opacity: images[current].caption ? 1 : 0 }}
                            >
                                <div className="bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10">
                                    <p className="text-white text-sm font-medium leading-snug">
                                        {images[current].caption}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail strip */}
                        <div className="flex gap-2">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className={`flex-1 rounded-lg overflow-hidden transition-all duration-300 ${i === current
                                        ? "ring-2 ring-primary opacity-100"
                                        : "opacity-50 hover:opacity-75"
                                        }`}
                                    style={{ aspectRatio: "4/3" }}
                                >
                                    <img
                                        src={img.src}
                                        alt={`Thumbnail ${i + 1}`}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </button>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
