import { ShoppingCart, HeartPulse, Building2, Car, MessageSquare, Camera } from "lucide-react";

export function UseCases() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Product recommendations, visual search, and demand forecasting",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Medical image analysis, patient diagnosis support, and health monitoring",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Building2,
      title: "Finance",
      description: "Fraud detection, risk assessment, and automated document processing",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Autonomous driving, predictive maintenance, and quality control",
      color: "from-violet-500/20 to-purple-500/20"
    },
    {
      icon: MessageSquare,
      title: "Customer Service",
      description: "Intelligent chatbots, sentiment analysis, and ticket routing",
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: Camera,
      title: "Manufacturing",
      description: "Visual inspection, defect detection, and process optimization",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="use-cases" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Industries We Serve</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our AI solutions power innovation across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all h-full">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-700 relative overflow-hidden group-hover:border-blue-500/50 transition-all">
                  <useCase.icon className="w-6 h-6 text-blue-400 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}