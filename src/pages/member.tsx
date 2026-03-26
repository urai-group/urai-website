import { Navbar } from "@src/components/Navbar";
import { Footer } from "@src/components/Footer";
import { Button } from "@src/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@src/components/ui/accordion";
import logo from "@src/assets/logo.png";

const faqItems = [
    {
        num: "01",
        title: "Who can join URAI?",
        content: "We welcome students from all faculties. Whether you study computer science, business, or humanities – if you are passionate about Artificial Intelligence, you are a perfect fit for our community."
    },
    {
        num: "02",
        title: "Do I need prior coding experience?",
        content: "Not at all! While coding experience is helpful for our technical divisions, we also have opportunities in project management, design, and marketing."
    },
    {
        num: "03",
        title: "How much time do I need to invest?",
        content: "Most members dedicate about 2-4 hours per week depending on their active project involvement. We are highly flexible and understand that university exams and personal schedules always come first."
    },
    {
        num: "04",
        title: "When is the next recruitment phase?",
        content: "We actively recruit at the beginning of each semester. However, you can apply anytime. If applications are currently closed, we will keep your details and notify you as soon as the next phase starts."
    },
];

const MemberPage = () => {
    const applicationClosed = false;

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-24">
                <div className="container max-w-6xl mx-auto px-6">

                    {/* Top Section */}
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                        <div className="flex flex-col items-start gap-8">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                                Join us
                            </h1>
                            {applicationClosed ? (
                                <Button size="lg" variant="secondary" disabled className="w-full sm:w-auto text-lg px-8 py-6">
                                    Application closed
                                </Button>
                            ) : (
                                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6" onClick={() => window.open("https://forms.urai-group.org/s/cmn7bkkqk0004pg011gilqs28", "_blank", "noopener,noreferrer")}>
                                    Apply Now
                                </Button>
                            )}
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img src={logo} alt="URAI Logo" className="w-64 max-w-full h-auto opacity-90" />
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight">
                            Frequently Asked Questions:
                        </h2>

                        <Accordion type="single" collapsible defaultValue="item-0" className="w-full border-t border-border mt-4">
                            {faqItems.map((item, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`item-${idx}`}
                                    className="group data-[state=open]:bg-muted/30 hover:bg-muted/10 transition-all duration-300"
                                >
                                    <AccordionTrigger className="hover:no-underline py-6 px-4 [&[data-state=open]>svg]:text-primary">
                                        <div className="flex items-center gap-6 text-left">
                                            <span className="text-muted-foreground/40 font-mono text-sm font-semibold mt-1">
                                                {item.num}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold transition-colors text-foreground group-hover:text-primary group-data-[state=open]:text-primary">
                                                {item.title}
                                            </h3>
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
            </main>

            <Footer />
        </div>
    );
};

export default MemberPage;
