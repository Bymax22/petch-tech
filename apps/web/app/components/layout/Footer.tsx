import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, Twitter, Linkedin, Instagram, 
  Phone, Mail, MapPin, Clock 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="w-full max-w-xs h-28 relative">
                <Image
                  src="/Petch Tech logo h2-01.png"
                  alt="Petch Tech logo"
                  width={320}
                  height={112}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="opacity-80 mb-6">
              Delivering engineering excellence across Zambia's industrial sectors since 2011.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Civil Works
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Mechanical Engineering
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Electrical & Automation
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Instrumentation
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Fabrication
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Industrial Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="opacity-80 text-sm">
                    Plot D6 Arusha Street,<br />
                    Light Industrial Area,<br />
                    Ndola, Zambia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <a href="tel:+260955950008" className="font-medium hover:text-accent transition-colors">
                    +260 955 950 008
                  </a>
                  <p className="opacity-80 text-sm">Primary Contact</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <a href="mailto:info@petch-tech.com" className="font-medium hover:text-accent transition-colors">
                    info@petch-tech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="opacity-80 text-sm">Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Petch-Tech Engineering. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}