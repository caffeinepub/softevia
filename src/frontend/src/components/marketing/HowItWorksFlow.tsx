import { Database, Cpu, LineChart, BarChart3, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'Data Aggregation',
    description: 'Automated collection from European data sources including market databases, public records, industry reports, and digital channels across multiple countries.'
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description: 'Machine learning analysis using natural language processing, sentiment analysis, and pattern recognition to extract meaningful insights from raw data.'
  },
  {
    icon: LineChart,
    title: 'Predictive Modeling',
    description: 'Advanced forecasting algorithms analyze historical trends and current patterns to predict future market movements and business outcomes.'
  },
  {
    icon: BarChart3,
    title: 'Interactive Dashboards',
    description: 'Real-time visualization through customizable dashboards with drill-down capabilities, KPI tracking, and automated reporting for all stakeholders.'
  },
  {
    icon: Lightbulb,
    title: 'Strategic Insights',
    description: 'AI-generated recommendations for leadership teams with actionable intelligence, risk assessments, and opportunity identification for strategic planning.'
  }
];

export default function HowItWorksFlow() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-glow-md z-10 relative">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
