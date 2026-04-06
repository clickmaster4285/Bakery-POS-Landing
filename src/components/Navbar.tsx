import { useState } from "react";
import { Menu, X, Croissant } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Testimonials", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-2">
          <Croissant className="h-8 w-8 text-gold" />
          <span className="font-display text-xl font-bold text-foreground">BakePOS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm !py-2.5 !px-6">Get Started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              {l}
            </a>
          ))}
          <a href="#contact" className="btn-primary block text-center text-sm !py-2.5">Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
