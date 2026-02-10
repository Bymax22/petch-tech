"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import IndustriesSection from "./components/sections/IndustriesSection";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import StatsCounter from "./components/sections/StatsCounter";
import CTASection from "./components/sections/CTASection";
import InteractiveServiceSelector from "./components/ui/InteractiveServiceSelector";
import Engineering3DModel from "./components/ui/3DEngineeringModel";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowUp, 
  MessageCircle, 
  Sparkles, 
  Zap,
  Shield,
  Users,
  Target,
  Ruler,
  Wrench,
  Hammer,
  Award,
  Briefcase,
  Globe
} from "lucide-react";

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated background gradients
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.3]);

  return (
    <>
      {/* Animated background (canvas network + grid) */}
      <AnimatedBackground />

      {/* Quick Action Floating Buttons */}
      <div className="fixed right-6 bottom-24 z-40 flex flex-col gap-3">
        {/* WhatsApp Quick Chat */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          href="https://wa.me/260955950008"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="absolute -inset-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-7 h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white animate-pulse" />
          </div>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="text-sm font-medium">Chat on WhatsApp</span>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
          </div>
        </motion.a>

        {/* Quick Quote Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          href="/contact"
          className="group relative"
        >
          <div className="absolute -inset-2 bg-primary rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300">
            <Zap className="w-7 h-7 text-white" />
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100" />
          </div>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="text-sm font-medium">Get Quote</span>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
          </div>
        </motion.a>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20 
        }}
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 z-40 group"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-primary rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300">
            <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
          </div>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="text-sm font-medium">Back to Top</span>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
          </div>
        </div>
      </motion.button>

      {/* Main Content */}
      <div ref={containerRef} className="relative">
        <HeroSection />
        
        {/* Interactive Service Selector Section */}
        <section id="service-selector" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 mb-6"
              >
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Smart Solution Finder
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Find Your Perfect <span className="text-primary">Engineering Solution</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Use our intelligent tool to discover tailored engineering solutions for your specific industrial needs
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
              <InteractiveServiceSelector />
            </div>
          </div>
        </section>

        <ServicesSection />
        <StatsCounter />
        <WhyChooseUs />
        
        {/* 3D Engineering Model Preview */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-accent/5" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
                className={`absolute w-${40 + i * 20} h-${40 + i * 20} rounded-full border ${
                  i % 2 === 0 ? 'border-primary/10' : 'border-accent/10'
                }`}
                style={{
                  left: `${20 + (i * 20)}%`,
                  top: `${30 + (i * 10)}%`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 mb-6"
              >
                <Target className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Interactive Exploration
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Explore Our <span className="text-primary">Engineering Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Interact with detailed models showcasing our technical capabilities and precision engineering
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
              <Engineering3DModel />
            </div>
          </div>
        </section>

        <IndustriesSection />
        <FeaturedProjects />
        
        {/* Capabilities Showcase */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 mb-6"
              >
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Our Capabilities
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Comprehensive <span className="text-primary">Engineering Excellence</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Quality Assurance",
                  description: "ISO 9001 certified processes ensuring exceptional quality standards",
                  color: "from-blue-500/10 to-blue-600/10",
                  stat: "98% Quality"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "18+ specialized engineers with extensive industry experience",
                  color: "from-green-500/10 to-emerald-600/10",
                  stat: "15+ Years Avg."
                },
                {
                  icon: Briefcase,
                  title: "Project Management",
                  description: "Advanced project tracking ensuring on-time and on-budget delivery",
                  color: "from-amber-500/10 to-amber-600/10",
                  stat: "95% On-Time"
                },
                {
                  icon: Globe,
                  title: "Local Expertise",
                  description: "Deep understanding of Zambian industrial landscape and regulations",
                  color: "from-purple-500/10 to-purple-600/10",
                  stat: "100% Local"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-2xl p-8 h-full bg-gradient-to-br ${item.color} hover:shadow-2xl transition-all duration-300`}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold font-heading mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {item.description}
                    </p>

                    {/* Stat */}
                    <div className="text-lg font-bold text-primary">
                      {item.stat}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-primary/20 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
            >
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: "13+", label: "Years of Excellence", description: "Industry experience" },
                  { value: "200+", label: "Projects Delivered", description: "Successful completions" },
                  { value: "18+", label: "Expert Engineers", description: "Specialized professionals" },
                  { value: "100%", label: "Client Satisfaction", description: "Repeat business rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                      {stat.value}
                    </div>
                    <div className="font-medium mb-1">{stat.label}</div>
                    <div className="text-sm opacity-80">{stat.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        
        {/* Process Flow Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Our <span className="text-primary">Proven Process</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From consultation to completion, we follow a structured approach ensuring success at every stage
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
              
              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    step: "01",
                    title: "Consultation & Analysis",
                    description: "Understanding your requirements and project scope through detailed analysis",
                    icon: <Target className="w-8 h-8 text-primary" />
                  },
                  {
                    step: "02",
                    title: "Design & Planning",
                    description: "Developing comprehensive engineering plans and project specifications",
                    icon: <Ruler className="w-8 h-8 text-primary" />
                  },
                  {
                    step: "03",
                    title: "Execution & Implementation",
                    description: "Precision implementation with quality control at every stage",
                    icon: <Wrench className="w-8 h-8 text-primary" />
                  },
                  {
                    step: "04",
                    title: "Support & Maintenance",
                    description: "Ongoing support, maintenance, and performance optimization",
                    icon: <Hammer className="w-8 h-8 text-primary" />
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Phase Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-2xl shadow-lg p-8 border">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">{phase.icon}</div>
                          <div>
                            <div className="text-sm font-medium text-primary uppercase tracking-wider">
                              Step {phase.step}
                            </div>
                            <h4 className="text-xl font-bold font-heading">{phase.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-600">{phase.description}</p>
                      </div>
                    </div>

                    {/* Step Circle */}
                    <div className="hidden md:flex w-1/2 justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                          <span className="text-white font-bold text-lg">{phase.step}</span>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />

        {/* Quick Navigation Menu (Bottom) removed per user request */}
      </div>

      {/* Parallax Scrolling Effects */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #111B73, #0d1559);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0d1559, #090f45);
        }
        
        /* Selection color */
        ::selection {
          background-color: #FFB915;
          color: #000;
        }
        
        /* Better focus styles */
        *:focus {
          outline: 2px solid #FFB915;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}