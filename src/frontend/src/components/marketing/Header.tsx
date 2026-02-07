import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onRequestDemo: () => void;
}

export default function Header({ onRequestDemo }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Solutions', sectionId: 'solutions' },
    { label: 'Industries', sectionId: 'industries' },
    { label: 'How It Works', sectionId: 'how-it-works' },
    { label: 'About', sectionId: 'about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Softevia
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 rounded-lg gradient-primary text-white font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-left text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onRequestDemo();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 px-6 py-3 rounded-lg gradient-primary text-white font-semibold text-center"
              >
                Request a Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
