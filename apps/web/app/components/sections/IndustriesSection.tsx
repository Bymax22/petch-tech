"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Factory, Drill, Fuel, Zap, Building2, 
  Truck, Package, Cog 
} from "lucide-react";

const industries = [
  {
    title: "Mining",
    icon: Drill,
    description: "Engineering solutions for copper mining, processing plants, and mine infrastructure.",
    image: "/i1.jpg",
  },
  {
    title: "Petroleum & Fuel",
    icon: Fuel,
    description: "Fuel depot construction, pipeline installation, and refinery maintenance.",
    image: "/2.jpg",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Factory setup, machinery installation, and production line optimization.",
    image: "/i2.jpg",
  },
  {
    title: "Energy & Power",
    icon: Zap,
    description: "Power generation, distribution systems, and renewable energy projects.",
    image: "/i4.jpg",
  },
  {
    title: "Infrastructure",
    icon: Building2,
    description: "Commercial and industrial building construction and civil works.",
    image: "/i5.jpg",
  },
  {
    title: "Logistics",
    icon: Truck,
    description: "Material handling systems, warehouse setup, and logistics infrastructure.",
    image: "/i6.webp",
  },
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const SelectedIcon = industries[selectedIndustry].icon;

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Industries <span className="text-primary">We Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering engineering excellence across Zambia's key industrial sectors
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Industry Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src={industries[selectedIndustry].image}
              alt={industries[selectedIndustry].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            <div className="relative p-8 h-full flex flex-col justify-end min-h-[500px]">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                  <SelectedIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-heading text-white mb-2">
                    {industries[selectedIndustry].title}
                  </h3>
                  <div className="w-12 h-1 bg-accent rounded-full" />
                </div>
              </div>
              <p className="text-white/90 text-lg max-w-lg">
                {industries[selectedIndustry].description}
              </p>
            </div>
          </motion.div>

          {/* Industry List */}
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedIndustry(index)}
                  onMouseEnter={() => setSelectedIndustry(index)}
                  className={`group relative overflow-hidden rounded-xl p-6 text-left transition-all duration-300 ${
                    selectedIndustry === index
                      ? "bg-primary text-white shadow-xl scale-[1.02]"
                      : "glass-effect hover:shadow-lg"
                  }`}
                >
                {/* Background for selected */}
                {selectedIndustry === index && (
                  <div className="absolute inset-0 bg-primary" />
                )}

                {/* Content */}
                <div className="relative z-10">
                  <div className={`flex items-center mb-4 ${
                    selectedIndustry === index ? "text-white" : "text-primary"
                  }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      selectedIndustry === index
                        ? "bg-white/20"
                        : "bg-primary/10"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold font-heading text-lg">
                      {industry.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${
                    selectedIndustry === index ? "text-white/90" : "text-muted-foreground"
                  }`}>
                    {industry.description}
                  </p>
                </div>

                {/* Hover/Active Indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  selectedIndustry === index ? "bg-accent" : "bg-transparent"
                } group-hover:bg-accent/50 transition-colors`} />
              </motion.button>
              )
            })}
          </div>
        </div>

        {/* Industry Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold font-heading mb-6">
            Recent Projects in {industries[selectedIndustry].title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-secondary/30 rounded-lg p-6">
                <h4 className="font-bold font-heading mb-2">
                  {industries[selectedIndustry].title} Project {item}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Successful completion with 100% client satisfaction
                </p>
                <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}