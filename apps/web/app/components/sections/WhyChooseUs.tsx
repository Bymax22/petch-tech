"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Clock, 
  Shield, 
  Users, 
  Zap, 
  TrendingUp, 
  Headphones, 
  Building2,
  Sparkles,
  Target,
  CheckCircle,
  BarChart3,
  Globe,
  HeartHandshake,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "13+ years of successful project delivery across Zambia's key industrial sectors with 98% client satisfaction rate.",
    stats: "200+ Projects",
    color: "from-blue-500/20 to-blue-600/20",
    details: [
      "Successful delivery in mining, petroleum, and manufacturing",
      "Repeat business from 80% of clients",
      "ISO 9001 certified quality management",
      "On-time project completion record"
    ]
  },
  {
    icon: Users,
    title: "Expert Engineering Team",
    description: "18+ highly skilled professionals with an average of 15 years experience in industrial projects.",
    stats: "18+ Experts",
    color: "from-green-500/20 to-emerald-600/20",
    details: [
      "Degree-qualified engineers and technicians",
      "Specialized industry certifications",
      "Continuous training and development",
      "Multidisciplinary project teams"
    ]
  },
  {
    icon: Shield,
    title: "Safety First Approach",
    description: "Zero-harm policy with stringent HSEQ protocols ensuring 100% safety compliance.",
    stats: "Zero Incidents",
    color: "from-red-500/20 to-red-600/20",
    details: [
      "OSHA-compliant safety standards",
      "Regular safety audits and training",
      "Personal protective equipment (PPE)",
      "Emergency response protocols"
    ]
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    description: "Efficient project management ensuring 95% on-time completion rate across all projects.",
    stats: "95% On-Time",
    color: "from-amber-500/20 to-amber-600/20",
    details: [
      "Advanced project planning tools",
      "Real-time progress tracking",
      "Risk mitigation strategies",
      "Efficient resource allocation"
    ]
  },
  {
    icon: Zap,
    title: "Modern Equipment",
    description: "State-of-the-art machinery and tools for precision engineering and maximum efficiency.",
    stats: "Latest Technology",
    color: "from-purple-500/20 to-purple-600/20",
    details: [
      "CNC machining equipment",
      "Advanced testing instruments",
      "CAD/CAM software suite",
      "Digital project management tools"
    ]
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Solutions",
    description: "Optimized processes that reduce operational costs by 25% on average without compromising quality.",
    stats: "25% Cost Saving",
    color: "from-cyan-500/20 to-cyan-600/20",
    details: [
      "Value engineering approach",
      "Efficient resource utilization",
      "Competitive pricing models",
      "Long-term cost optimization"
    ]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock maintenance, emergency response, and technical support services.",
    stats: "Always Available",
    color: "from-pink-500/20 to-pink-600/20",
    details: [
      "24/7 emergency hotline",
      "Rapid response teams",
      "Preventive maintenance programs",
      "Remote troubleshooting support"
    ]
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Deep understanding of Zambian industrial requirements, regulations, and market dynamics.",
    stats: "Zambia-Focused",
    color: "from-indigo-500/20 to-indigo-600/20",
    details: [
      "Knowledge of local regulations",
      "Strong supplier network",
      "Cultural understanding",
      "Regional experience"
    ]
  },
];

export default function WhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
            className={`absolute w-${24 + i * 8} h-${24 + i * 8} rounded-full ${
              i % 2 === 0 ? 'bg-primary/5' : 'bg-accent/5'
            } blur-3xl`}
            style={{
              left: `${10 + (i * 25)}%`,
              top: `${20 + (i * 15)}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Advantages
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Why <span className="text-primary">Industry Leaders</span> Choose Us
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise, innovative solutions, and unwavering commitment 
            to deliver exceptional engineering services across Zambia.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              className="group cursor-pointer"
            >
              {/* Feature Card */}
              <div className={`relative overflow-hidden rounded-2xl h-full transition-all duration-500 ${
                selectedFeature === index 
                  ? "ring-2 ring-primary shadow-2xl" 
                  : "hover:shadow-xl hover:-translate-y-1"
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-30`} />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${
                  hoveredFeature === index ? "border-primary/30" : ""
                }`} />

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-primary uppercase tracking-wider">
                        {feature.stats}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 mb-6">
                    <h3 className="text-xl font-bold font-heading mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Footer with CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-primary">
                      {selectedFeature === index ? "Hide Details" : "Learn More"}
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
                      selectedFeature === index 
                        ? "rotate-45 bg-accent" 
                        : "group-hover:translate-x-1"
                    }`}>
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Indicator */}
                {hoveredFeature === index && !selectedFeature && (
                  <motion.div
                    layoutId="featureIndicator"
                    className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent"
                  />
                )}
              </div>

              {/* Selected Feature Details Overlay */}
              <AnimatePresence>
                {selectedFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 bg-white rounded-xl shadow-lg p-6 border"
                  >
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Key Highlights
                    </h4>
                    <div className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <button className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        Request Case Study
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-12">
              {[
                { 
                  value: "13+", 
                  label: "Years of Excellence", 
                  icon: Award,
                  color: "text-accent"
                },
                { 
                  value: "200+", 
                  label: "Successful Projects", 
                  icon: BarChart3,
                  color: "text-white"
                },
                { 
                  value: "18+", 
                  label: "Expert Engineers", 
                  icon: Users,
                  color: "text-white"
                },
                { 
                  value: "100%", 
                  label: "Client Satisfaction", 
                  icon: HeartHandshake,
                  color: "text-accent"
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/90 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Progress Bars */}
            <div className="px-8 md:px-12 pb-8 md:pb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between text-white text-sm mb-2">
                    <span>Project Success Rate</span>
                    <span>98%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white text-sm mb-2">
                    <span>On-Time Delivery</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-green-500 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white text-sm mb-2">
                    <span>Safety Compliance</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-6">
                Ready to Experience Excellence?
              </h3>
              <p className="text-gray-600 mb-8">
                Join the 200+ satisfied clients who trust us with their engineering needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Start Your Project
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/5 transition-colors">
                  Download Company Profile
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}