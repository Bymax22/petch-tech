import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiShield, FiCheckCircle, FiUsers, FiTarget, FiAlertTriangle, FiFileText } from 'react-icons/fi';

export default function QHSEPage() {
  const policies = [
    {
      title: 'Quality Policy',
      description: 'We are committed to delivering services that meet or exceed customer expectations through continuous improvement and adherence to international standards.',
      icon: FiCheckCircle,
      color: '#1185AE'
    },
    {
      title: 'Health & Safety',
      description: 'Protecting the health and safety of our employees, contractors, and communities is our highest priority in all operations.',
      icon: FiShield,
      color: '#BD2227'
    },
    {
      title: 'Environmental Stewardship',
      description: 'We minimize environmental impact through sustainable practices, waste reduction, and responsible resource management.',
      icon: FiTarget,
      color: '#1185AE'
    },
    {
      title: 'Compliance & Ethics',
      description: 'We operate with integrity, complying with all applicable laws, regulations, and ethical standards in DRC and Zambia.',
      icon: FiFileText,
      color: '#BD2227'
    }
  ];

  const procedures = [
    'Risk Assessment & Management',
    'Incident Reporting & Investigation',
    'Emergency Response Planning',
    'Environmental Impact Assessments',
    'Compliance Audits',
    'Continuous Improvement Programs'
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-[#1185AE]">QHSE</span> Standards
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quality, Health, Safety, and Environment - Our commitment to excellence and responsibility
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-slate-300">Lost-time Incidents</div>
              </div>
              <div className="text-center p-6 border-x border-white/10">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-300">Compliance Rate</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-white mb-2">ISO</div>
                <div className="text-slate-300">Certified Standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QHSE Policies */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Our <span className="text-[#BD2227]">QHSE Policies</span>
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Comprehensive policies ensuring safety, quality, and environmental responsibility in all operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div 
                key={index} 
                className="glass rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${policy.color}20` }}
                >
                  <policy.icon className="text-2xl" style={{ color: policy.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{policy.title}</h3>
                <p className="text-slate-300">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Procedures */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#BD2227] flex items-center justify-center">
                    <FiAlertTriangle className="text-white text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Safety Procedures</h2>
                </div>
                
                <p className="text-slate-300 mb-8">
                  Our comprehensive safety procedures ensure that every project is executed with the highest regard for the well-being of our team, clients, and the environment.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {procedures.map((procedure, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#1185AE]" />
                      <span className="text-slate-300 text-sm">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Image */}
              <div 
                className="h-64 lg:h-full min-h-[300px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/safety-procedures.jpg')" }}
              >
                <div className="absolute inset-0 bg-slate-950/80 lg:bg-slate-950/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Certifications & <span className="text-[#1185AE]">Standards</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'ISO 9001', desc: 'Quality Management' },
              { name: 'ISO 14001', desc: 'Environmental Management' },
              { name: 'OHSAS 18001', desc: 'Occupational Health & Safety' },
              { name: 'Local Compliance', desc: 'DRC & Zambia Regulations' }
            ].map((cert, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-xl bg-[#1185AE] flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="text-white text-2xl" />
                </div>
                <div className="text-lg font-bold text-white mb-2">{cert.name}</div>
                <div className="text-sm text-slate-300">{cert.desc}</div>
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
              Commitment to Excellence
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our QHSE standards ensure that every project is delivered with safety, quality, and environmental responsibility at the forefront.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/documents/qhse-policy.pdf"
                className="bg-[#BD2227] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Download QHSE Policy
              </a>
              <a 
                href="/contact"
                className="glass border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors"
              >
                Contact Safety Officer
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}