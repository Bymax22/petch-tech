import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiCheckCircle, FiUsers, FiTarget, FiAward, FiGlobe, FiClock, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              About <span className="text-[#1185AE]">Us</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leading industrial services and supply company operating across DRC and Zambia since 2014
            </p>
          </div>

          <div className="glass rounded-3xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2">
              {/* Left - Image */}
              <div 
                className="h-64 lg:h-full min-h-[400px] bg-cover bg-center"
                style={{ backgroundImage: "url('/about-hero.jpg')" }}
              >
                <div className="relative h-full flex items-end p-6 lg:p-8">
                  <div className="glass p-6 rounded-xl max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#BD2227] flex items-center justify-center">
                        <FiClock className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">Since 2014</div>
                        <div className="text-sm text-slate-300">Years of Excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold mb-6 text-white">Company Overview</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    DN Multi Services Supply Ltd is a cross-border industrial services and supply company operating in the Democratic Republic of Congo and Zambia. We support mining, construction, energy, and infrastructure projects through reliable, technically compliant, and efficiently delivered solutions.
                  </p>
                  <p>
                    Our service delivery model emphasizes reliability, technical compliance, and timely execution, ensuring that we meet the complex requirements of industrial and infrastructure-driven sectors.
                  </p>
                  <p>
                    With strategic operations in both DRC and Zambia, we have established ourselves as a trusted partner for major industrial projects, delivering excellence through our experienced team and comprehensive service portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#BD2227] flex items-center justify-center">
                  <FiTarget className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300">
                To deliver integrated industrial services and supplies that empower mining, construction, energy, and infrastructure projects across DRC and Zambia, ensuring safety, quality, and sustainability in every solution we provide.
              </p>
            </div>

            {/* Vision */}
            <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#1185AE] flex items-center justify-center">
                  <FiGlobe className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-slate-300">
                To be the leading industrial services partner in Central and Southern Africa, recognized for innovation, reliability, and excellence in supporting sustainable industrial development and economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Our <span className="text-[#1185AE]">Core Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Safety First',
                description: 'Prioritizing safety in all operations',
                icon: FiCheckCircle,
                color: '#1185AE'
              },
              {
                title: 'Quality Excellence',
                description: 'Delivering superior quality services',
                icon: FiAward,
                color: '#BD2227'
              },
              {
                title: 'Reliability',
                description: 'Consistent and dependable service delivery',
                icon: FiUsers,
                color: '#1185AE'
              },
              {
                title: 'Integrity',
                description: 'Ethical and transparent operations',
                icon: FiCheckCircle,
                color: '#BD2227'
              }
            ].map((value, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="text-2xl" style={{ color: value.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#1185AE] flex items-center justify-center">
                <FiMapPin className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-white">Geographic Presence</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Democratic Republic of Congo</h3>
                <ul className="space-y-3">
                  {[
                    'Mining regions support',
                    'Industrial supply networks',
                    'Infrastructure projects',
                    'Cross-border logistics hub'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[#1185AE]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Zambia</h3>
                <ul className="space-y-3">
                  {[
                    'Copperbelt operations',
                    'Energy solutions deployment',
                    'Agricultural support',
                    'Major infrastructure projects'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[#BD2227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
              Partner with Us
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust DN Multi Services for their industrial needs.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-[#BD2227] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
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