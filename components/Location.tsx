"use client";

import React from "react";
import { MapPin, ArrowRight, Compass, Mountain, Quote } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Location() {
  const { label, heading, address, description, nearbyAttractions, guestExperience } =
    siteData.location;

  return (
    <section
      id="location"
      className="relative bg-white py-16  lg:pb-28 overflow-hidden border-b border-brand-green-subtle"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
        <div className="space-y-10 md:space-y-16">
          {/* Header */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-brand-green" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-green">
                {label}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] mb-4">
              {heading}
            </h2>

            <p className="text-base text-charcoal-muted leading-relaxed font-light">
              {description}
            </p>
          </div>

          {/* Location Map & Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-stretch">
            {/* Interactive Map Visual Embed Card */}
            <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-brand-green-subtle shadow-sm bg-black min-h-[380px] sm:min-h-[440px] relative">
              {/* Google Maps iFrame */}
              <iframe
                title="Parudeesa Location in Vaduvanchal, Wayanad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62590.23075253816!2d76.2238466!3d11.5369654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba609f3e43343ef%3A0xc3cf9c9a6230f2ee!2sVaduvanchal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full flex-1 border-0 brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Detail Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md rounded-xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-brand-green-subtle shadow-lg flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-green">
                    <MapPin className="h-3.5 w-3.5 text-brand-green" />
                    <span>Wayanad, Kerala</span>
                  </div>
                  <p className="text-xs text-charcoal-muted">
                    Vaduvanchal, Wayanad District, Kerala, India
                  </p>
                </div>

                <a
                  href={siteData.brand.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-brand-green px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-green-hover transition-all shadow-sm"
                >
                  <span>Directions</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Address & Nearby Attractions */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Address Card */}
              <div className="rounded-2xl bg-brand-green-soft/50 p-6 sm:p-7 border border-brand-green-subtle">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-green mb-3">
                  <Compass className="h-4 w-4" />
                  <span>Property Address</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal font-normal mb-2">
                  {address.line1}
                </h3>
                <p className="text-sm text-charcoal leading-relaxed font-light">
                  {address.locality}, {address.district}
                  <br />
                  {address.state}, {address.country} – {address.pincode}
                </p>

                <div className="mt-5 pt-4 border-t border-brand-green-subtle flex items-center justify-between">
                  <span className="text-xs text-charcoal-muted">
                    Private plantation entry
                  </span>
                  <a
                    href={siteData.brand.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-green hover:text-brand-green-hover underline uppercase tracking-wider"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="rounded-2xl bg-brand-green-soft/50 p-6 sm:p-7 border border-brand-green-subtle flex-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-green mb-4">
                  <Mountain className="h-4 w-4" />
                  <span>Nearby Wayanad Highlights</span>
                </div>

                <div className="space-y-3.5">
                  {nearbyAttractions.map((attraction) => (
                    <div
                      key={attraction.name}
                      className="flex items-start justify-between gap-3 pb-3 border-b border-brand-green-subtle last:border-0 last:pb-0"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-brand-green-dark">
                          {attraction.name}
                        </h4>
                        <p className="text-xs text-charcoal-muted mt-0.5 font-light">
                          {attraction.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-white text-brand-green border border-brand-green-subtle">
                        {attraction.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
