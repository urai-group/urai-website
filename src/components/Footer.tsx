import logo from "@/assets/urai-logo.png";
import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">

          {/* Logo */}
          <div className="flex flex-col gap-4 w-full lg:w-auto items-start">
            <img src={logo} alt="URAI" className="h-10 w-auto object-contain" />
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-auto">
            <NewsletterForm />
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 text-sm text-muted-foreground w-full lg:w-auto">

            {/* CONNECT */}
            <div className="flex flex-col gap-2">
              <h4 className="uppercase tracking-wider text-xs text-foreground">Connect</h4>
              <a href="https://www.linkedin.com/company/urai-group/"   target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
              <a href="https://www.instagram.com/urai_group"  className="hover:text-primary" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col gap-2">
              <h4 className="uppercase tracking-wider text-xs text-foreground">Legal</h4>
              <Link to="/impressum" className="hover:text-primary">Impressum</Link>
              <Link to="/privacy" className="hover:text-primary">Data Privacy</Link>
            </div>

            {/* CONTRIBUTE */}
            <div className="flex flex-col gap-2">
              <h4 className="uppercase tracking-wider text-xs text-foreground">Contribute</h4>
              <a href="https://github.com/urai-group" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
            </div>

          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-6 text-sm text-muted-foreground">
          © 2025 URAI – University of Regensburg Artificial Intelligence
        </div>

      </div>
    </footer>
  );
};

export default Footer;
