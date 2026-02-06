'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

interface FeatureCardProps {
  feature: string;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-[#1185AE]">
          <FiCheckCircle color="white" size={20} />
        </div>
        <p className="font-medium text-white">{feature}</p>
      </div>
    </motion.div>
  );
}