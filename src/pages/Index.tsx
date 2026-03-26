import { Navbar } from "@src/components/Navbar";
import { HeroSection } from "@src/components/HeroSection";
import { StatsSection } from "@src/components/StatsSection";
import { MissionSection } from "@src/components/MissionSection";
import { StandForSection } from "@src/components/StandForSection";
import { PartnersSection } from "@src/components/PartnersSection";
import { CtaSection } from "@src/components/CtaSection";
import { Footer } from "@src/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection />
                <StatsSection />
                <MissionSection />
                <StandForSection />
                <PartnersSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
