import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageSquare } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Get in <span className="text-[#1185AE]">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact us for industrial services and supply solutions across DRC and Zambia
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="glass rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1185AE] flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a 
                        href="mailto:dnmultiservicesupply@outlook.com"
                        className="text-slate-300 hover:text-[#1185AE] transition-colors"
                      >
                        info@dnmultiservices.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#BD2227] flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <a 
                        href="tel:+260123456789"
                        className="text-slate-300 hover:text-[#1185AE] transition-colors"
                      >
                        +260 770 970 511
                      </a>
                      <p className="text-sm text-slate-400 mt-1">24/7 Emergency Support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1185AE] flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-slate-300">Zambia & DRC Offices</p>
                      <p className="text-sm text-slate-400 mt-1">Cross-border operations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1185AE] flex items-center justify-center flex-shrink-0">
                      <FiClock className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Working Hours</h4>
                      <p className="text-slate-300">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-slate-300">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Inquiry */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Quick Inquiry</h3>
                <p className="text-slate-300 mb-6">
                  For urgent inquiries, fill out our quick form and we'll get back to you within 24 hours.
                </p>
                <a href="tel:+260770970511" className="w-full bg-[#BD2227] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <FiMessageSquare />
                  Call: +260 770 970 511
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map/Service Areas */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Service Areas</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Democratic Republic of Congo</h4>
                <ul className="space-y-2">
                  {[
                    'Lubumbashi Region',
                    'Kolwezi Mining Area',
                    'Kinshasa Operations',
                    'Katanga Province',
                    'South Kivu'
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[#1185AE]" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Zambia</h4>
                <ul className="space-y-2">
                  {[
                    'Copperbelt Province',
                    'Lusaka Region',
                    'Ndola Operations',
                    'Kitwe Mining Hub',
                    'Solwezi District'
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[#BD2227]" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}