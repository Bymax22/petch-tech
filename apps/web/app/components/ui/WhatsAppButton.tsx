"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phone = "+260955950008";
    const message = "Hello Petch-Tech Engineering, I'd like to inquire about your services.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
      >
        {/* Floating Badge */}
        {isHovered && (
          <div className="absolute -top-12 right-0 bg-primary text-white px-3 py-2 rounded-lg shadow-lg animate-slide-up">
            <p className="text-sm font-medium whitespace-nowrap">
              Chat with us on WhatsApp
            </p>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-primary rotate-45" />
          </div>
        )}

        {/* Main Button */}
        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </button>
    </div>
  );
}