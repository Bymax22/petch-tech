'use client';

import { motion } from 'framer-motion';
import { processSteps } from '../lib/servicesData';
import { FiCheck, FiClipboard, FiPlay, FiTool } from 'react-icons/fi';

const stepIcons = [FiClipboard, FiTool, FiPlay, FiCheck];

export default function ProcessTimeline() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Our Working Process
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Systematic approach to ensure quality, safety, and timely delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#1185AE] hidden md:block" />

          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-12 md:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1185AE] flex items-center justify-center">
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-sm text-[#1185AE] font-semibold">Step {step.step}</div>
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-800 shadow-lg">
                  <div className="w-6 h-6 rounded-full bg-[#1185AE]" />
                </div>

                {/* Empty spacer */}
                <div className="w-full md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}