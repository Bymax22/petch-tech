import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiCalendar, FiMapPin, FiUsers, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Mining Infrastructure Support',
      category: 'Mining Services',
      location: 'Lubumbashi, DRC',
      year: '2024',
      description: 'Complete mining infrastructure support including equipment supply and maintenance.',
      image: '/mining-1.jpeg',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Solar Energy Installation',
      category: 'Energy Solutions',
      location: 'Copperbelt, Zambia',
      year: '2023',
      description: 'Commercial solar power system installation for industrial facility.',
      image: '/energy-1.webp',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Water System Development',
      category: 'Water Infrastructure',
      location: 'Kitwe, Zambia',
      year: '2024',
      description: 'Borehole drilling and water reticulation system for mining camp.',
      image: '/water-1.webp',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Industrial Construction',
      category: 'Engineering',
      location: 'Kinshasa, DRC',
      year: '2023',
      description: 'Industrial building construction and steel structure fabrication.',
      image: '/engineering-1.jpeg',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Petroleum Supply Chain',
      category: 'Petroleum',
      location: 'Cross-border',
      year: '2024',
      description: 'Cross-border petroleum supply and logistics management.',
      image: '/petroleum-1.webp',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'HDPE Pipeline Installation',
      category: 'Infrastructure',
      location: 'Solwezi, Zambia',
      year: '2024',
      description: 'Large-scale HDPE pipeline installation for mining operations.',
      image: '/infrastructure-1.jpg',
      status: 'In Progress'
    }
  ];

  const categories = ['All', 'Mining', 'Energy', 'Water', 'Engineering', 'Petroleum', 'Infrastructure'];

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-[#1185AE]">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing our successful industrial projects across DRC and Zambia
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-slate-300">Projects Delivered</div>
              </div>
              <div className="text-center p-6 border-x border-white/10">
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-slate-300">Countries</div>
              </div>
              <div className="text-center p-6 border-r border-white/10">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-300">Success Rate</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-slate-300">Active Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full glass border border-white/10 hover:bg-white/5 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="glass rounded-3xl overflow-hidden group hover:bg-white/5 transition-all">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </div>
                  
                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1185AE] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <FiMapPin size={14} />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <FiCalendar size={14} />
                      {project.year}
                    </div>
                  </div>

                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-[#1185AE] text-sm font-medium mt-6 group/link"
                  >
                    View Case Study
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your Next Project
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to bring your industrial project to life? Contact us for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-[#BD2227] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Start a Project
              </Link>
              <Link 
                href="/services"
                className="glass border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}