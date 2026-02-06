import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FiPackage, 
  FiTruck, 
  FiTool, 
  FiZap, 
  FiDroplet,
  FiHardDrive,
  FiShield,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi';
import { 
  FaIndustry,
  FaOilCan,
  FaWarehouse,
  FaCogs,
  FaWater,
  FaSolarPanel
} from 'react-icons/fa';
import { GiMining, GiMetalBar, GiConcreteBag } from 'react-icons/gi';
import Link from 'next/link';

export default function SuppliesPage() {
  const supplyCategories = [
    {
      id: 'mining',
      title: 'Mining Equipment & Consumables',
      icon: GiMining,
      color: '#BD2227',
      description: 'Complete range of mining machinery, tools, and consumables for efficient mining operations.',
      items: [
        'Heavy-duty mining equipment',
        'Drilling rigs and accessories',
        'Mining consumables and chemicals',
        'Safety equipment for mining operations',
        'Industrial acids and sulphur',
        'Coal and mineral transportation equipment'
      ],
      image: '/mining-equipment.jpg'
    },
    {
      id: 'construction',
      title: 'Construction Machinery',
      icon: GiConcreteBag,
      color: '#1185AE',
      description: 'Earthmoving and construction equipment for infrastructure and development projects.',
      items: [
        'Excavators and bulldozers',
        'Loaders and graders',
        'Concrete mixers and pumps',
        'Compaction equipment',
        'Scaffolding and formwork',
        'Construction tools and accessories'
      ],
      image: '/construction-machinery.jpg'
    },
    {
      id: 'agricultural',
      title: 'Agricultural Machinery',
      icon: FaIndustry,
      color: '#1185AE',
      description: 'Modern agricultural equipment for large-scale farming and land preparation.',
      items: [
        'Tractors and harvesters',
        'Plows and cultivators',
        'Irrigation systems',
        'Storage and handling equipment',
        'Agricultural tools',
        'Farm implements'
      ],
      image: '/agricultural-machinery.webp'
    },
    {
      id: 'energy',
      title: 'Energy & Electrical Equipment',
      icon: FiZap,
      color: '#BD2227',
      description: 'Complete solar energy systems and electrical equipment for industrial and residential use.',
      items: [
        'Solar panels and inverters',
        'Batteries and energy storage',
        'Electrical cables and accessories',
        'Switchgear and control panels',
        'Transformers and generators',
        'Lighting and power systems'
      ],
      image: '/energy-equipment.jpg'
    },
    {
      id: 'water',
      title: 'Water Systems & Piping',
      icon: FiDroplet,
      color: '#1185AE',
      description: 'Water infrastructure equipment including pumps, pipes, and treatment systems.',
      items: [
        'Borehole drilling equipment',
        'Water pumps (electric & solar)',
        'HDPE piping systems',
        'Water treatment plants',
        'Storage tanks and reservoirs',
        'Irrigation systems'
      ],
      image: '/water-systems.jpg'
    },
    {
      id: 'petroleum',
      title: 'Petroleum Equipment',
      icon: FaOilCan,
      color: '#BD2227',
      description: 'Petroleum handling and storage equipment for safe and efficient operations.',
      items: [
        'Fuel storage tanks',
        'Dispensing equipment',
        'Pipelines and valves',
        'Safety and containment systems',
        'Transportation containers',
        'Monitoring equipment'
      ],
      image: '/petroleum-equipment.jpg'
    },
    {
      id: 'industrial',
      title: 'Industrial Materials',
      icon: FaWarehouse,
      color: '#1185AE',
      description: 'Wide range of industrial materials and components for various applications.',
      items: [
        'Steel and metal products',
        'Construction materials',
        'Industrial chemicals',
        'Lubricants and greases',
        'Fasteners and hardware',
        'Industrial tools'
      ],
      image: '/industrial-materials.webp'
    },
    {
      id: 'spare-parts',
      title: 'Spare Parts & PPE',
      icon: FaCogs,
      color: '#BD2227',
      description: 'Genuine spare parts and personal protective equipment for industrial safety.',
      items: [
        'Mining equipment spare parts',
        'Engine and mechanical parts',
        'Electrical components',
        'Safety gear and PPE',
        'Maintenance tools',
        'Consumable supplies'
      ],
      image: '/spare-parts.jpg'
    }
  ];

  const featuredSupplies = [
    {
      title: 'HDPE Piping Systems',
      description: 'High-quality PE100 HDPE pipes for mining, industrial, and infrastructure applications',
      specs: [
        'Operating temperature: -40°C to +80°C',
        'Resistant to acids, alkalis, and solvents',
        'UV-stabilized for outdoor use',
        'Pressure ratings up to 25 bar'
      ],
      icon: FiHardDrive,
      applications: ['Mining slurry transport', 'Water supply systems', 'Industrial fluid handling']
    },
    {
      title: 'Heavy Earthmoving Equipment',
      description: 'Robust earthmoving machinery for construction and mining applications',
      specs: [
        'Engine power: 150-450 HP',
        'Bucket capacity: 1-5 cubic meters',
        'Advanced hydraulic systems',
        'Operator safety features'
      ],
      icon: FiTruck,
      applications: ['Excavation work', 'Site preparation', 'Material handling']
    },
    {
      title: 'Solar Power Systems',
      description: 'Complete solar energy solutions for industrial and residential use',
      specs: [
        'Panel efficiency: 20-22%',
        'System capacity: 5kW - 1MW',
        'Battery backup options',
        'Grid-tie and off-grid configurations'
      ],
      icon: FaSolarPanel,
      applications: ['Industrial power', 'Remote operations', 'Residential energy']
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Industrial <span className="text-[#1185AE]">Supplies</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive range of equipment, machinery, and materials for mining, construction, energy, and industrial applications
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-slate-300">Equipment Types</div>
              </div>
              <div className="text-center p-6 border-x border-white/10">
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-slate-300">Countries Stocked</div>
              </div>
              <div className="text-center p-6 border-r border-white/10">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-300">Supply Support</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-300">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Supplies */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Featured <span className="text-[#BD2227]">Products</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              High-demand equipment and materials with proven performance in industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredSupplies.map((product, index) => (
              <div key={index} className="glass rounded-3xl overflow-hidden group hover:bg-white/10 transition-all">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#1185AE] flex items-center justify-center">
                      <product.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                  </div>
                  
                  <p className="text-slate-300 mb-6">{product.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Key Specifications:</h4>
                      <ul className="space-y-1">
                        {product.specs.map((spec, idx) => (
                          <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1185AE]" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="w-full mt-8 bg-[#BD2227] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Request Quote
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Supply Categories */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Supply <span className="text-[#1185AE]">Categories</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Browse our comprehensive range of industrial equipment and materials
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplyCategories.map((category) => (
              <div 
                key={category.id} 
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon className="text-2xl" style={{ color: category.color }} />
                </div>
                
                <h3 className="font-semibold text-white mb-3 group-hover:text-[#1185AE] transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-sm text-slate-300 mb-4">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.items.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FiCheckCircle className="text-[#1185AE] flex-shrink-0" size={14} />
                      <span className="text-xs text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button className="text-sm font-medium text-[#1185AE] hover:text-[#BD2227] transition-colors flex items-center gap-1">
                    View Details
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HDPE Piping Special Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#1185AE] flex items-center justify-center">
                    <FiHardDrive className="text-white text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">HDPE Piping Systems</h2>
                    <p className="text-slate-300">PE100 High-Density Polyethylene</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Our HDPE piping systems are manufactured to stringent international standards, offering exceptional durability, flexibility, and safety for demanding industrial applications.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Physical & Technical Properties</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Tensile Strength', value: 'Excellent' },
                        { label: 'Impact Resistance', value: 'High' },
                        { label: 'Flexibility', value: 'Superior' },
                        { label: 'Corrosion Resistance', value: 'Complete' },
                        { label: 'Temperature Range', value: '-40°C to +80°C' },
                        { label: 'Pressure Rating', value: 'Up to 25 bar' }
                      ].map((prop, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-slate-400">{prop.label}</div>
                          <div className="font-medium text-white">{prop.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-3">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Mining slurry transport',
                        'Water supply systems',
                        'Industrial chemical conveyance',
                        'Irrigation networks',
                        'Municipal infrastructure',
                        'Hazardous material handling'
                      ].map((app, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Specifications */}
              <div className="p-8 lg:p-12 bg-[#1185AE]/20">
                <h3 className="font-bold text-white mb-6 text-lg">Standards & Specifications</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <FiShield />
                      Quality Standards
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'ISO 4427:2007 Compliance',
                        'PE100 Material Grade',
                        'SDR (Standard Dimension Ratio) Rated',
                        'Carbon-black UV Stabilization',
                        'Food-grade certified options available'
                      ].map((std, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                          <FiCheckCircle className="text-[#1185AE] flex-shrink-0" />
                          {std}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <FiTool />
                      Available Sizes
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {['20mm', '32mm', '50mm', '75mm', '110mm', '160mm', '200mm', '315mm', '500mm'].map((size) => (
                        <div key={size} className="text-center">
                          <div className="bg-white/10 rounded-lg py-2 text-white font-medium">
                            {size}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#BD2227] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    Download Technical Datasheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Process */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Our Supply <span className="text-[#BD2227]">Process</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Efficient and reliable supply chain management from sourcing to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Requirement Analysis',
                description: 'Understanding your specific equipment needs'
              },
              {
                step: '02',
                title: 'Sourcing & Quality Check',
                description: 'Procuring from verified suppliers with quality assurance'
              },
              {
                step: '03',
                title: 'Logistics & Shipping',
                description: 'Efficient cross-border transportation and customs clearance'
              },
              {
                step: '04',
                title: 'Delivery & Support',
                description: 'On-time delivery with installation support if required'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1185AE] flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-white">{process.step}</div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-300">{process.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#1185AE]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                Need Equipment or Materials?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Contact our supply team for competitive quotes, technical specifications, and delivery schedules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-[#BD2227] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Request Supply Quote
                </Link>
                <a 
                  href="/catalog/supplies-catalog.pdf"
                  className="glass border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors"
                >
                  Download Full Catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}