"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Users,
  Sparkles,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteData, getWhatsAppUrl } from "@/data/siteData";

export default function Booking() {
  // Form State
  const [cottage, setCottage] = useState("Cottage One (The Plantation Pool Villa)");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults (Couple)");
  const [name, setName] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guestText = name ? `I am ${name}. ` : "";
    const datesText =
      checkIn && checkOut ? `from ${checkIn} to ${checkOut}` : "in the coming weeks";
    const compiledMessage = `Hello Parudeesa Team! ${guestText}I'm interested in booking ${cottage} for ${guests} ${datesText}. Could you please share the availability and details?`;

    window.open(getWhatsAppUrl(compiledMessage), "_blank");
  };

  const { heading, description } = siteData.booking;
  const { brand } = siteData;

  return (
    <section
      id="contact"
      className="relative pt-16  lg:pt-28 lg:pb-14 overflow-hidden bg-white text-charcoal"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subheading & Direct Contact Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="h-0.5 w-7 bg-brand-green" />
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-green">
                  RESERVATIONS & ENQUIRIES
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] mb-4">
                {heading}
              </h2>

              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Direct Contact Buttons List */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-brand-green-soft hover:bg-brand-green-soft/80 border border-brand-green-subtle transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                      WhatsApp Reservation
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-charcoal">
                      {brand.whatsapp.display}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-brand-green transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>

              {/* Instagram Button */}
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-brand-green-soft/45 hover:bg-brand-green-soft/80 border border-brand-green-subtle transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-instagram-gradient text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                      Follow on Instagram
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-charcoal">
                      @parudeesa_wayanad
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-brand-green transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${brand.phone.number}`}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-brand-green-soft hover:bg-brand-green-soft/80 border border-brand-green-subtle transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                      Direct Phone Call
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-charcoal">
                      {brand.phone.display}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-brand-green transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${brand.email}`}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-brand-green-soft/45 hover:bg-brand-green-soft/80 border border-brand-green-subtle transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green-dark text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal-muted font-bold">
                      Email Enquiry
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-charcoal">
                      {brand.email}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-brand-green transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form with Brand Color Background */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#1E7B4C]/80 to-[#14532D]/70 text-white p-6 sm:p-8 lg:p-9 shadow-2xl relative overflow-hidden">
              {/* Form Title & Subtitle */}
              <div className="mb-6 pb-4 border-b border-white/15">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-emerald-300 mb-2">
                  <Sparkles className="w-3 h-3 text-emerald-300" />
                  <span>DIRECT STAY PLANNER</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  Check Availability & Book
                </h3>
                <p className="text-xs text-white/80 font-light mt-1">
                  Select your dates and cottage to compile an instant WhatsApp enquiry to our reservations team.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                {/* Guest Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/85 font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/50 border border-white/20 focus:border-white focus:bg-black/35 focus:outline-none transition-all"
                  />
                </div>

                {/* Preferred Cottage & Guests in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/85 font-semibold mb-1.5">
                      Select Cottage
                    </label>
                    <select
                      value={cottage}
                      onChange={(e) => setCottage(e.target.value)}
                      className="w-full rounded-xl bg-black/25 px-4 py-3 text-sm text-white border border-white/20 focus:border-white focus:bg-black/35 focus:outline-none transition-all"
                    >
                      <option className="bg-[#14532D] text-white" value="Cottage One (The Plantation Pool Villa)">
                        Cottage One (Plantation Pool)
                      </option>
                      <option className="bg-[#14532D] text-white" value="Cottage Two (The Garden Pool Villa)">
                        Cottage Two (Garden Pool)
                      </option>
                      <option className="bg-[#14532D] text-white" value="Cottage Three (The Forest Vista Villa)">
                        Cottage Three (Forest Vista)
                      </option>
                      <option className="bg-[#14532D] text-white" value="Cottage Four (The Estate Pool Villa)">
                        Cottage Four (Estate Pool)
                      </option>
                      <option className="bg-[#14532D] text-white" value="Any Available Cottage">
                        Any Available Cottage
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/85 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Guests</span>
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-xl bg-black/25 px-4 py-3 text-sm text-white border border-white/20 focus:border-white focus:bg-black/35 focus:outline-none transition-all"
                    >
                      <option className="bg-[#14532D] text-white" value="2 Adults (Couple)">
                        2 Adults (Couple)
                      </option>
                      <option className="bg-[#14532D] text-white" value="Family (2 Adults, 1-2 Children)">
                        Family (2 Adults, 1-2 Children)
                      </option>
                      <option className="bg-[#14532D] text-white" value="Small Group (4+ Guests)">
                        Small Group (4+ Guests)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Dates in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/85 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Check-In Date</span>
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-xl bg-black/25 px-4 py-3 text-sm text-white border border-white/20 focus:border-white focus:bg-black/35 focus:outline-none [color-scheme:dark] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/85 font-semibold mb-1.5 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Check-Out Date</span>
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full rounded-xl bg-black/25 px-4 py-3 text-sm text-white border border-white/20 focus:border-white focus:bg-black/35 focus:outline-none [color-scheme:dark] transition-all"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-white hover:bg-emerald-50 px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-green-dark shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
