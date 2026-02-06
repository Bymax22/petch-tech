import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ServiceDetailSection from './components/ServiceDetailSection';
import StatsSection from './components/StatsSection';
import ProcessTimeline from './components/ProcessTimeline';
import Footer from './components/Footer';
import { coreServices, additionalServices } from './lib/servicesData';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <Hero />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Image */}
              <div 
                className="h-64 lg:h-full min-h-[400px] bg-cover bg-center"
                style={{ backgroundImage: "url('/about-company.jpg')" }}
              >
                <div className="relative h-full flex items-end p-6 lg:p-8">
                  <div className="glass p-4 rounded-xl max-w-md">
                    <h3 className="font-bold text-white mb-2">Operating Since 2014</h3>
                    <p className="text-sm text-slate-300">Trusted partner in industrial services</p>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  About <span className="text-[#1185AE]">DN Multi Services</span>
                </h2>
                
                <div className="space-y-4 text-slate-300">
                  <p>
                    DN Multi Services Supply Ltd is a cross-border industrial services and supply company operating in the Democratic Republic of Congo and Zambia. We support mining, construction, energy, and infrastructure projects through reliable, technically compliant, and efficiently delivered solutions.
                  </p>
                  <p>
                    With our headquarters strategically located to serve both DRC and Zambia, we have established ourselves as a trusted partner for major industrial projects across the region.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: 'Quality Certified', value: 'ISO Standards' },
                    { label: 'Safety Record', value: 'Zero Accidents' },
                    { label: 'Delivery Rate', value: '99.5% On Time' },
                    { label: 'Client Retention', value: '95%+' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link href="/about" className="mt-8 border border-white/20 px-6 py-3 rounded-xl font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                  Download Company Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Our <span className="text-[#BD2227]">Core Services</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to meet the unique demands of mining, engineering, and infrastructure projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                iconName={service.id}
                index={index}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {coreServices.slice(0, 3).map((service, index) => (
        <ServiceDetailSection
          key={service.id}
          title={service.title}
          description={service.fullDescription}
          iconName={service.id}
          color={service.color}
          details={{
            sections: service.details.sections.map(section => ({
              title: section.title,
              items: section.items,
              iconName: section.title.toLowerCase().replace(/\s+/g, '_')
            }))
          }}
          image={service.image}
          index={index}
        />
      ))}

      {/* Additional Services */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Additional <span className="text-[#1185AE]">Services & Supplies</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Specialized solutions to complement our core offerings
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1185AE] flex items-center justify-center mb-4">
                  <service.icon className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1185AE]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#1185AE]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#BD2227]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Let's build reliable industrial solutions together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#BD2227] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-white text-center">
                  Get Free Quote
                </Link>
                <a href="tel:+260770970511" className="glass border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors text-white text-center">
                  Call Now: +260 770 970 511
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