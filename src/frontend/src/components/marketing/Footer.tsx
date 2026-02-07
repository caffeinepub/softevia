import { Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Softevia
            </h3>
            <p className="text-muted-foreground">
              AI-powered market research technology for smarter decisions across European markets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('industries')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get Started</h4>
            <p className="text-muted-foreground">
              Ready to transform your market research with AI technology?
            </p>
            <button
              onClick={() => scrollToSection('cta')}
              className="px-6 py-3 rounded-lg gradient-primary text-white font-semibold inline-block"
            >
              Request a Demo
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2026. Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
