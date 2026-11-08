"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteData, getWhatsAppUrl } from "@/data/siteData";

export default function FloatingSocialButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 border border-brand-green-subtle text-brand-green shadow-lg backdrop-blur-md transition-all hover:bg-brand-green hover:text-white"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Instagram Button with Official Brand Gradient */}
      <a
        href={siteData.brand.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-instagram-gradient text-white shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Visit Parudeesa on Instagram"
      >
        <InstagramIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />

        {/* Hover Tooltip */}
        <span className="absolute right-14 whitespace-nowrap rounded-lg bg-black px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-100 border border-white/20">
          Instagram
        </span>
      </a>

      {/* WhatsApp Button with Official WhatsApp Green */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Enquire via WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" />

        {/* Hover Tooltip */}
        <span className="absolute right-14 whitespace-nowrap rounded-lg bg-black px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-100 border border-white/20">
          Enquire on WhatsApp
        </span>
      </a>
    </div>
  );
}
