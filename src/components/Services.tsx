import { Database, Cpu, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: Database,
      title: "Dataset Curation",
      description: "Professional data collection, cleaning, and annotation services. We transform raw data into high-quality training datasets tailored to your specific AI needs.",
      features: ["Data Collection", "Quality Assurance", "Custom Annotation", "Privacy Compliance"],
      color: "blue"
    },
    {
      icon: Cpu,
      title: "Model as a Service",
      description: "Deploy state-of-the-art AI models instantly through our API. No infrastructure management, no ML expertise required.",
      features: ["Pre-trained Models", "Custom Training", "Real-time Inference", "Scalable Infrastructure"],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security and compliance. Your data is encrypted, protected, and handled according to industry standards.",
      features: ["End-to-end Encryption", "SOC 2 Compliant", "GDPR Ready", "Access Controls"],
      color: "cyan"
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Go from concept to production in days, not months. Our streamlined process gets your AI solutions up and running quickly.",
      features: ["Quick Integration", "Auto-scaling", "Monitoring Dashboard", "99.9% Uptime SLA"],
      color: "violet"
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
    blue: { bg: "from-blue-500/10", border: "border-blue-500/30", icon: "text-blue-400", glow: "bg-blue-500/30" },
    purple: { bg: "from-purple-500/10", border: "border-purple-500/30", icon: "text-purple-400", glow: "bg-purple-500/30" },
    cyan: { bg: "from-cyan-500/10", border: "border-cyan-500/30", icon: "text-cyan-400", glow: "bg-cyan-500/30" },
    violet: { bg: "from-violet-500/10", border: "border-violet-500/30", icon: "text-violet-400", glow: "bg-violet-500/30" }
  };

  return (
    <section id="services" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive AI solutions designed to accelerate your innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div key={index} className="relative group">
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${colors.glow} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${colors.bg} to-slate-900/50 backdrop-blur-xl border ${colors.border} rounded-xl p-6 hover:border-opacity-60 transition-all`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center border ${colors.border} relative`}>
                      <service.icon className={`w-6 h-6 ${colors.icon} relative z-10`} />
                      <div className={`absolute inset-0 ${colors.glow} blur-md opacity-50`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className={`w-1.5 h-1.5 ${colors.glow} rounded-full`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}