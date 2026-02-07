import { Code, DollarSign, ShoppingCart, Heart, Factory, Briefcase } from 'lucide-react';

const industries = [
  {
    icon: Code,
    title: 'Technology & SaaS',
    description: 'Market intelligence for software companies, tech startups, and digital platforms'
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    description: 'Analytics for banks, fintech, insurance, and investment firms'
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Consumer insights and competitive intelligence for retail businesses'
  },
  {
    icon: Heart,
    title: 'Healthcare & Pharmaceuticals',
    description: 'Market research for healthcare providers, pharma, and medical devices'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industrial market intelligence and supply chain analytics'
  },
  {
    icon: Briefcase,
    title: 'B2B Professional Services',
    description: 'Market insights for consulting, legal, and professional service firms'
  }
];

export default function IndustriesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        return (
          <div
            key={index}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
