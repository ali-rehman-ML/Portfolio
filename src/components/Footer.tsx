import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6 border-t border-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <div className="absolute inset-0 w-6 h-6 bg-blue-400 blur-lg opacity-50" />
              </div>
              <span className="text-lg">DataAI Solutions</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with intelligent AI solutions that drive real results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Dataset Curation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Model as a Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Training</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Integration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@dataai.com</span>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 DataAI Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}