"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Filter, Grid3x3, List, MapPin, Calendar, 
  Users, DollarSign, ExternalLink, ChevronRight,
  Download, Share2, ZoomIn
} from "lucide-react";
import ProjectTimeline from "../components/ui/ProjectTimeline";

const projects = [
  {
    id: 1,
    title: "Mine Processing Plant Upgrade",
    category: "Mining",
    location: "Kitwe, Zambia",
    year: "2023",
    budget: "$2.5M",
    duration: "6 months",
    team: "12 engineers",
    description: "Complete electrical and instrumentation upgrade for copper processing facility with new control systems and safety features.",
    image: "/placeholder.svg",
    tags: ["Electrical", "Instrumentation", "Automation", "Safety"],
    status: "completed",
  },
  {
    id: 2,
    title: "Bulk Fuel Depot Construction",
    category: "Petroleum",
    location: "Ndola, Zambia",
    year: "2023",
    budget: "$1.8M",
    duration: "10 months",
    team: "8 engineers",
    description: "Design and construction of fuel storage facility with loading systems, safety controls, and environmental protection.",
    image: "/placeholder.svg",
    tags: ["Civil", "Mechanical", "Safety", "Environmental"],
    status: "ongoing",
  },
  {
    id: 3,
    title: "Factory Automation System",
    category: "Manufacturing",
    location: "Lusaka, Zambia",
    year: "2023",
    budget: "$1.2M",
    duration: "4 months",
    team: "6 engineers",
    description: "PLC and SCADA system implementation for manufacturing plant with production line optimization.",
    image: "/placeholder.svg",
    tags: ["Automation", "PLC", "SCADA", "Optimization"],
    status: "completed",
  },
  {
    id: 4,
    title: "Power Plant Maintenance",
    category: "Energy",
    location: "Kafue, Zambia",
    year: "2022",
    budget: "$950K",
    duration: "3 months",
    team: "10 engineers",
    description: "Major maintenance and equipment upgrades for thermal power plant with minimal downtime.",
    image: "/placeholder.svg",
    tags: ["Maintenance", "Upgrade", "Power", "Efficiency"],
    status: "completed",
  },
  {
    id: 5,
    title: "Industrial Warehouse Construction",
    category: "Infrastructure",
    location: "Kitwe, Zambia",
    year: "2022",
    budget: "$1.5M",
    duration: "8 months",
    team: "15 engineers",
    description: "Design and construction of industrial warehouse with material handling systems and office space.",
    image: "/placeholder.svg",
    tags: ["Construction", "Steel", "Material Handling", "Design"],
    status: "completed",
  },
  {
    id: 6,
    title: "Water Treatment Plant",
    category: "Utilities",
    location: "Ndola, Zambia",
    year: "2024",
    budget: "$3.2M",
    duration: "12 months",
    team: "18 engineers",
    description: "New water treatment plant with modern filtration systems and automated controls.",
    image: "/placeholder.svg",
    tags: ["Water", "Treatment", "Automation", "Environmental"],
    status: "planned",
  },
];

const categories = ["All", "Mining", "Petroleum", "Manufacturing", "Energy", "Infrastructure", "Utilities"];
const statuses = ["All", "Completed", "Ongoing", "Planned"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const statusMatch = selectedStatus === "All" || 
      (selectedStatus === "Completed" && project.status === "completed") ||
      (selectedStatus === "Ongoing" && project.status === "ongoing") ||
      (selectedStatus === "Planned" && project.status === "planned");
    return categoryMatch && statusMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "ongoing": return "bg-yellow-100 text-yellow-800";
      case "planned": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg"
            alt="Projects Hero"
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
              Our <span className="text-accent">Projects</span>
            </h1>
            <p className="text-xl text-white/90">
              Showcasing engineering excellence through successful project delivery across Zambia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "glass-effect hover:shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Status:</span>
                <div className="flex gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        selectedStatus === status
                          ? "bg-primary text-white"
                          : "glass-effect hover:shadow-md"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-primary text-white" : "glass-effect"
                  }`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-primary text-white" : "glass-effect"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`${
            viewMode === "grid" 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-8"
          }`}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${
                  viewMode === "list" ? "flex flex-col lg:flex-row gap-8" : ""
                }`}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl ${
                  viewMode === "list" ? "lg:w-1/3" : "h-64"
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes={viewMode === "list" ? "33vw" : "50vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-black text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className={`mt-6 ${viewMode === "list" ? "lg:w-2/3" : ""}`}>
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

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold font-heading text-primary">
                        {project.budget}
                      </div>
                      <div className="text-xs text-muted-foreground">Budget</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold font-heading text-primary">
                        {project.duration}
                      </div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold font-heading text-primary">
                        {project.team}
                      </div>
                      <div className="text-xs text-muted-foreground">Team</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold font-heading mb-4">No Projects Found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your filters to see more projects
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Project Count */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 glass-effect rounded-full">
              <span className="font-medium">Showing</span>
              <span className="text-primary font-bold">{filteredProjects.length}</span>
              <span className="font-medium">of</span>
              <span className="font-bold">{projects.length}</span>
              <span className="font-medium">projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline Feature */}
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
              Project <span className="text-primary">Timelines</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track our project progress from start to finish with interactive timelines
            </p>
          </motion.div>

          <ProjectTimeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold font-heading mb-6">
                  Start Your Next Project With Us
                </h3>
                <p className="text-white/90 mb-8">
                  Contact our team to discuss your engineering requirements and get a customized proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center">
                    Request Proposal
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                    <Download className="mr-2 w-5 h-5" />
                    Download Portfolio
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold font-heading mb-2">200+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-heading mb-2">100%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-heading mb-2">13+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-heading mb-2">18+</div>
                  <div className="text-white/80">Expert Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}