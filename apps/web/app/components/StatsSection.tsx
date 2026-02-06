'use client';

import { motion } from 'framer-motion';
import { companyStats } from '../lib/servicesData';

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Our Impact & Reach
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Delivering excellence across DRC and Zambia with proven track record
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">DRC Operations</div>
              <div className="text-sm text-slate-300">Full-service coverage</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">Zambia Operations</div>
              <div className="text-sm text-slate-300">Cross-border expertise</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">24/7 Support</div>
              <div className="text-sm text-slate-300">Always available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}