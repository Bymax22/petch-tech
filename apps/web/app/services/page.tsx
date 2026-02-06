import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHero from '../components/sections/ServicesHero';
import ServiceCard from '../components/ServiceCard';
import { coreServices, additionalServices } from '../lib/servicesData';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <ServicesHero />

      {/* Core Services */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Core <span className="text-[#BD2227]">Services</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our integrated portfolio of services and supplies tailored to meet complex industrial requirements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

          {/* Detailed Service Sections */}
          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <div key={service.id} className="glass rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left - Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <service.icon className="text-3xl" style={{ color: service.color }} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <p className="text-slate-300 mt-2">{service.shortDescription}</p>
                      </div>
                    </div>

                    {service.details?.sections.map((section, idx) => (
                      <div key={idx} className="mb-6">
                        <h4 className="font-semibold text-white mb-3">{section.title}</h4>
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

                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#BD2227] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                      Request Quote
                      <FiArrowRight />
                    </Link>
                  </div>

                  {/* Right - Image Placeholder */}
                  <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                Need a Custom Solution?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Contact us to discuss your specific requirements. Our team will create a tailored solution for your project.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#BD2227] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Our Experts
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}