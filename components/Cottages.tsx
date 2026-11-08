"use client";

import React from "react";
import Image from "next/image";
import { Waves, Sparkles, ArrowRight } from "lucide-react";
import { siteData, getWhatsAppUrl } from "@/data/siteData";

export default function Cottages() {
  const { label, heading, description, items } = siteData.cottages;

  return (
    <section
      id="cottages"
      className="relative bg-brand-green-soft/30 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-brand-green-subtle"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-brand-green" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-green">
              {label}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] mb-4">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* 4 Cottages Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((cottage, index) => {
            const cottageEnquiryMsg = `Hello Parudeesa Team! I'm interested in booking ${cottage.name} (${cottage.subTitle}) at your property. Could you please share the availability and details?`;

            return (
              <div
                key={cottage.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white overflow-hidden border border-brand-green-subtle shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand-green/60"
              >
                {/* Cottage Image with Overlay & Badge */}
                <div className="relative aspect-[16/10] sm:aspect-[16/12] w-full overflow-hidden bg-black">
                  <Image
                    src={cottage.image}
                    alt={`${cottage.name} - Parudeesa Plantation Pool Villa`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Private Pool Highlight Ribbon */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green-dark/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-brand-green-light/40">
                    <Waves className="h-3.5 w-3.5 text-brand-green-light" />
                    <span>{cottage.poolHighlight}</span>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-xs font-serif text-brand-green font-bold">
                    0{index + 1}
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs tracking-widest uppercase font-semibold text-emerald-400">
                      {cottage.name}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight">
                      {cottage.subTitle}
                    </h3>
                  </div>
                </div>

                {/* Cottage Body & Features */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm sm:text-base text-charcoal leading-relaxed font-light mb-6">
                      {cottage.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cottage.features.map((feat) => (
                        <span
                          key={feat}
                          className="inline-flex items-center text-xs text-charcoal-muted rounded-full bg-brand-green-soft px-3 py-1 border border-brand-green-subtle font-medium"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button with Circle Arrow Badge */}
                  <div className="pt-4 border-t border-brand-green-subtle flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-brand-green font-bold flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-brand-green" />
                      Exclusive Stay
                    </span>

                    <a
                      href={getWhatsAppUrl(cottageEnquiryMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-brand-green px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-green-hover hover:shadow-md"
                    >
                      <span>Enquire Stay</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </a>
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
