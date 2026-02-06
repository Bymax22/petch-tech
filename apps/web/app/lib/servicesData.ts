import { 
  FiTruck, 
  FiZap, 
  FiDroplet, 
  FiTool,
  FiCpu,
  FiPackage,
  FiGrid,
  FiShield,
  FiCheckCircle,
  FiMapPin,
  FiMail,
  FiPhone,
  FiArrowRight
} from 'react-icons/fi';
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

export const coreServices = [
  {
    id: 'engineering',
    title: 'Engineering, Construction & Earth Works',
    shortDescription: 'Comprehensive engineering solutions for infrastructure and mining projects',
    fullDescription: 'DN Multi Services Supply Ltd delivers comprehensive engineering and construction services that support infrastructure development, mining operations, and commercial projects. Our approach combines technical expertise, reliable equipment, and experienced personnel to ensure projects are executed safely, efficiently, and to specification.',
    icon: FaHardHat,
    color: '#1185AE',
    features: [
      'Civil Engineering & Construction',
      'Earth Works Solutions',
      'Project Execution Approach',
      'Structural works and foundations'
    ],
    details: {
      sections: [
        {
          title: 'Civil Engineering & Construction',
          items: [
            'Construction of commercial and industrial buildings',
            'Residential housing developments',
            'Foundations, concrete works, and structural works',
            'Drainage systems and related infrastructure'
          ],
          icon: GiConcreteBag
        },
        {
          title: 'Earth Works Solutions',
          items: [
            'Excavation and bulk earth movement',
            'Site clearing, grading, and land preparation',
            'Trenching for utilities, pipelines, and drainage',
            'Backfilling and compaction works'
          ],
          icon: FaMountain
        }
      ]
    },
    image: '/engineering.jpeg'
  },
  {
    id: 'mining',
    title: 'Mining Services & Supplies',
    shortDescription: 'Complete mining support with quality supplies and equipment',
    fullDescription: 'Comprehensive mining support services including supply of industrial acids, sulphur, copper and mineral transportation, coal supply, and mining consumables.',
    icon: GiMining,
    color: '#BD2227',
    features: [
      'Supply of industrial acids and sulphur',
      'Copper and mineral transportation',
      'Coal supply for industrial applications',
      'Mining consumables and heavy equipment'
    ],
    details: {
      sections: [
        {
          title: 'Mining Supplies',
          items: [
            'Supply of industrial acids and sulphur',
            'Copper and mineral transportation services',
            'Coal supply for industrial and processing applications',
            'Supply of mining consumables and heavy-duty equipment'
          ],
          icon: FaIndustry
        }
      ]
    },
    image: '/mining.jpg'
  },
  {
    id: 'transportation',
    title: 'Transportation & Logistics',
    shortDescription: 'Cross-border logistics between DRC and Zambia',
    fullDescription: 'Bulk transportation of liquid, solid, and hazardous materials with secure and compliant handling of industrial cargo.',
    icon: FiTruck,
    color: '#1185AE',
    features: [
      'Bulk transportation services',
      'Cross-border DRC-Zambia logistics',
      'Secure industrial cargo handling',
      'Compliance with transport regulations'
    ],
    details: {
      sections: [
        {
          title: 'Bulk Transportation',
          items: [
            'Liquid cargo transportation services',
            'Solid material transport and handling',
            'Hazardous materials transport (fully compliant)',
            'Cross-border logistics DRC-Zambia'
          ],
          icon: FiTruck
        },
        {
          title: 'Supply Chain Solutions',
          items: [
            'Secure industrial cargo handling',
            'Full compliance with transport regulations',
            'Real-time tracking and monitoring',
            'Flexible scheduling and routing'
          ],
          icon: FiPackage
        }
      ]
    },
    image: '/transportation.jpg'
  },
  {
    id: 'energy',
    title: 'Energy & Electrical Solutions',
    shortDescription: 'Sustainable energy and electrical infrastructure',
    fullDescription: 'Reliable energy and electrical solutions designed to meet the growing demand for sustainable power and efficient electrical infrastructure.',
    icon: FiZap,
    color: '#1185AE',
    features: [
      'Commercial and residential solar systems',
      'Solar panel installation',
      'Electrical installation services',
      'Energy storage solutions'
    ],
    details: {
      sections: [
        {
          title: 'Solar Energy Solutions',
          items: [
            'Design and installation of commercial solar power systems',
            'Residential solar energy systems',
            'Supply of solar panels, inverters, batteries, and accessories',
            'Solar-powered water pumping systems'
          ],
          icon: FaSolarPanel
        },
        {
          title: 'Electrical Services',
          items: [
            'Industrial electrical installations and maintenance',
            'Commercial electrical wiring and power systems',
            'Residential electrical installations',
            'Troubleshooting, upgrades, and system expansions'
          ],
          icon: FiCpu
        }
      ]
    },
    image: '/energy.jpg'
  },
  {
    id: 'water',
    title: 'Water & Infrastructure Solutions',
    shortDescription: 'Reliable water access and distribution systems',
    fullDescription: 'Dependable water and infrastructure solutions that support mining operations, industrial facilities, agricultural projects, and residential developments.',
    icon: FiDroplet,
    color: '#1185AE',
    features: [
      'Borehole drilling services',
      'Water reticulation systems',
      'Pumping solutions',
      'HDPE piping systems'
    ],
    details: {
      sections: [
        {
          title: 'Borehole Drilling Services',
          items: [
            'Borehole drilling for industrial, commercial, and residential use',
            'Site assessment and drilling supervision',
            'Installation of casing, pumps, and related equipment'
          ],
          icon: FaWater
        },
        {
          title: 'Water Reticulation Systems',
          items: [
            'Design and installation of water distribution networks',
            'HDPE piping systems for durability and efficiency',
            'Storage tanks and system integration'
          ],
          icon: FiGrid
        }
      ]
    },
    image: '/water.jpg'
  },
  {
    id: 'petroleum',
    title: 'Petroleum & Related Products',
    shortDescription: 'Quality petroleum products with full compliance',
    fullDescription: 'Petroleum and related product solutions tailored to support mining operations, construction projects, and industrial facilities.',
    icon: FaOilCan,
    color: '#BD2227',
    features: [
      'Petroleum supply services',
      'Safe handling and transportation',
      'Compliance with regulations',
      'Risk management'
    ],
    details: {
      sections: [
        {
          title: 'Petroleum Supply Services',
          items: [
            'Supply of fuel and related petroleum products',
            'Support for mining, construction, and logistics operations',
            'Reliable sourcing through approved supply channels'
          ],
          icon: FaOilCan
        },
        {
          title: 'Compliance & Risk Management',
          items: [
            'Adherence to petroleum, safety, and environmental regulations',
            'Risk mitigation procedures for spill prevention',
            'Trained personnel for handling operations'
          ],
          icon: FiShield
        }
      ]
    },
    image: '/petroleum.jpeg'
  }
];

export const additionalServices = [
  {
    title: 'Heavy Machinery Supply',
    description: 'Supply of heavy-duty equipment for mining, construction, and agriculture',
    icon: FaWarehouse,
    items: [
      'Mining machinery and support equipment',
      'Earthmoving equipment for construction',
      'Agricultural machinery for large-scale farming'
    ]
  },
  {
    title: 'HDPE Piping Systems',
    description: 'High-quality HDPE pipes for industrial and infrastructure applications',
    icon: FiPackage,
    items: [
      'Mining slurry and water transportation',
      'Industrial fluid and chemical conveyance',
      'Water supply and irrigation systems'
    ]
  },
  {
    title: 'Metal Construction',
    description: 'Design, fabrication, and installation of steel structures',
    icon: GiMetalBar,
    items: [
      'Industrial and commercial steel structures',
      'Custom fabrication services',
      'Professional installation teams'
    ]
  },
  {
    title: 'Equipment Maintenance',
    description: 'Preventive and corrective servicing of heavy machinery',
    icon: FaCogs,
    items: [
      'Preventive maintenance programs',
      'Corrective repairs and overhauls',
      'Genuine spare parts supply'
    ]
  }
];

export const companyStats = [
  { label: 'Projects Completed', value: '150+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Countries', value: '2' },
  { label: 'Client Satisfaction', value: '98%' }
];

export const processSteps = [
  { step: 1, title: 'Consultation', description: 'Understanding your project requirements' },
  { step: 2, title: 'Planning', description: 'Detailed project planning and resource allocation' },
  { step: 3, title: 'Execution', description: 'Efficient implementation with quality control' },
  { step: 4, title: 'Support', description: 'Ongoing maintenance and support services' }
];