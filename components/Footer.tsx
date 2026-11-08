"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { siteData, getWhatsAppUrl } from "@/data/siteData";

export default function Footer() {
  const { brand, navigation, footer } = siteData;

  return (
    <footer className="bg-black text-white border-t border-brand-green-subtle/20 relative overflow-hidden">
      {/* Top Main Footer Grid */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-5">
            {/* Self-contained Brand Logo */}
            <Link
              href="#home"
              className="inline-flex items-center gap-3 select-none"
              aria-label="Parudeesa Home"
            >
              <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-white p-1 shadow-sm shrink-0">
                <Image
                  src="/logo.png"
                  alt="Parudeesa Logo"
                  width={48}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="flex flex-col text-left justify-center">
                <span className="font-sans text-xl sm:text-2xl font-bold tracking-[0.05em] leading-tight text-white">
                  Parudeesa
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                  <span className="h-[1px] w-2.5 sm:w-3.5 bg-emerald-400" />
                  <span className="text-[7.5px] sm:text-[8px] tracking-[0.24em] uppercase font-bold text-white/90 whitespace-nowrap">
                    Plantation Pool Villa
                  </span>
                  <span className="h-[1px] w-2.5 sm:w-3.5 bg-emerald-400" />
                </div>
              </div>
            </Link>

            <p className="text-sm text-white/75 font-light leading-relaxed max-w-sm pt-2">
              {footer.description}
            </p>

            {/* Social Icons with Official Brand Colors */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-instagram-gradient text-white shadow-md transition-all hover:scale-105"
                aria-label="Follow Parudeesa on Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-all hover:scale-105"
                aria-label="Enquire on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
              {footer.columns.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-light"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
              {footer.columns.contactTitle}
            </h4>

            <div className="space-y-3 text-sm text-white/75 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                <span>
                  {brand.fullName}
                  <br />
                  {brand.location}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${brand.phone.number}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {brand.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {brand.whatsapp.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-emerald-400 transition-colors truncate"
                >
                  {brand.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Booking & Plan */}
          <div className="hidden lg:block lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
              {footer.columns.bookingTitle}
            </h4>

            <p className="text-sm text-white/75 font-light leading-relaxed">
              {footer.columns.bookingDesc}
            </p>

            {/* Button without circle disc */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-brand-green px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-green-hover hover:shadow-lg"
            >
              <span>{footer.columns.bookingCta}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-3 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          <div>{footer.copyright}</div>

          <div className="inline-flex items-center gap-1.5">
            <span>{footer.creditText}</span>
            <a
              href={footer.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-400 hover:text-white transition-colors underline decoration-emerald-400/50 underline-offset-4"
            >
              {footer.creditName}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
