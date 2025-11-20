import logo from "@/assets/urai-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={logo} alt="URAI" className="h-8 w-auto" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 URAI - Universität Regensburg AI Initiative
          </p>
          
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by students, for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
