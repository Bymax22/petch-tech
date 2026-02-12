"use client";

import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, MessageCircle, 
  Calendar, FileText, ChevronRight 
} from "lucide-react";

export default function CTASection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute w-32 h-32 rounded-full border border-primary/10 ${
              i === 0 ? "top-10 left-10" :
              i === 1 ? "bottom-10 right-10" :
              "top-1/2 left-1/2"
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Start Your <span className="text-primary">Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our engineering team for a free consultation and quote. 
              We'll assess your requirements and provide a comprehensive solution.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <a 
                    href="tel:+260955950008" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    +260 955 950 008
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <a 
                    href="mailto:info@petch-tech.com" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    info@petch-techengineeringservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-muted-foreground">
                    Plot D6 Arusha Street, Light Industrial Area, Ndola, Zambia
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 p-4 rounded-xl glass-effect hover:shadow-lg transition-all">
                <MessageCircle className="w-5 h-5" />
                <span>Live Chat</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 rounded-xl glass-effect hover:shadow-lg transition-all">
                <Calendar className="w-5 h-5" />
                <span>Schedule Meeting</span>
              </button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold font-heading mb-2">
              Get a <span className="text-accent">Free Quote</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+260 955 950 008"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Needed *
                </label>
                <select className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                  <option value="">Select a service</option>
                  <option value="civil">Civil Works</option>
                  <option value="mechanical">Mechanical Engineering</option>
                  <option value="electrical">Electrical & Automation</option>
                  <option value="instrumentation">Instrumentation</option>
                  <option value="fabrication">Fabrication</option>
                  <option value="repairs">Industrial Repairs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" required className="rounded" />
                  <span className="text-sm">
                    I agree to the terms and conditions
                  </span>
                </label>
                <button
                  type="submit"
                  className="group bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
                >
                  Submit Request
                  <ChevronRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Your project is protected by our quality guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "ISO 9001 Certified",
              "Safety Focused",
              "24/7 Support",
              "On-time Delivery",
              "Warranty Included",
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-full glass-effect"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}