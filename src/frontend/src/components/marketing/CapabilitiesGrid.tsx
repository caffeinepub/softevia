import { Brain, Users, Target, TrendingUp, Database, Globe } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'AI-Powered Business Insights',
    description: 'Leverage advanced machine learning algorithms to uncover hidden patterns, trends, and opportunities in your market data. Our AI analyzes millions of data points to deliver actionable intelligence that drives strategic decisions.'
  },
  {
    icon: Users,
    title: 'Customer Insights Analytics',
    description: 'Understand your customers deeply with behavioral analytics, sentiment analysis, and predictive modeling. Track customer preferences, buying patterns, and satisfaction across European markets in real-time.'
  },
  {
    icon: Target,
    title: 'Competitor Benchmarking Services',
    description: 'Monitor competitor activities, pricing strategies, and market positioning automatically. Our technology tracks competitive movements across multiple channels and provides comparative analysis to identify your strategic advantages.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics Solutions',
    description: 'Forecast market trends, demand patterns, and business outcomes with advanced predictive models. Our predictive analytics company uses historical data and AI to help you anticipate changes and plan proactively.'
  },
  {
    icon: Database,
    title: 'Business Intelligence Solutions',
    description: 'Transform raw data into comprehensive business intelligence with automated reporting, KPI tracking, and interactive dashboards. Access unified insights across all your European operations from a single platform.'
  },
  {
    icon: Globe,
    title: 'Digital Market Intelligence Platform',
    description: 'Our comprehensive digital market intelligence platform integrates data from multiple sources, providing a 360-degree view of your markets. Scale effortlessly across countries with consistent methodology and real-time updates.'
  }
];

export default function CapabilitiesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {capabilities.map((capability, index) => {
        const Icon = capability.icon;
        return (
          <div
            key={index}
            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm group"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
          </div>
        );
      })}
    </div>
  );
}
