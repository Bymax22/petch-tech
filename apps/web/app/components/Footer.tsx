import Image from 'next/image';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer id="contact" className="glass border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo-01.png" 
                alt="DN Multi Services Logo"
                width={96}
                height={96}
              />
              <div>
                <h3 className="font-bold text-lg text-white">DN Multi Services</h3>
                <p className="text-sm text-slate-400">Supply Ltd</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Integrated industrial services and supplies across DRC & Zambia.
              Delivering excellence in mining, engineering, and infrastructure solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <FiMapPin color="#1185AE" />
              Contacts
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Zambia & DRC Offices</p>
              <p className="flex items-center gap-2">
                <FiMail color="#1185AE" />
                info@dnmultiservices.com
              </p>
              <p className="flex items-center gap-2">
                <FiPhone color="#1185AE" />
                +260 770 970 511
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block text-slate-400 hover:text-[#1185AE] transition-colors">
                Services
              </a>
              <a href="#about" className="block text-slate-400 hover:text-[#1185AE] transition-colors">
                About Us
              </a>
              <a href="#qhs" className="block text-slate-400 hover:text-[#1185AE] transition-colors">
                QHSE Policy
              </a>
              <a href="#contact" className="block text-slate-400 hover:text-[#1185AE] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 DN Multi Services Supply Ltd. All rights reserved. Developed by Bymax Zambia</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#1185AE] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#1185AE] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}