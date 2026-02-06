export default function ServicesHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#1185AE]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-[#BD2227]/10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-[#1185AE]">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive industrial solutions tailored to meet the complex requirements of mining, engineering, energy, and infrastructure sectors across DRC and Zambia.
          </p>
        </div>

        <div className="glass rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 border-x border-white/10">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}