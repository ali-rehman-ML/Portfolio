import { Users, Target, Award, Zap, TrendingUp, Globe } from "lucide-react";

export function AboutPage() {
  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "50M+", label: "Data Points Processed" },
    { value: "24/7", label: "Global Support" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize AI technology and make it accessible to businesses of all sizes through innovative dataset curation and model-as-a-service solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in data quality, model accuracy, and service delivery to ensure your AI initiatives succeed."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with AI, staying ahead of industry trends and technological advancements."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Serving clients worldwide with scalable solutions that drive real business value and competitive advantage."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning & Neural Networks"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Data Engineering",
      expertise: "Big Data & Infrastructure"
    },
    {
      name: "Aisha Patel",
      role: "VP of Product",
      expertise: "AI Product Strategy"
    },
    {
      name: "James Wilson",
      role: "Lead Data Scientist",
      expertise: "Computer Vision & NLP"
    }
  ];

  return (
    <div className="bg-slate-950 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/30">
            <span className="text-blue-400 text-sm">About DataAI Solutions</span>
          </div>
          
          <h1 className="text-white mb-6 max-w-4xl mx-auto">
            Pioneering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI Innovation
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
            Founded in 2020, DataAI Solutions has been at the forefront of making enterprise-grade 
            AI accessible to businesses worldwide through cutting-edge dataset curation and 
            model-as-a-service platforms.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
                  <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-slate-950/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center border border-blue-500/30 relative">
                      <value.icon className="w-6 h-6 text-blue-400 relative z-10" />
                      <div className="absolute inset-0 bg-blue-500/30 blur-md opacity-50" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-3">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry experts dedicated to advancing AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-4 border border-blue-500/30 flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-8 text-center">Our Story</h2>
          
          <div className="space-y-6 text-gray-400">
            <p className="text-lg">
              DataAI Solutions was founded with a simple yet powerful vision: to make enterprise-grade 
              AI technology accessible to organizations of all sizes. What started as a small team of 
              data scientists and engineers has grown into a leading provider of AI dataset curation 
              and model-as-a-service solutions.
            </p>
            
            <p className="text-lg">
              Our journey began when we recognized that many businesses struggled with the complexity 
              and cost of implementing AI solutions. We set out to change that by creating a platform 
              that handles the heavy lifting—from data preparation to model deployment—allowing our 
              clients to focus on innovation and growth.
            </p>
            
            <p className="text-lg">
              Today, we're proud to serve over 500 enterprise clients across healthcare, finance, 
              e-commerce, and manufacturing industries. Our commitment to excellence, innovation, and 
              customer success continues to drive everything we do.
            </p>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/30 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-white">Looking Ahead</h3>
            </div>
            <p className="text-gray-400">
              As we continue to grow, our mission remains unchanged: to empower businesses with 
              intelligent AI solutions that drive real results. We're constantly investing in 
              research and development, expanding our capabilities, and building partnerships to 
              stay at the forefront of AI innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
