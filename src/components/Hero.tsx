import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 border-b border-blue-500/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <div className="absolute inset-0 w-8 h-8 bg-blue-400 blur-xl opacity-50" />
            </div>
            <span className="text-xl">DataAI Solutions</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-gray-400">
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="hover:text-blue-400 transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="hover:text-blue-400 transition-colors"
            >
              Use Cases
            </button>
            <Button className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <span className="text-blue-400 text-sm">
            Enterprise AI Solutions
          </span>
        </div>

        <h1 className="text-white mb-6 max-w-4xl mx-auto">
          Transform Your Data Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Intelligent Solutions
          </span>
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
          Expert AI dataset curation and model-as-a-service
          solutions that power your business forward. Deploy
          production-ready AI models without the complexity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all"
            onClick={() => scrollToSection("services")}
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
            onClick={() => onNavigate("contact")}
          >
            Schedule a Demo
          </Button>
        </div>

        {/* Futuristic Stats Widget */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: "99.9%", label: "Model Accuracy" },
            { value: "50M+", label: "Data Points Curated" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
                <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
}