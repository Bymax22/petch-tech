"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building, 
  Cpu, 
  Factory, 
  Hammer, 
  PlugZap, 
  Settings, 
  Wrench,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "civil",
    title: "Civil Works",
    description: "Structural engineering, construction, and infrastructure development for industrial facilities.",
    icon: Building,
    image: "/civil.webp",
    features: [
      "Structural Design & Analysis",
      "Construction Management",
      "Foundation Engineering",
      "Industrial Building Construction",
    ],
    color: "from-blue-500/20 to-blue-600/20",
    stats: "50+ Projects"
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    description: "Machinery design, fabrication, installation, and maintenance for industrial applications.",
    icon: Settings,
    image: "/eng.jpg",
    features: [
      "Machine Design & Fabrication",
      "Equipment Installation",
      "Preventive Maintenance",
      "Performance Optimization",
    ],
    color: "from-orange-500/20 to-red-500/20",
    stats: "40+ Installations"
  },
  {
    id: "electrical",
    title: "Electrical & Automation",
    description: "Power systems, control panels, and industrial automation solutions.",
    icon: PlugZap,
    image: "/i3.jpg",
    features: [
      "Power Distribution Systems",
      "Motor Control Centers",
      "PLC & SCADA Programming",
      "Energy Management",
    ],
    color: "from-yellow-500/20 to-amber-500/20",
    stats: "30+ Systems"
  },
  {
    id: "instrumentation",
    title: "Instrumentation",
    description: "Process control systems, sensors, and measurement devices for precise operations.",
    icon: Cpu,
    image: "/s6.jpg",
    features: [
      "Sensor Installation & Calibration",
      "Control System Design",
      "Safety Instrumented Systems",
      "Process Optimization",
    ],
    color: "from-purple-500/20 to-pink-500/20",
    stats: "25+ Plants"
  },
  {
    id: "fabrication",
    title: "Fabrication & Machining",
    description: "Custom metal fabrication, welding, and precision machining services.",
    icon: Wrench,
    image: "/s5.jpg",
    features: [
      "Custom Metal Fabrication",
      "Precision Machining",
      "Welding & Assembly",
      "Quality Inspection",
    ],
    color: "from-gray-500/20 to-slate-500/20",
    stats: "1000+ Components"
  },
  {
    id: "repairs",
    title: "Industrial Repairs",
    description: "Emergency repairs, refurbishment, and preventive maintenance services.",
    icon: Hammer,
    image: "/mining-heavy-machinary.jpg",
    features: [
      "24/7 Emergency Repairs",
      "Preventive Maintenance",
      "Equipment Refurbishment",
      "Spare Parts Supply",
    ],
    color: "from-green-500/20 to-emerald-500/20",
    stats: "300+ Clients"
  },
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-secondary/30" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 15, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className={`absolute w-${8 + i} h-${8 + i} rounded-full ${
              i % 3 === 0 ? 'bg-primary/10' : 
              i % 3 === 1 ? 'bg-accent/10' : 
              'bg-gray-200/30'
            } blur-lg`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 8)}%`,
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Engineering <span className="text-primary">Solutions</span> That Drive Industry
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering services designed for industrial excellence, 
            operational efficiency, and sustainable growth across Zambia's key sectors.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
              const Icon = service.icon;
              return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/80">Success Rate</div>
                      <div className="text-2xl font-bold text-white">98%</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 mb-8">
                    <h3 className="text-2xl font-bold font-heading text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features List (on hover/click) */}
                    <AnimatePresence>
                      {selectedService === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3 mt-4"
                        >
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-white/80">{feature}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/60">Projects Completed</div>
                      <div className="text-lg font-bold text-white">{service.stats}</div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-sm">
                        {selectedService === index ? "Hide Details" : "View Details"}
                      </span>
                      <div className={`w-10 h-10 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 ${
                        selectedService === index ? "rotate-45" : "group-hover:translate-x-1"
                      }`}>
                        <ChevronRight className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${
                  hoveredService === index ? "border-accent/50" : ""
                }`} />
              </div>

              {/* Floating Tag */}
              <div className="absolute -top-3 left-6">
                <div className="px-4 py-1.5 bg-accent text-black text-sm font-bold rounded-full shadow-lg">
                  #{index + 1}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={services[selectedService].image}
                      alt={services[selectedService].title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="text-white text-3xl font-bold font-heading">
                        {services[selectedService].title}
                      </div>
                      <div className="text-white/80">
                        {services[selectedService].stats} • 98% Success Rate
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 overflow-y-auto">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        {(() => {
                          const SelectedIcon = services[selectedService!].icon;
                          return <SelectedIcon className="w-7 h-7 text-primary" />;
                        })()}
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <ChevronRight className="w-6 h-6 rotate-45" />
                      </button>
                    </div>

                    <h3 className="text-2xl font-bold font-heading mb-4">
                      {services[selectedService].title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8">
                      {services[selectedService].description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-bold text-lg mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {services[selectedService].features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm text-gray-500">Success Rate</div>
                        <div className="text-2xl font-bold text-primary">98%</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm text-gray-500">Projects</div>
                        <div className="text-2xl font-bold text-primary">
                          {services[selectedService].stats}
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                      <span>Request Service Details</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-6">
                Need Custom Engineering Solutions?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Our team of experts can design and implement tailored solutions 
                for your specific industrial requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                  Download Services PDF
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}