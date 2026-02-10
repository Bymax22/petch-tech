"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ExternalLink, MapPin, Calendar, Building2,
  ChevronLeft, ChevronRight, Filter 
} from "lucide-react";

const projects = [
  {
    title: "Mine Processing Plant",
    category: "Mining",
    location: "Copperbelt, Zambia",
    year: "2023",
    description: "Complete electrical and instrumentation installation for copper processing facility.",
    image: "/1.jpeg",
    features: ["Electrical", "Instrumentation", "Automation"],
  },
  {
    title: "Fuel Depot Construction",
    category: "Petroleum",
    location: "Ndola, Zambia",
    year: "2023",
    description: "Design and construction of bulk fuel handling facility with safety systems.",
    image: "/2.jpg",
    features: ["Civil Works", "Mechanical", "Safety Systems"],
  },
  {
    title: "Industrial Factory Setup",
    category: "Manufacturing",
    location: "Lusaka, Zambia",
    year: "2022",
    description: "Turnkey factory installation including machinery and automation systems.",
    image: "/3.jpeg",
    features: ["Fabrication", "Installation", "Commissioning"],
  },
  {
    title: "Power Plant Maintenance",
    category: "Energy",
    location: "Kafue, Zambia",
    year: "2022",
    description: "Major maintenance and upgrade of power generation equipment.",
    image: "/4.jpg",
    features: ["Maintenance", "Upgrades", "Testing"],
  },
  {
    title: "Warehouse Construction",
    category: "Logistics",
    location: "Kitwe, Zambia",
    year: "2023",
    description: "Design and construction of industrial warehouse with material handling systems.",
    image: "/5.jpg",
    features: ["Construction", "Material Handling", "Electrical"],
  },
  {
    title: "Refinery Expansion",
    category: "Petroleum",
    location: "Ndola, Zambia",
    year: "2024",
    description: "Expansion project including new processing units and control systems.",
    image: "/6.webp",
    features: ["Expansion", "Process Control", "Commissioning"],
  },
];

const categories = ["All", "Mining", "Petroleum", "Manufacturing", "Energy", "Logistics"];

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Showcasing our engineering excellence through successful project delivery
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(0);
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "glass-effect hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          {/* Projects */}
          <div className="grid lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-secondary rounded-2xl overflow-hidden hover-lift">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-black text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-heading mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {project.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      View Project Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="p-3 rounded-full glass-effect disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === idx
                        ? "bg-primary w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className="p-3 rounded-full glass-effect disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-3 glass-effect rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}