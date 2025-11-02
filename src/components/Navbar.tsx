import { useState } from "react";
import { Menu, X, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="relative">
              <Droplet className="w-10 h-10 text-primary fill-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Water is Life
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About the Project
            </button>
            <button onClick={() => scrollToSection("why")} className="text-foreground hover:text-primary transition-colors">
              Why It Matters
            </button>
            <button onClick={() => scrollToSection("how")} className="text-foreground hover:text-primary transition-colors">
              How to Give
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors text-left">
              About the Project
            </button>
            <button onClick={() => scrollToSection("why")} className="text-foreground hover:text-primary transition-colors text-left">
              Why It Matters
            </button>
            <button onClick={() => scrollToSection("how")} className="text-foreground hover:text-primary transition-colors text-left">
              How to Give
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
