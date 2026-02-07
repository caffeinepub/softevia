import { useState } from 'react';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';
import CapabilitiesGrid from '../components/marketing/CapabilitiesGrid';
import IndustriesGrid from '../components/marketing/IndustriesGrid';
import HowItWorksFlow from '../components/marketing/HowItWorksFlow';
import LeadCaptureDialog from '../components/leads/LeadCaptureDialog';
import { CheckCircle2, TrendingUp, Globe, Zap, BarChart3 } from 'lucide-react';

export default function SofteviaLandingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogIntent, setDialogIntent] = useState<'demo' | 'expert'>('demo');

  const openDialog = (intent: 'demo' | 'expert') => {
    setDialogIntent(intent);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onRequestDemo={() => openDialog('demo')} />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  AI-Powered Market Intelligence
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Market Research Technology in Europe
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                AI-Powered Market Research Technology for Smarter Decisions
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Softevia delivers AI market research and predictive analytics solutions that help European businesses gain competitive advantage using a digital market intelligence platform. Our technology enables organizations to make faster, smarter, data-driven decisions across diverse European markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openDialog('demo')}
                  className="px-8 py-4 rounded-lg gradient-primary text-white font-semibold text-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                >
                  Request a Demo
                </button>
                <button
                  onClick={() => openDialog('expert')}
                  className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/5 transition-all duration-300"
                >
                  Speak with an Expert
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src="/assets/generated/softevia-hero-illustration.dim_1400x900.png"
                alt="AI-powered market research technology visualization with European data analytics and business intelligence dashboard"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section id="evolution" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              The Evolution of Market Research Technology in Europe
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Traditional market research methods are slow, manual, and outdated. They rely on lengthy surveys, delayed reporting, and limited data sources that can't keep pace with today's fast-moving European markets.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Softevia provides AI-driven, automated, real-time market intelligence across European markets. Our market research technology eliminates manual processes, delivers instant insights, and scales effortlessly across multiple countries and industries. We're not a traditional survey-based research agency—we're a technology provider built on AI, automation, and advanced analytics.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                About Softevia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Softevia is a market research technology company built on AI, automation, and advanced analytics. We provide scalable, real-time, data-driven market research solutions for enterprises, startups, and B2B organizations across Europe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our digital market intelligence platform combines AI-powered business insights with predictive analytics solutions to deliver actionable intelligence that drives strategic decision-making. We help organizations understand their markets, customers, and competitors with unprecedented speed and accuracy.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-3xl font-bold">Real-Time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Market Intelligence</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Globe className="w-6 h-6" />
                    <span className="text-3xl font-bold">Pan-European</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Coverage</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <BarChart3 className="w-6 h-6" />
                    <span className="text-3xl font-bold">AI-Driven</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Analytics</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Zap className="w-6 h-6" />
                    <span className="text-3xl font-bold">Automated</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Data Collection</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/softevia-dashboard-mockup.dim_1600x1000.png"
                alt="Softevia digital market intelligence platform dashboard showing real-time analytics, KPIs, and European market data visualization"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="solutions" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Solutions & Capabilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive market research technology solutions powered by AI and advanced analytics
            </p>
          </div>
          <CapabilitiesGrid />
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              Why Choose Softevia
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'AI-powered intelligence instead of manual research',
                  description: 'Leverage machine learning and natural language processing to analyze vast amounts of data automatically, eliminating slow manual research processes.'
                },
                {
                  title: 'Real-time insights across European markets',
                  description: 'Access up-to-the-minute market intelligence across all major European markets with continuous data monitoring and instant reporting.'
                },
                {
                  title: 'Automated data collection and analysis',
                  description: 'Our platform automatically aggregates, cleanses, and analyzes data from multiple sources, saving weeks of manual work.'
                },
                {
                  title: 'Scalable for multi-country operations',
                  description: 'Seamlessly expand your market research across multiple European countries with consistent methodology and unified reporting.'
                },
                {
                  title: 'Actionable insights for decision-makers',
                  description: 'Transform raw data into strategic recommendations with AI-powered analysis that highlights opportunities and risks.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Industries Served in Europe
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering market intelligence services across diverse sectors
            </p>
          </div>
          <IndustriesGrid />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              How the Technology Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered process transforms raw data into strategic business intelligence
            </p>
          </div>
          <HowItWorksFlow />
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Gain a Competitive Advantage with AI-Powered Market Research Technology
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join leading European organizations using Softevia's market research technology to make faster, smarter decisions. Our AI-powered business insights, customer insights analytics, and competitor benchmarking services deliver the intelligence you need to stay ahead in today's dynamic markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={() => openDialog('demo')}
                className="px-8 py-4 rounded-lg gradient-primary text-white font-semibold text-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
              >
                Request a Demo
              </button>
              <button
                onClick={() => openDialog('expert')}
                className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/5 transition-all duration-300"
              >
                Speak with an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <LeadCaptureDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        defaultIntent={dialogIntent}
      />
    </div>
  );
}
