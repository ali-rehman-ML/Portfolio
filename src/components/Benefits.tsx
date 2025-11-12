import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Accelerate Innovation",
      description: "Launch AI-powered features faster with pre-trained models and curated datasets",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Save Time & Resources",
      description: "Eliminate months of data preparation and model training with our ready-to-use solutions",
      color: "purple"
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Pay only for what you use. No expensive infrastructure or dedicated ML team required",
      color: "cyan"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Access to AI specialists who understand your business needs and technical requirements",
      color: "violet"
    }
  ];

  const colorMap: Record<string, { border: string; icon: string; glow: string }> = {
    blue: { border: "border-blue-500/30", icon: "text-blue-400", glow: "bg-blue-500/30" },
    purple: { border: "border-purple-500/30", icon: "text-purple-400", glow: "bg-purple-500/30" },
    cyan: { border: "border-cyan-500/30", icon: "text-cyan-400", glow: "bg-cyan-500/30" },
    violet: { border: "border-violet-500/30", icon: "text-violet-400", glow: "bg-violet-500/30" }
  };

  return (
    <section id="benefits" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Futuristic Widget Display */}
          <div className="relative">
            {/* Main Display Card */}
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75" />
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150" />
              </div>
              
              <div className="space-y-4 mt-8">
                {/* Metric Bars */}
                {[
                  { label: "Processing Speed", value: 95, color: "bg-blue-500" },
                  { label: "Model Accuracy", value: 99, color: "bg-purple-500" },
                  { label: "Cost Efficiency", value: 87, color: "bg-cyan-500" }
                ].map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className="text-white">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${metric.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.5)] border border-blue-400/50 max-w-xs">
              <div className="text-3xl text-white mb-2">5x Faster</div>
              <div className="text-blue-100 text-sm">Time to market compared to building in-house</div>
            </div>
          </div>

          {/* Right: Benefits */}
          <div>
            <h2 className="mb-6 text-white">Why Choose DataAI Solutions</h2>
            <p className="text-gray-400 text-lg mb-10">
              We handle the complexity of AI so you can focus on what matters most—growing your business.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const colors = colorMap[benefit.color];
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className={`flex-shrink-0 w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center border ${colors.border} relative`}>
                      <benefit.icon className={`w-6 h-6 ${colors.icon} relative z-10`} />
                      <div className={`absolute inset-0 ${colors.glow} blur-md opacity-0 group-hover:opacity-50 transition-opacity`} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-white">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}