import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-white mb-6">Ready to Transform Your Business with AI?</h2>
        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
          Join leading companies using our AI solutions to drive growth and innovation. 
          Get started today with a free consultation.
        </p>

        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
          
          {/* Form Card */}
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-xl p-8 shadow-2xl max-w-2xl mx-auto border border-blue-500/30">
            <h3 className="mb-6 text-white">Get Your Free AI Strategy Session</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50" 
                />
                <Input 
                  type="email" 
                  placeholder="Work Email" 
                  className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50" 
                />
              </div>
              <Input 
                type="text" 
                placeholder="Company Name" 
                className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50" 
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50" 
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all" size="lg">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              No credit card required. 30-minute session with our AI experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}