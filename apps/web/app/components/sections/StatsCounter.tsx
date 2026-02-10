"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";

const stats = [
  { 
    icon: TrendingUp, 
    value: 13, 
    suffix: "+", 
    label: "Years Experience",
    description: "Serving Zambia since 2011" 
  },
  { 
    icon: Building2, 
    value: 200, 
    suffix: "+", 
    label: "Projects Completed",
    description: "Across industrial sectors" 
  },
  { 
    icon: Users, 
    value: 18, 
    suffix: "+", 
    label: "Expert Engineers",
    description: "Skilled professionals" 
  },
  { 
    icon: Award, 
    value: 100, 
    suffix: "%", 
    label: "Client Satisfaction",
    description: "Proven track record" 
  },
];

export default function StatsCounter() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      // Animate counters
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Counter */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold font-heading text-white">
                  {counters[index]}
                </span>
                <span className="text-4xl md:text-5xl font-bold font-heading text-accent">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-white/70 text-sm">
                {stat.description}
              </p>

              {/* Animated Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "60px" } : { width: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className="h-1 bg-accent rounded-full mx-auto mt-4"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-sm">Active Projects: 12</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-white text-sm">Ongoing Maintenance: 8</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}