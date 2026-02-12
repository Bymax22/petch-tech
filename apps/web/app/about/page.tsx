"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Target, Eye, Users, Award, Clock, 
  MapPin, TrendingUp, Shield 
} from "lucide-react";
import InteractiveServiceSelector from "../components/ui/InteractiveServiceSelector";

export default function AboutPage() {
  const milestones = [
    { year: "2011", title: "Company Founded", description: "Started as engineering supplies provider in Ndola" },
    { year: "2013", title: "First Major Contract", description: "Secured mining contract in Copperbelt region" },
    { year: "2015", title: "Service Diversification", description: "Expanded into contracting and fabrication services" },
    { year: "2018", title: "Regional Expansion", description: "Opened offices in Kitwe and Lusaka" },
    { year: "2020", title: "Equipment Upgrade", description: "Invested in modern machinery and tools" },
    { year: "2023", title: "200+ Projects", description: "Milestone of 200+ successful projects completed" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Zero-harm policy and strict safety compliance",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Commitment to quality in every project",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach with clients and partners",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Adopting latest technologies and methods",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "On-time delivery and dependable service",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Transparent and ethical business practices",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg"
            alt="About Hero"
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
              Engineering <span className="text-accent">Excellence</span> Since 2011
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We are a premier engineering firm delivering comprehensive solutions across Zambia's industrial sectors. 
              With over 13 years of experience, we've built a reputation for reliability, quality, and innovation.
            </p>
            <div className="flex items-center space-x-4 text-white">
              <MapPin className="w-5 h-5" />
              <span>Headquartered in Ndola, serving all of Zambia</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2011, Petch-Tech Engineering started as a specialized supplier of mining and industrial 
                consumables. Recognizing the growing demand for comprehensive engineering solutions, we expanded 
                our services to include contracting, fabrication, and maintenance.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to be one of Zambia's leading engineering firms, with a track record of 
                200+ successful projects across mining, petroleum, manufacturing, and infrastructure sectors.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-secondary/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold font-heading text-primary mb-2">13+</div>
                  <div className="font-medium">Years Experience</div>
                </div>
                <div className="bg-secondary/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold font-heading text-primary mb-2">18+</div>
                  <div className="font-medium">Expert Engineers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden h-96">
                <Image
                  src="/placeholder.svg"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 bg-white rounded-xl shadow-xl p-6">
                <h3 className="font-bold font-heading text-lg mb-2">Peter Kunda</h3>
                <p className="text-muted-foreground mb-3">Technical Director</p>
                <p className="text-sm text-muted-foreground">
                  20+ years experience in industrial engineering and project management
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To deliver innovative, reliable, and cost-effective engineering solutions that empower 
                Zambia's industrial growth while maintaining the highest standards of safety, quality, 
                and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To become Zambia's most trusted engineering partner, recognized for excellence in 
                transforming industrial challenges into sustainable solutions that drive economic 
                development and create lasting value for our clients and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our <span className="text-primary">Milestones</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of growth, innovation, and excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Year */}
                <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold font-heading shadow-lg">
                      {milestone.year}
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full hidden md:block" 
                      style={{ 
                        left: index % 2 === 0 ? 'auto' : 'calc(100% + 8px)',
                        right: index % 2 === 0 ? 'calc(100% + 8px)' : 'auto'
                      }} 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 px-0 md:px-12">
                  <div className={`bg-white rounded-xl p-6 shadow-lg ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}>
                    <h3 className="text-xl font-bold font-heading mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Find Your <span className="text-primary">Solution</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our interactive selector to find the perfect engineering solution for your needs
            </p>
          </motion.div>

          <InteractiveServiceSelector />
        </div>
      </section>
    </>
  );
}