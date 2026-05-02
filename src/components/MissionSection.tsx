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

                    {/* Right: Masonry Image Gallery – real aspect ratios */}
                    {/* one=4:3, two=3:2, three=3:4(portrait), four=3:2 */}
                    <div className="flex gap-4 mt-12 lg:mt-0 items-start">

                        {/* Left column: image one (landscape 4:3) + image three (portrait 3:4) */}
                        <div className="flex flex-col gap-4" style={{ flex: "0 0 55%" }}>
                            {/* Image 1 – 4:3 landscape, full outdoor group */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                                style={{ aspectRatio: "4/3" }}>
                                <img
                                    src={one}
                                    alt="Community"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Image 3 – cropped to 4:3, shows people + building */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                                style={{ aspectRatio: "4/3" }}>
                                <img
                                    src={three}
                                    alt="Event building"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Right column: image two + image four – same size, offset down */}
                        <div className="flex flex-col gap-4 mt-12" style={{ flex: "0 0 42%" }}>
                            {/* Image 2 – group indoors */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                                style={{ aspectRatio: "4/3" }}>
                                <img
                                    src={two}
                                    alt="Partners"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Image 4 – event crowd */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                                style={{ aspectRatio: "4/3" }}>
                                <img
                                    src={four}
                                    alt="Community event"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </section>
    );
}
