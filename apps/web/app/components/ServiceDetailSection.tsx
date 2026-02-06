'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
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

interface ServiceDetail {
  title: string;
  items: string[];
  iconName?: string;
}

interface ServiceDetailSectionProps {
  title: string;
  description: string;
  iconName: string;
  details: {
    sections: ServiceDetail[];
  };
  image: string;
  index: number;
  color: string;
}

const iconMap: { [key: string]: IconType } = {
  engineering: FaHardHat,
  mining: GiMining,
  industrial: FaIndustry,
  energy: FaSolarPanel,
  petroleum: FaOilCan,
  water: FaWater,
  mountain: FaMountain,
  warehouse: FaWarehouse,
  cogs: FaCogs,
};

export default function ServiceDetailSection({
  title,
  description,
  iconName,
  details,
  image,
  index,
  color
}: ServiceDetailSectionProps) {
  const Icon = iconMap[iconName] || FaHardHat;
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon className="text-3xl" style={{ color }} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
                  <p className="text-slate-300 mt-2">{description}</p>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                {details.sections.map((section, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <FiCheck color={color} />
                      <h3 className="font-semibold text-white">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-sm text-slate-300">
                          <FiCheck className="text-[#1185AE] mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="mt-8 bg-[#BD2227] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                Request Quote
                <FiArrowRight />
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass p-4 rounded-xl">
                  <h4 className="font-semibold text-white mb-3">Key Benefits</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Quality Assurance', 'Timely Delivery', 'Expert Team', 'Cost Effective'].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                        <span className="text-xs text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}