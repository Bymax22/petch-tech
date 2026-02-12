"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Phone, MapPin, ChevronDown, 
  Wrench, HardHat, MessageCircle, Search,
  ArrowRight, Clock, Mail
} from "lucide-react";

const navItems = [
  { 
    label: "Home", 
    href: "/" 
  },
  { 
    label: "About", 
    href: "/about" 
  },
  { 
    label: "Services", 
    href: "/services",
    submenu: [
      { label: "Civil Works", href: "/services/civil" },
      { label: "Mechanical Engineering", href: "/services/mechanical" },
      { label: "Electrical & Automation", href: "/services/electrical" },
      { label: "Instrumentation", href: "/services/instrumentation" },
      { label: "Fabrication & Machining", href: "/services/fabrication" },
      { label: "Industrial Repairs", href: "/services/repairs" },
      { label: "Supply & Installation", href: "/services/supply" },
    ]
  },
  { 
    label: "Projects", 
    href: "/projects" 
  },
  { 
    label: "Capabilities", 
    href: "/capabilities" 
  },
  { 
    label: "Contact", 
    href: "/contact" 
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = typeof window !== 'undefined' ? window.scrollY : 0;
      setScrolled(y > 10);
      if (typeof window !== 'undefined') {
        const progress = Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100);
        setScrollProgress(Number.isFinite(progress) ? progress : 0);
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
    setSearchOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery);
      setSearchOpen(false);
    }
  };

  const getQuote = () => {
    // Redirect to contact page or open modal
    if (typeof window !== 'undefined') {
      window.location.href = "/contact";
    }
  };

  const searchSuggestions = [
    "Civil Engineering",
    "Mechanical Repairs",
    "Electrical Installation",
    "Instrumentation Calibration",
    "Project Management",
    "Industrial Maintenance",
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-primary text-white text-sm py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@petch-tech.com" className="hover:text-accent transition-colors">
                info@petch-tech.com
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+260955950008"
              className="hover:text-accent transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>+260 955 950 008</span>
            </a>
            <a
              href="https://wa.me/260955950008"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled 
            ? 'glass-effect border-b shadow-xl py-0 min-h-[4rem]' 
            : 'bg-white/95 backdrop-blur-md py-2 min-h-[4rem]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 relative flex-shrink-0">
                <Image
                  src="/Petch Tech logo h2-01.png"
                  alt="Petch Tech logo"
                  width={96}
                  height={96}
                  className="rounded-xl object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 py-2 px-1 text-sm font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "text-primary font-semibold border-b-2 border-accent"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                    onMouseLeave={() => setTimeout(() => setOpenSubmenu(null), 100)}
                  >
                    <span className="relative">
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </span>
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        openSubmenu === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  
                  {/* Submenu */}
                  {item.submenu && openSubmenu === item.label && (
                    <div 
                      className="absolute left-0 top-full mt-1 w-64 glass-effect rounded-xl shadow-2xl border animate-fade-in overflow-hidden"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setTimeout(() => setOpenSubmenu(null), 100)}
                    >
                      <div className="py-2">
                        <div className="px-4 py-2 mb-2 border-b">
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            Engineering Services
                          </span>
                        </div>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-3 text-sm hover:bg-primary/5 hover:text-primary transition-all duration-200 group/subitem"
                          >
                            <span>{subItem.label}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover/subitem:opacity-100 transition-all duration-300 transform group-hover/subitem:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <Search className={`w-5 h-5 transition-colors ${
                    searchOpen ? 'text-primary' : 'text-gray-600'
                  }`} />
                </button>
                
                {/* Search Dropdown */}
                {searchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 glass-effect rounded-xl shadow-2xl border animate-slide-up z-50">
                    <form onSubmit={handleSearch} className="p-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search services, projects, or documents..."
                          className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
                          autoFocus
                        />
                      </div>
                      
                      {/* Search Suggestions */}
                      <div className="mt-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Popular Searches
                        </div>
                        <div className="space-y-2">
                          {searchSuggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSearchQuery(suggestion)}
                              className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 transition-colors text-sm"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={() => { if (typeof window !== 'undefined') window.location.href = '/contact'; }}
                  className="group bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-[calc(6rem+1rem)] z-40 bg-black/50 backdrop-blur-sm animate-fade-in">
              <div className="glass-effect rounded-2xl shadow-2xl border mx-4 mt-2 overflow-hidden animate-slide-up">
                <div className="p-4">
                  {/* Mobile Search */}
                  <div className="mb-4">
                    <form onSubmit={handleSearch} className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </form>
                  </div>

                  {/* Navigation Items */}
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <div key={item.label} className="border-b last:border-0">
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between py-3 px-2 text-base font-medium rounded-lg transition-colors ${
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => !item.submenu && setMobileMenuOpen(false)}
                        >
                          <span>{item.label}</span>
                          {item.submenu && (
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                              openSubmenu === item.label ? 'rotate-180' : ''
                            }`} />
                          )}
                        </Link>
                        
                        {/* Mobile Submenu */}
                        {item.submenu && openSubmenu === item.label && (
                          <div className="ml-4 mt-1 mb-2 space-y-1 border-l pl-4">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors pl-4"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Mobile Contact & CTA */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Head Office</p>
                          <p className="text-sm text-gray-600">
                            Plot D6 Arusha Street, Ndola
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <a 
                          href="tel:+260955950008"
                          className="flex items-center justify-center space-x-2 p-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          <span>Call Now</span>
                        </a>
                        {/* Removed duplicate WhatsApp button (kept top bar link) */}
                      </div>
                      
                      <button 
                        onClick={() => {
                          if (typeof window !== 'undefined') window.location.href = '/contact';
                          setMobileMenuOpen(false);
                        }}
                        className="w-full bg-accent text-black py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Contact Us</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}