"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Phone, MessageCircle, Award } from "lucide-react";

const slides = [
  { 
    src: "/1.jpg", 
    title: "Industrial Solutions", 
    caption: "Reliable engineering services", 
    details: "Mining • Petroleum • Manufacturing",
    description: "Comprehensive industrial engineering solutions tailored for Zambia's demanding mining, petroleum, and manufacturing sectors. Our team delivers reliable, scalable systems that maximize efficiency and minimize downtime." 
  },
  { 
    src: "/2.jpg", 
    title: "Mechanical Excellence", 
    caption: "Precision fabrication & maintenance", 
    details: "Pumps • Motors • Heavy Equipment",
    description: "Expert mechanical engineering from concept to commissioning. We specialize in precision fabrication, maintenance of critical equipment, and turnkey mechanical system installation for industrial operations."
  },
  { 
    src: "/3.jpeg", 
    title: "Electrical Systems", 
    caption: "Automation and power solutions", 
    details: "Control Systems • Power Distribution • Automation",
    description: "Advanced electrical installations and automation solutions for modern industrial facilities. From power distribution design to programmable logic controller systems, we ensure safety, reliability, and compliance."
  },
  { 
    src: "/4.jpg", 
    title: "Project Delivery", 
    caption: "From design to commissioning", 
    details: "Design • Installation • Commissioning • Support",
    description: "Full-spectrum project execution with a proven track record of on-time delivery. We manage every phase—from detailed design through installation, testing, commissioning, and ongoing technical support."
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [index, paused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-screen md:h-[120vh] lg:h-screen w-full bg-black">
        <AnimatePresence initial={false} mode="wait">
          {slides.map((slide, i) => (
            i === index && (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={slide.src} 
                    alt={slide.title} 
                    fill 
                    className="object-cover w-full h-full" 
                    priority={i === 0} 
                    sizes="100vw"
                    quality={85}
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Banner Content */}
                <div className="relative z-10 h-full w-full flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="mx-auto text-center max-w-2xl"
                    >
                      <div className="mb-3">
                        <span className="inline-block bg-white/10 text-white backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase shadow-sm">
                          {slide.details}
                        </span>
                      </div>
                      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight text-white mb-3 md:mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-4 md:mb-5 font-light">
                        {slide.caption}
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-white/80 mb-7 md:mb-8 leading-relaxed max-w-xl mx-auto font-light">
                        {slide.description}
                      </p>
                      
                      {/* CTA Buttons - Centered; Call button is yellow glass-morphism */}
                      <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3">
                        <a 
                          href="tel:+260955950008" 
                          className="inline-flex items-center justify-center gap-2 bg-[#FFB915]/25 hover:bg-[#FFB915]/35 backdrop-blur-md border border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all hover:shadow-lg"
                        >
                          <Phone className="w-4 h-4 text-white" /> Call
                        </a>
                        <a 
                          href="https://wa.me/260955950008" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center justify-center gap-2 bg-primary/40 hover:bg-primary/60 backdrop-blur-md border border-primary/50 hover:border-primary/80 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
                        >
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                        <a 
                          href="/contact" 
                          className="inline-flex items-center justify-center gap-2 bg-primary/40 hover:bg-primary/60 backdrop-blur-md border border-primary/50 hover:border-primary/80 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
                        >
                          <Award className="w-4 h-4" /> Get Quote
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Indicators - Bottom Center */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.2 }}
              className={`h-3 rounded-full transition-all ${
                i === index 
                  ? 'bg-accent w-8' 
                  : 'bg-white/40 hover:bg-white/60 w-3'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}