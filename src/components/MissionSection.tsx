import one from "@src/assets/slideshow/one.jpeg";
import two from "@src/assets/slideshow/two.jpeg";
import three from "@src/assets/slideshow/three.jpeg";
import four from "@src/assets/slideshow/four.jpeg";


export function MissionSection() {
    return (
        <section className="py-32 bg-background overflow-hidden relative">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content instead of Tiles */}
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

                    {/* Right: Prominent Masonry Image Gallery */}
                    <div className="grid grid-cols-2 gap-4 h-[500px] sm:h-[600px] mt-12 lg:mt-0">
                        <div className="space-y-4">
                            <div className="rounded-3xl overflow-hidden h-2/3 shadow-sm hover:shadow-md transition-shadow group">
                                <img
                                    src={one}
                                    alt="Community"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="rounded-3xl overflow-hidden h-1/3 shadow-sm hover:shadow-md transition-shadow group">
                                <img
                                    src={two}
                                    alt="Partners"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="rounded-3xl overflow-hidden h-1/3 shadow-sm hover:shadow-md transition-shadow group">
                                <img
                                    src={three}
                                    alt="Event"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="rounded-3xl overflow-hidden h-2/3 shadow-sm hover:shadow-md transition-shadow group">
                                <img
                                    src={four}
                                    alt="Community working"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
}
