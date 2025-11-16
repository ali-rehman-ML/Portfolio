import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@dataai.com",
      subdetails: "support@dataai.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subdetails: "+1 (555) 123-4568"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 AI Innovation Street",
      subdetails: "San Francisco, CA 94102"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM PST",
      subdetails: "24/7 Support Available"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 AI Innovation Street, CA 94102",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "New York",
      address: "456 Tech Avenue, NY 10001",
      phone: "+1 (555) 234-5678"
    },
    {
      city: "London",
      address: "789 Digital Square, London EC1A 1BB",
      phone: "+44 20 1234 5678"
    }
  ];

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
            <span className="text-blue-400 text-sm">Get in Touch</span>
          </div>
          
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Let's Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Conversation
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Have questions about our AI solutions? Our team is here to help you 
            find the perfect solution for your business needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mx-auto mb-4 border border-blue-500/30 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white mb-2">{info.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{info.details}</p>
                  <p className="text-gray-500 text-sm">{info.subdetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-white mb-4">Send Us a Message</h2>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="John"
                      className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Doe"
                      className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com"
                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Company Name</label>
                  <Input 
                    type="text" 
                    placeholder="Your Company"
                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <Textarea 
                    rows={5}
                    placeholder="Tell us about your project and requirements..."
                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="text-white mb-4">Our Offices</h2>
                <p className="text-gray-400">
                  Visit us at any of our global locations or schedule a virtual meeting.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div 
                    key={index}
                    className="relative bg-slate-950/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all"
                  >
                    <h3 className="text-white mb-3">{office.city}</h3>
                    <div className="space-y-2 text-gray-400 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* FAQ Section */}
                <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 rounded-xl p-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Quick Questions?</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Check out our FAQ section or chat with our support team for immediate assistance.
                      </p>
                      <Button 
                        variant="outline"
                        className="bg-transparent border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
                      >
                        View FAQ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest AI insights, product updates, and industry news.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/50"
            />
            <Button className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
