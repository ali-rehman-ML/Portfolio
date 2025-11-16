import { Button } from "./ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-blue-500/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <div className="relative">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <div className="absolute inset-0 w-8 h-8 bg-blue-400 blur-xl opacity-50" />
          </div>
          <span className="text-xl">DataAI Solutions</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`hover:text-blue-400 transition-colors ${
                currentPage === item.id ? "text-blue-400" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button 
            onClick={() => handleNavigate("contact")}
            className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/10 py-4">
          <div className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-left py-2 hover:text-blue-400 transition-colors ${
                  currentPage === item.id ? "text-blue-400" : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavigate("contact")}
              className="bg-blue-600 hover:bg-blue-500 text-white w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
