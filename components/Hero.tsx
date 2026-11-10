"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const { headline, description } = siteData.hero;

  return (
    <section
      id="home"
      className="relative h-[100svh] sm:h-screen w-full overflow-hidden font-sans bg-black"
    >
      {/* Background Autoplaying Luxury Resort Video (Muted & Loop) */}
     <div className="absolute inset-0 z-0">
  {/* Desktop Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="hidden md:block absolute inset-0 w-full h-full object-cover"
  >
    <source src="/video.mp4" type="video/mp4" />
  </video>

  {/* Mobile Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="block md:hidden absolute inset-0 w-full h-full object-cover"
  >
    <source src="/vidmob.mp4" type="video/mp4" />
  </video>

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/25 to-black/20 z-10" />
</div>

      {/* Foreground Content Container */}
      <div className="relative z-20 h-full container mx-auto px-3 sm:px-6 lg:px-12 flex flex-col justify-between">
        {/* Centralized Two-Line Heading */}
        <div className="h-full flex items-center justify-center text-center pt-16 sm:pt-20 pb-28">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl leading-[1.1] max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Your Private Paradise <br />
            <span className="font-light">In The Heart of Wayanad</span>
          </h1>
        </div>

        {/* Bottom Row: Left-side paragraph, Right-side 'Book Your Stay' Button */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-12 sm:pb-14 pointer-events-none">
          <div className="container mx-auto px-3 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            {/* Left Description Paragraph */}
            <p className="text-white/85 text-center md:text-left text-[11px] sm:text-xs leading-relaxed max-w-[340px] tracking-[0.2em] pointer-events-auto uppercase font-light animate-in fade-in slide-in-from-left-6 duration-1000 delay-200">
              {description}
            </p>

            {/* Right Button: "Book Your Stay" in Brand Green (rounded-xl, inline arrow) */}
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center gap-2.5 bg-brand-green hover:bg-brand-green-hover text-white px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded-xl group/btn shadow-2xl hover:scale-105 animate-in fade-in slide-in-from-right-6 duration-1000 delay-300"
            >
              <span>BOOK YOUR STAY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
