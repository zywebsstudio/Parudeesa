"use client";

import React from "react";
import Image from "next/image";
import { Waves, Trees, HeartHandshake, UtensilsCrossed, LucideIcon } from "lucide-react";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, LucideIcon> = {
  Waves,
  Trees,
  HeartHandshake,
  UtensilsCrossed,
};

export default function Experiences() {
  const { label, heading, description, items } = siteData.experiences;

  return (
    <section
      id="experiences"
      className="relative bg-brand-green-soft/30 py-16 lg:pt-28 overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-brand-green" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-green">
              {label}
            </span>
            <span className="h-0.5 w-7 bg-brand-green" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] mb-4">
            {heading}
          </h2>

          <p className="text-base text-charcoal-muted leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* 4 Core Experience Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {items.map((exp, index) => {
            const IconComponent = iconMap[exp.icon] || Waves;

            return (
              <div
                key={exp.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white overflow-hidden border border-brand-green-subtle shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand-green/60"
              >
                {/* Photo Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Icon Emblem Floating on Image */}
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 backdrop-blur-md text-brand-green border border-brand-green-subtle shadow-md">
                    <IconComponent className="h-5 w-5 text-brand-green" />
                  </div>

                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-xl font-normal text-charcoal mb-2 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-bold text-brand-green mb-3">
                      {exp.tagline}
                    </p>
                    <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-brand-green-subtle flex items-center justify-between text-xs text-brand-green font-bold">
                    <span>Parudeesa Signature</span>
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
