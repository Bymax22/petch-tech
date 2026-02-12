"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Quote, ChevronLeft, ChevronRight, 
  Building2, User, MapPin 
} from "lucide-react";

const testimonials = [
  {
    name: "John Banda",
    position: "Operations Manager",
    company: "Zambia Mining Corp",
    location: "Kitwe, Zambia",
    rating: 5,
    content: "Petch-Tech Engineering delivered exceptional results on our processing plant upgrade. Their expertise in instrumentation and electrical systems was impressive. The project was completed ahead of schedule with zero safety incidents.",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Mwamba",
    position: "Project Director",
    company: "National Petroleum",
    location: "Ndola, Zambia",
    rating: 5,
    content: "Their team handled our fuel depot construction with professionalism and precision. The attention to safety protocols and quality control was outstanding. We've partnered with them on multiple projects since.",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Michael Tembo",
    position: "CEO",
    company: "Industrial Manufacturing Ltd",
    location: "Lusaka, Zambia",
    rating: 5,
    content: "The factory automation system installed by Petch-Tech has increased our production efficiency by 40%. Their after-sales support and maintenance services are top-notch. Highly recommended for industrial projects.",
    image: "/placeholder.svg",
  },
  {
    name: "Patricia Lungu",
    position: "Engineering Manager",
    company: "Copperbelt Energy",
    location: "Chingola, Zambia",
    rating: 5,
    content: "Professional, reliable, and technically excellent. Their team handled a complex power plant maintenance project with minimal downtime. Their standards are among the best we've worked with.",
    image: "/placeholder.svg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-secondary/30">
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
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from industry leaders who trust us with their engineering projects
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Testimonial Content */}
                  <div className="p-8 lg:p-12">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-primary/20" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          width={56}
                          height={56}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold font-heading text-lg">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].position}
                        </p>
                        <div className="flex items-center mt-1">
                          <Building2 className="w-4 h-4 mr-1" />
                          <span className="text-sm">
                            {testimonials[currentIndex].company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Company Info Side */}
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 text-white">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">
                          Project Success Story
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 mr-3" />
                            <span>{testimonials[currentIndex].location}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="w-5 h-5 mr-3" />
                            <span>Long-term partnership</span>
                          </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-white/10 rounded-xl">
                          <h4 className="font-bold mb-2">Key Achievements</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                              On-time project delivery
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                              Zero safety incidents
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                              Quality excellence
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <button className="w-full py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors mt-8">
                        View Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-effect shadow-lg hover:shadow-xl transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-effect shadow-lg hover:shadow-xl transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Company Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-center text-muted-foreground mb-6">
              Trusted by leading companies across Zambia
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                "ZMining Corp",
                "National Petroleum",
                "Industrial Mfg",
                "Copperbelt Energy",
                "Zambia Power",
                "Build Solutions",
              ].map((company, index) => (
                <div
                  key={index}
                  className="glass-effect px-6 py-3 rounded-lg hover:shadow-md transition-all"
                >
                  <span className="font-medium text-primary">{company}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}