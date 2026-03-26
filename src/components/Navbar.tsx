import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@src/components/ui/button";
import logo from "@src/assets/logo.png";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md border-b border-border">
            <div className="container flex items-center justify-between h-16">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="URAI Logo" className="h-8 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Button variant="outline" size="sm" className="rounded-full px-5 border-foreground/20 hover:bg-foreground/5 bg-transparent" asChild>
                        <Link to="/member">Become a Member</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="md:hidden bg-background border-b border-border pb-4">
                    <div className="container flex flex-col gap-3">
                        <Button variant="outline" size="sm" className="w-fit rounded-full px-5 border-foreground/20 hover:bg-foreground/5 bg-transparent" asChild>
                            <Link to="/member" onClick={() => setOpen(false)}>
                                Become a Member
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
