"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, DollarSign, CheckCircle } from "lucide-react";

const projects = [
  {
    id: "mine-processing",
    title: "Copper Mine Processing Plant",
    client: "Zambia Mining Corp",
    location: "Kitwe, Zambia",
    timeline: "Jan 2023 - Jun 2023",
    budget: "$2.5M",
    status: "completed",
    description: "Electrical and instrumentation installation for copper processing facility",
    phases: [
      {
        name: "Site Survey",
        status: "completed",
        start: "Jan 2023",
        end: "Jan 2023",
        progress: 100,
      },
      {
        name: "Design & Planning",
        status: "completed",
        start: "Feb 2023",
        end: "Mar 2023",
        progress: 100,
      },
      {
        name: "Installation",
        status: "completed",
        start: "Apr 2023",
        end: "May 2023",
        progress: 100,
      },
      {
        name: "Commissioning",
        status: "completed",
        start: "Jun 2023",
        end: "Jun 2023",
        progress: 100,
      },
    ],
  },
  {
    id: "fuel-depot",
    title: "Bulk Fuel Depot Construction",
    client: "National Petroleum",
    location: "Ndola, Zambia",
    timeline: "Mar 2023 - Present",
    budget: "$1.8M",
    status: "ongoing",
    description: "Design and construction of fuel storage and handling facility",
    phases: [
      {
        name: "Civil Works",
        status: "completed",
        start: "Mar 2023",
        end: "May 2023",
        progress: 100,
      },
      {
        name: "Mechanical Installation",
        status: "completed",
        start: "Jun 2023",
        end: "Aug 2023",
        progress: 100,
      },
      {
        name: "Electrical & Instrumentation",
        status: "in-progress",
        start: "Sep 2023",
        end: "Nov 2023",
        progress: 75,
      },
      {
        name: "Testing & Commissioning",
        status: "pending",
        start: "Dec 2023",
        end: "Jan 2024",
        progress: 0,
      },
    ],
  },
  {
    id: "factory-automation",
    title: "Factory Automation System",
    client: "Industrial Manufacturing Ltd",
    location: "Lusaka, Zambia",
    timeline: "Jul 2023 - Oct 2023",
    budget: "$1.2M",
    status: "completed",
    description: "PLC and SCADA system implementation for manufacturing plant",
    phases: [
      {
        name: "Requirement Analysis",
        status: "completed",
        start: "Jul 2023",
        end: "Jul 2023",
        progress: 100,
      },
      {
        name: "System Design",
        status: "completed",
        start: "Aug 2023",
        end: "Aug 2023",
        progress: 100,
      },
      {
        name: "Programming",
        status: "completed",
        start: "Sep 2023",
        end: "Sep 2023",
        progress: 100,
      },
      {
        name: "Installation & Testing",
        status: "completed",
        start: "Oct 2023",
        end: "Oct 2023",
        progress: 100,
      },
    ],
  },
];

export default function ProjectTimeline() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [viewMode, setViewMode] = useState<"timeline" | "details">("timeline");

  const currentProject = projects[selectedProject];

  return (
    <div className="w-full">
      {/* Project Selection */}
      <div className="flex overflow-x-auto pb-4 mb-8 space-x-4">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(index)}
            className={`flex-shrink-0 px-6 py-3 rounded-xl transition-all ${
              selectedProject === index
                ? "bg-primary text-white"
                : "glass-effect hover:shadow-md"
            }`}
          >
            <div className="text-left">
              <div className="font-bold">{project.title.split(" ")[0]}</div>
              <div className="text-sm opacity-80">{project.client}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Project Info */}
      <div className="glass-effect rounded-2xl p-6 mb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Timeline</div>
              <div className="font-bold">{currentProject.timeline}</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Location</div>
              <div className="font-bold">{currentProject.location}</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Budget</div>
              <div className="font-bold">{currentProject.budget}</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <div className={`w-3 h-3 rounded-full ${
                currentProject.status === "completed" ? "bg-green-500" :
                currentProject.status === "ongoing" ? "bg-yellow-500" :
                "bg-blue-500"
              }`} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Status</div>
              <div className="font-bold capitalize">{currentProject.status}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold font-heading mb-2">
              {currentProject.title}
            </h3>
            <p className="text-muted-foreground">
              {currentProject.description}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("timeline")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === "timeline"
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setViewMode("details")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === "details"
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Timeline View */}
      {viewMode === "timeline" && (
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20" />

          {/* Phases */}
          <div className="space-y-8">
            {currentProject.phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Phase Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold font-heading text-lg">
                        {phase.name}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        phase.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : phase.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {phase.status.replace("-", " ")}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {phase.start} - {phase.end}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{phase.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${phase.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full ${
                            phase.status === "completed"
                              ? "bg-green-500"
                              : phase.status === "in-progress"
                              ? "bg-yellow-500"
                              : "bg-gray-300"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      {phase.status === "completed" && (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-green-600">Completed on schedule</span>
                        </>
                      )}
                      {phase.status === "in-progress" && (
                        <>
                          <Clock className="w-4 h-4 text-yellow-500" />
                          <span className="text-yellow-600">In progress - on track</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-1/2 justify-center">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                      phase.status === "completed"
                        ? "bg-green-500"
                        : phase.status === "in-progress"
                        ? "bg-yellow-500"
                        : "bg-gray-300"
                    }`} />
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full hidden md:block" 
                      style={{ 
                        left: index % 2 === 0 ? 'auto' : '-28px',
                        right: index % 2 === 0 ? '-28px' : 'auto'
                      }} 
                    />
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Details View */}
      {viewMode === "details" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="glass-effect rounded-2xl p-6">
            <h4 className="font-bold font-heading text-lg mb-4">Project Scope</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Complete engineering design and installation</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Equipment procurement and supply</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Commissioning and performance testing</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Operator training and documentation</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>One-year warranty and maintenance support</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <h4 className="font-bold font-heading text-lg mb-4">Key Achievements</h4>
            <div className="space-y-4">
              <div>
                <div className="font-medium mb-1">Safety Record</div>
                <div className="text-sm text-muted-foreground">
                  Zero lost-time incidents during project execution
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Quality Metrics</div>
                <div className="text-sm text-muted-foreground">
                  100% compliance with design specifications
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Schedule Performance</div>
                <div className="text-sm text-muted-foreground">
                  Completed 2 weeks ahead of schedule
                </div>
              </div>
              <div>
                <div className="font-medium mb-1">Client Satisfaction</div>
                <div className="text-sm text-muted-foreground">
                  Rated 5/5 in post-project review
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Project Metrics */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">100%</div>
          <div className="text-sm text-muted-foreground">Safety</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">98%</div>
          <div className="text-sm text-muted-foreground">Quality</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">95%</div>
          <div className="text-sm text-muted-foreground">Schedule</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">100%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}