"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building, Cpu, Factory, Hammer, 
  PlugZap, Settings, Wrench, ChevronRight,
  X, CheckCircle
} from "lucide-react";

const services = [
  {
    id: "civil",
    title: "Civil Works",
    icon: Building,
    description: "Structural engineering and construction",
    details: "We handle foundation work, structural steel erection, concrete works, and complete building construction for industrial facilities.",
    industries: ["Mining", "Manufacturing", "Infrastructure"],
    capabilities: ["Structural Design", "Construction Management", "Quality Control"],
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    icon: Settings,
    description: "Machinery and equipment solutions",
    details: "From design to installation and maintenance of industrial machinery, pumps, compressors, and mechanical systems.",
    industries: ["Petroleum", "Manufacturing", "Energy"],
    capabilities: ["Machine Design", "Fabrication", "Installation"],
  },
  {
    id: "electrical",
    title: "Electrical & Automation",
    icon: PlugZap,
    description: "Power and control systems",
    details: "Complete electrical solutions including power distribution, motor control centers, PLC programming, and SCADA systems.",
    industries: ["All Industries"],
    capabilities: ["Power Systems", "Automation", "Control Panels"],
  },
  {
    id: "instrumentation",
    title: "Instrumentation",
    icon: Cpu,
    description: "Process control and measurement",
    details: "Installation and calibration of sensors, transmitters, control valves, and process automation systems.",
    industries: ["Petroleum", "Mining", "Manufacturing"],
    capabilities: ["Calibration", "Process Control", "Safety Systems"],
  },
];

export default function InteractiveServiceSelector() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [step, setStep] = useState<"service" | "industry" | "contact">("service");

  const currentService = services.find(s => s.id === selectedService);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep("industry");
  };

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    setStep("contact");
  };

  const resetSelection = () => {
    setSelectedService(null);
    setSelectedIndustry("");
    setStep("service");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          {["Select Service", "Choose Industry", "Get Quote"].map((label, index) => (
            <div key={label} className="flex items-center">
              <div className={`flex flex-col items-center ${index < (step === "service" ? 0 : step === "industry" ? 1 : 2) ? "text-primary" : "text-gray-300"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  index < (step === "service" ? 0 : step === "industry" ? 1 : 2)
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                }`}>
                  {index < (step === "service" ? 0 : step === "industry" ? 1 : 2) ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
              {index < 2 && (
                <div className={`w-16 h-1 mx-4 ${
                  index < (step === "service" ? -1 : step === "industry" ? 0 : 1)
                    ? "bg-primary"
                    : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Service Selection Step */}
      <AnimatePresence mode="wait">
        {step === "service" && (
          <motion.div
            key="service"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold font-heading mb-4">
              What engineering service do you need?
            </h3>
            <p className="text-muted-foreground mb-8">
              Select from our comprehensive range of engineering services
            </p>
          </motion.div>
        )}

        {step === "industry" && currentService && (
          <motion.div
            key="industry"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-8"
          >
            <button
              onClick={() => setStep("service")}
              className="inline-flex items-center text-primary mb-4 hover:text-primary/80 transition-colors"
            >
              ← Back to Services
            </button>
            <h3 className="text-2xl font-bold font-heading mb-4">
              Which industry?
            </h3>
            <p className="text-muted-foreground mb-8">
              Select your industry to tailor the solution
            </p>
          </motion.div>
        )}

        {step === "contact" && currentService && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-8"
          >
            <button
              onClick={() => setStep("industry")}
              className="inline-flex items-center text-primary mb-4 hover:text-primary/80 transition-colors"
            >
              ← Back to Industry
            </button>
            <h3 className="text-2xl font-bold font-heading mb-4">
              Get Your Custom Quote
            </h3>
            <p className="text-muted-foreground mb-8">
              Provide details for a tailored solution
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Cards */}
      <AnimatePresence mode="wait">
        {step === "service" && (
          <motion.div
            key="service-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceSelect(service.id)}
                className="glass-effect p-6 rounded-2xl text-left hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-lg font-bold font-heading mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.industries.slice(0, 2).map((industry) => (
                    <span
                      key={industry}
                      className="px-2 py-1 bg-secondary text-primary text-xs rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                  {service.industries.length > 2 && (
                    <span className="px-2 py-1 bg-secondary text-primary text-xs rounded-full">
                      +{service.industries.length - 2} more
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Industry Selection */}
        {step === "industry" && currentService && (
          <motion.div
            key="industry-selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                <currentService.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-heading">
                  {currentService.title}
                </h4>
                <p className="text-muted-foreground">
                  {currentService.description}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h5 className="font-bold mb-4">Select Your Industry:</h5>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentService.industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => handleIndustrySelect(industry)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedIndustry === industry
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{industry}</span>
                      {selectedIndustry === industry && (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-3">Capabilities:</h5>
              <div className="flex flex-wrap gap-2">
                {currentService.capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Contact Form */}
        {step === "contact" && currentService && (
          <motion.div
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="mb-8">
              <h4 className="text-xl font-bold font-heading mb-2">
                {currentService.title} for {selectedIndustry}
              </h4>
              <p className="text-muted-foreground">
                Fill in your details for a customized quote
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="+260 955 950 008"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload Files (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-primary hover:text-primary/80"
                  >
                    <div className="mb-2">
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <span className="font-medium">Click to upload</span>
                    <p className="text-sm text-gray-500 mt-1">
                      Drawings, specifications, or project documents
                    </p>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={resetSelection}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Start Over
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset Button */}
      {step !== "service" && (
        <div className="text-center mt-6">
          <button
            onClick={resetSelection}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <X className="w-4 h-4 mr-1" />
            Reset Selection
          </button>
        </div>
      )}
    </div>
  );
}