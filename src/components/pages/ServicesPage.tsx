import { Database, Cpu, Shield, Zap, Code, BarChart, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

export function ServicesPage() {
  const services = [
    {
      icon: Database,
      title: "Dataset Curation",
      tagline: "Transform raw data into AI-ready datasets",
      description: "Our expert team handles end-to-end data preparation, ensuring your AI models are trained on high-quality, relevant data.",
      features: [
        "Custom data collection from multiple sources",
        "Advanced data cleaning and preprocessing",
        "Professional annotation and labeling",
        "Quality assurance and validation",
        "GDPR and privacy compliance",
        "Continuous dataset maintenance"
      ],
      color: "blue"
    },
    {
      icon: Cpu,
      title: "Model as a Service",
      tagline: "Deploy AI models instantly via API",
      description: "Access state-of-the-art pre-trained models or deploy custom-trained models through our scalable API infrastructure.",
      features: [
        "Pre-trained models for common use cases",
        "Custom model training and fine-tuning",
        "Real-time inference at scale",
        "Auto-scaling infrastructure",
        "99.9% uptime SLA",
        "Comprehensive API documentation"
      ],
      color: "purple"
    },
    {
      icon: Code,
      title: "Custom AI Development",
      tagline: "Tailored solutions for unique challenges",
      description: "Work with our AI experts to develop custom models and algorithms specifically designed for your business needs.",
      features: [
        "Dedicated AI research team",
        "Custom algorithm development",
        "Model architecture design",
        "Performance optimization",
        "Integration support",
        "Ongoing maintenance and updates"
      ],
      color: "cyan"
    },
    {
      icon: BarChart,
      title: "AI Analytics & Insights",
      tagline: "Turn data into actionable intelligence",
      description: "Advanced analytics and visualization tools to help you understand model performance and extract meaningful insights.",
      features: [
        "Real-time performance dashboards",
        "Custom reporting and analytics",
        "Model performance monitoring",
        "Prediction confidence scoring",
        "A/B testing capabilities",
        "Business intelligence integration"
      ],
      color: "violet"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "We learn about your business goals and AI requirements"
    },
    {
      step: "2",
      title: "Planning",
      description: "Design a custom solution tailored to your needs"
    },
    {
      step: "3",
      title: "Development",
      description: "Build and train models with curated datasets"
    },
    {
      step: "4",
      title: "Deployment",
      description: "Launch your AI solution with full support"
    },
    {
      step: "5",
      title: "Optimization",
      description: "Continuously improve performance and accuracy"
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
    blue: { bg: "from-blue-500/10", border: "border-blue-500/30", icon: "text-blue-400", glow: "bg-blue-500/30" },
    purple: { bg: "from-purple-500/10", border: "border-purple-500/30", icon: "text-purple-400", glow: "bg-purple-500/30" },
    cyan: { bg: "from-cyan-500/10", border: "border-cyan-500/30", icon: "text-cyan-400", glow: "bg-cyan-500/30" },
    violet: { bg: "from-violet-500/10", border: "border-violet-500/30", icon: "text-violet-400", glow: "bg-violet-500/30" }
  };

  return (
    <div className="bg-slate-950 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
            <span className="text-blue-400 text-sm">Our Services</span>
          </div>
          
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Complete AI Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Modern Businesses
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            From data preparation to model deployment, we provide end-to-end AI services 
            that accelerate your innovation and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-12">
            {services.map((service, index) => {
              const colors = colorMap[service.color];
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 ${colors.glow} rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`relative bg-gradient-to-br ${colors.bg} to-slate-900/50 backdrop-blur-xl border ${colors.border} rounded-xl p-8 hover:border-opacity-60 transition-all`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left: Icon and Title */}
                      <div className="lg:col-span-1">
                        <div className={`w-16 h-16 bg-slate-900/50 rounded-xl flex items-center justify-center border ${colors.border} relative mb-4`}>
                          <service.icon className={`w-8 h-8 ${colors.icon} relative z-10`} />
                          <div className={`absolute inset-0 ${colors.glow} blur-md opacity-50`} />
                        </div>
                        <h2 className="text-white mb-2">{service.title}</h2>
                        <p className={`${colors.icon} mb-4`}>{service.tagline}</p>
                        <p className="text-gray-400">{service.description}</p>
                      </div>

                      {/* Right: Features */}
                      <div className="lg:col-span-2">
                        <h3 className="text-white mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-3">
                              <CheckCircle className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                              <span className="text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology for delivering successful AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}
                
                <div className="relative bg-slate-950/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-4 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can transform your business. 
            Schedule a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
