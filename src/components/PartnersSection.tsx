import hetznerLogo from "@src/assets/sponsors/hetzner-logo.png";
import ratisbonaCodingLogo from "@src/assets/sponsors/ratisbona-coding.png";

export function PartnersSection() {
    return (
        <section className="py-32 bg-background overflow-hidden relative">
            <div className="container max-w-5xl text-center mb-20">
                <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Network</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
                    Supported by Industry & Academia
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We collaborate with leading companies and research institutions to bridge the gap between theoretical study and real-world application.
                </p>
            </div>

            {/* Sponsor Logos */}
            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 pb-8 px-4">
                <img
                    src={hetznerLogo}
                    alt="Hetzner, Official Sponsor"
                    className="h-10 sm:h-14 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 object-contain"
                />
                <img
                    src={ratisbonaCodingLogo}
                    alt="Ratisbona Coding, Official Sponsor"
                    className="h-10 sm:h-14 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 object-contain"
                />
            </div>
        </section>
    );
}
