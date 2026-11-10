"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteData } from "@/data/siteData";

interface StatItem {
  target: number;
  padZero?: boolean;
  suffix?: string;
  label: string;
  sublabel: string;
}

const statsData: StatItem[] = [
  {
    target: 4,
    padZero: true,
    suffix: "",
    label: "Private Pool Cottages",
    sublabel: "Individual outdoor plunge pools",
  },
  {
    target: 100,
    padZero: false,
    suffix: "%",
    label: "Secluded Privacy",
    sublabel: "Peaceful plantation retreat",
  },
  {
    target: 10,
    padZero: false,
    suffix: "+",
    label: "Acres of Greenery",
    sublabel: "Coffee estates & native spices",
  },
  {
    target: 24,
    padZero: false,
    suffix: "/7",
    label: "Dedicated Care",
    sublabel: "Warm personalized hospitality",
  },
];

function StatCard({ item, animate }: { item: StatItem; animate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    let startTime: number | null = null;
    let animId: number;

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // Smooth cubic ease-out curve
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * item.target));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCount(item.target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [animate, item.target]);

  const displayVal = item.padZero && count < 10 ? `0${count}` : `${count}`;

  return (
    <div className="flex flex-col items-center text-center rounded-2xl bg-brand-green-soft/40 hover:bg-brand-green-soft/75 p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
      <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-green tracking-tight">
        {displayVal}
        {item.suffix}
      </span>
      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal mt-2">
        {item.label}
      </h3>
      <p className="text-[11px] sm:text-xs text-charcoal-muted font-light mt-1 leading-relaxed">
        {item.sublabel}
      </p>
    </div>
  );
}

export default function About() {
  const { label, heading, description, extendedText, images } = siteData.about;
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Trigger count up animation from 0 when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative bg-white py-16 lg:pt-28 overflow-hidden"
    >
      {/* Subtle organic watermark accent */}
      <div className="absolute right-0 top-1/4 -z-0 translate-x-1/3 opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[18rem] text-brand-green">P</span>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
        {/* Main 2-Column Row: Left Single Image, Right Content (Equal Height with items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-14 sm:mb-16 lg:mb-20">
          {/* Left Column: Single Prominent Editorial Resort Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden shadow-xl border border-brand-green-subtle">
              <Image
                src={images.main.src}
                alt={images.main.alt}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Floating Sanctuary Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 border border-brand-green-subtle shadow-md">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-green" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-brand-green-dark">
                  Wayanad Sanctuary
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 flex flex-col justify-center">
            {/* Sub-heading in Brand Green */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-7 bg-brand-green" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-green">
                {label}
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15]">
              {heading}
            </h2>

            {/* Descriptions */}
            <p className="text-base sm:text-lg text-charcoal leading-relaxed font-light">
              {description}
            </p>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
              {extendedText}
            </p>

            {/* Callout Quote */}
            <div className="pt-2">
              <blockquote className="border-l-2 border-brand-green pl-4 italic font-serif text-base sm:text-lg text-brand-green-dark">
                “An intimate escape where privacy, comfort and nature come together.”
              </blockquote>
            </div>
          </div>
        </div>

        {/* 4 Statistics Metrics Strip (No border, Subtle Shadow & Soft Background, Animated from 0) */}
        <div ref={statsRef} className="pt-0 sm:pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {statsData.map((stat, idx) => (
              <StatCard key={idx} item={stat} animate={startCount} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
