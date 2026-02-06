'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';
import { 
  FaHardHat,
  FaIndustry,
  FaSolarPanel,
  FaOilCan,
  FaWater,
  FaMountain,
  FaWarehouse,
  FaCogs
} from 'react-icons/fa';
import { GiMining, GiConcreteBag, GiMetalBar } from 'react-icons/gi';
import { FiTruck, FiZap, FiDroplet } from 'react-icons/fi';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName?: string;
  icon?: IconType;
  index: number;
  color?: string;
}

const iconMap: { [key: string]: IconType } = {
  engineering: FaHardHat,
  mining: GiMining,
  transportation: FiTruck,
  energy: FiZap,
  industrial: FaIndustry,
  solar: FaSolarPanel,
  petroleum: FaOilCan,
  water: FaWater,
  mountain: FaMountain,
  warehouse: FaWarehouse,
  cogs: FaCogs,
};

export default function ServiceCard({ title, description, iconName, icon, index, color = '#1185AE' }: ServiceCardProps) {
  const Icon = icon || iconMap[iconName as string] || FaHardHat;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-light rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
    >
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="text-2xl" style={{ color }} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#1185AE] transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium" style={{ color }}>
        <span>Learn more</span>
        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}