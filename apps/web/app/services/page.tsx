"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Building, Cpu, Factory, Hammer, 
  PlugZap, Settings, Wrench, ChevronRight,
  CheckCircle, Users, Clock, Award
} from "lucide-react";
import Engineering3DModel from "../components/ui/3DEngineeringModel";

const services = [
  {
    id: "civil",
    title: "Civil & Structural Engineering",
    icon: Building,
    description: "Complete civil works and structural solutions for industrial facilities",
    longDescription: "We provide comprehensive civil engineering services including structural design, construction management, foundation works, concrete structures, steel erection, and industrial building construction. Our team ensures compliance with all relevant Zambian standards and regulations.",
    image: "/placeholder.svg",
    features: [
      "Structural Design & Analysis",
      "Construction Management",
      "Foundation Engineering",
      "Concrete & Steel Works",
      "Quality Control & Testing",
      "Project Documentation"
    ],
    industries: ["Mining", "Manufacturing", "Infrastructure", "Energy"],
    equipment: ["CAD Software", "Surveying Equipment", "Testing Labs", "Heavy Machinery"],
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    icon: Settings,
    description: "Machinery design, installation, and maintenance services",
    longDescription: "From concept to commissioning, we handle all aspects of mechanical engineering including machine design, fabrication, installation, alignment, and preventive maintenance. Specialized in pumps, compressors, conveyors, and industrial machinery.",
    image: "/placeholder.svg",
    features: [
      "Machine Design & Fabrication",
      "Equipment Installation",
      "Precision Alignment",
      "Preventive Maintenance",
      "Troubleshooting & Repairs",
      "Performance Optimization"
    ],
    industries: ["Petroleum", "Mining", "Manufacturing", "Food Processing"],
    equipment: ["CAD/CAM", "CNC Machines", "Alignment Tools", "Testing Equipment"],
  },
  {
    id: "electrical",
    title: "Electrical & Automation",
    icon: PlugZap,
    description: "Power systems, control panels, and industrial automation",
    longDescription: "Complete electrical solutions including high-voltage systems, motor control centers, PLC programming, SCADA systems, and industrial networking. We design and implement reliable electrical infrastructure for optimal performance and safety.",
    image: "/placeholder.svg",
    features: [
      "Power Distribution Systems",
      "Motor Control Centers",
      "PLC & SCADA Programming",
      "Instrumentation Integration",
      "Energy Management",
      "Safety Systems"
    ],
    industries: ["All Industrial Sectors"],
    equipment: ["Design Software", "Testing Instruments", "Programming Tools", "Diagnostic Equipment"],
  },
  {
    id: "instrumentation",
    title: "Instrumentation & Process Control",
    icon: Cpu,
    description: "Process measurement, control systems, and calibration",
    longDescription: "Specialized in process instrumentation including sensor installation, transmitter calibration, control valve tuning, and distributed control systems. We ensure accurate measurement and precise control of industrial processes.",
    image: "/placeholder.svg",
    features: [
      "Sensor Installation & Calibration",
      "Control System Design",
      "Safety Instrumented Systems",
      "Process Optimization",
      "Data Acquisition",
      "Maintenance Contracts"
    ],
    industries: ["Petroleum", "Chemical", "Mining", "Water Treatment"],
    equipment: ["Calibration Tools", "Testing Equipment", "Software Platforms", "Diagnostic Tools"],
  },
  {
    id: "fabrication",
    title: "Fabrication & Machining",
    icon: Wrench,
    description: "Custom metal fabrication and precision machining",
    longDescription: "Our workshop capabilities include welding, machining, sheet metal work, and structural fabrication. We work with various materials including stainless steel, carbon steel, and aluminum to create custom components and assemblies.",
    image: "/placeholder.svg",
    features: [
      "Custom Metal Fabrication",
      "Precision Machining",
      "Welding & Assembly",
      "Quality Inspection",
      "Surface Treatment",
      "Installation Support"
    ],
    industries: ["Mining", "Manufacturing", "Construction", "Transportation"],
    equipment: ["CNC Machines", "Welding Equipment", "Cutting Tools", "Inspection Equipment"],
  },
  {
    id: "repairs",
    title: "Industrial Repairs & Maintenance",
    icon: Hammer,
    description: "Emergency repairs, refurbishment, and preventive maintenance",
    longDescription: "24/7 emergency repair services for industrial equipment including pumps, motors, gearboxes, and machinery. We offer preventive maintenance programs, equipment refurbishment, and life extension services to maximize uptime.",
    image: "/placeholder.svg",
    features: [
      "Emergency Repairs",
      "Preventive Maintenance",
      "Equipment Refurbishment",
      "Life Extension Programs",
      "Spare Parts Supply",
      "Technical Support"
    ],
    industries: ["All Industrial Sectors"],
    equipment: ["Repair Tools", "Testing Equipment", "Mobile Workshop", "Spare Parts Inventory"],
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("civil");
  const [activeTab, setActiveTab] = useState("overview");

  const currentService = services.find(s => s.id === selectedService);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              Our <span className="text-accent">Engineering</span> Services
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive engineering solutions tailored for industrial excellence. 
              From design to maintenance, we provide end-to-end services across all sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-12 bg-secondary/30 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedService === service.id
                    ? "bg-primary text-white shadow-lg"
                    : "glass-effect hover:shadow-md"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <service.icon className="w-5 h-5" />
                  <span>{service.title.split(" ")[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Service Details */}
            <div className="lg:col-span-2">
              {/* Service Header */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    {currentService && <currentService.icon className="w-8 h-8 text-primary" />}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-heading mb-2">
                      {currentService?.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {currentService?.description}
                    </p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b mb-8">
                  {["overview", "features", "industries", "equipment"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 font-medium capitalize border-b-2 transition-colors ${
                        activeTab === tab
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                  {activeTab === "overview" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-lg text-muted-foreground mb-8">
                        {currentService?.longDescription}
                      </p>
                      
                      {/* Key Benefits */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Expert Team</div>
                            <div className="text-sm text-muted-foreground">
                              Experienced engineers and technicians
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Timely Delivery</div>
                            <div className="text-sm text-muted-foreground">
                              On-schedule project completion
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Quality Assurance</div>
                            <div className="text-sm text-muted-foreground">
                              ISO-compliant quality systems
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">After-Sales Support</div>
                            <div className="text-sm text-muted-foreground">
                              24/7 maintenance and support
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {currentService?.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/30">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "industries" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        {currentService?.industries.map((industry, index) => (
                          <div key={index} className="p-4 rounded-lg bg-secondary/30">
                            <div className="font-medium mb-2">{industry}</div>
                            <p className="text-sm text-muted-foreground">
                              {industry === "Mining" && "Copper mining, processing plants, mineral extraction"}
                              {industry === "Petroleum" && "Fuel depots, refineries, pipeline systems"}
                              {industry === "Manufacturing" && "Factory setup, production lines, automation"}
                              {industry === "Infrastructure" && "Industrial buildings, warehouses, facilities"}
                              {industry === "Energy" && "Power plants, distribution, renewable energy"}
                              {industry === "Chemical" && "Processing plants, safety systems, controls"}
                              {industry === "Food Processing" && "Hygienic design, sanitation, automation"}
                              {industry === "Transportation" && "Material handling, logistics, infrastructure"}
                              {industry === "Water Treatment" && "Water plants, pumping stations, controls"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "equipment" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        {currentService?.equipment.map((item, index) => (
                          <div key={index} className="p-4 rounded-lg bg-secondary/30">
                            <div className="font-medium">{item}</div>
                            <p className="text-sm text-muted-foreground mt-1">
                              State-of-the-art equipment for precision work
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 bg-gradient-to-r from-primary to-primary/90 rounded-2xl text-white">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold font-heading mb-4">
                        Ready to Start Your Project?
                      </h3>
                      <p>
                        Get a free consultation and quote for your {currentService?.title.toLowerCase()} needs.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                        Request Quote
                      </button>
                      <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* All Services List */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="font-bold font-heading text-lg mb-4">All Services</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all ${
                        selectedService === service.id
                          ? "bg-primary/10 border-l-4 border-primary"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center">
                        <service.icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{service.title}</span>
                      </div>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold font-heading text-lg mb-4">Need Help?</h3>
                <p className="mb-6">
                  Our engineering team is ready to assist with your project requirements.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-white text-primary py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                    Call Now: +260 955 950 008
                  </button>
                  <button className="w-full border-2 border-white py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Email Inquiry
                  </button>
                </div>
              </div>

              {/* Related Services */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="font-bold font-heading text-lg mb-4">Related Services</h3>
                <div className="space-y-4">
                  {services
                    .filter(s => s.id !== selectedService)
                    .slice(0, 3)
                    .map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <service.icon className="w-5 h-5" />
                        <span className="font-medium">{service.title}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Interactive <span className="text-primary">Engineering</span> Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our engineering capabilities through this interactive 3D model
            </p>
          </motion.div>

          <Engineering3DModel />
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to completion, we follow a structured approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understand your requirements and project scope",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Develop detailed engineering plans and specifications",
              },
              {
                step: "03",
                title: "Execution",
                description: "Implement the project with quality and safety focus",
              },
              {
                step: "04",
                title: "Support",
                description: "Provide maintenance and after-sales services",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold font-heading mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}