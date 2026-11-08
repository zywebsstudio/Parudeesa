"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone, MapPin } from "lucide-react";
import { siteData, getWhatsAppUrl } from "@/data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 3 items on the left, 3 items on the right
  const leftNavItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
  ];

  const rightNavItems = [
    { label: "Cottages", href: "#cottages" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const allNavItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Cottages", href: "#cottages" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  };

  return (
    <>
      {/* Main Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md border-b border-gray-100 py-2 sm:py-2.5"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* LEFT NAVIGATION: 3 Items (Home, About, Gallery) */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 flex-1 justify-start">
              {leftNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[11px] xl:text-sm tracking-[0.18em] font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-800 hover:text-brand-green"
                      : "text-white/95 hover:text-emerald-400 drop-shadow-sm"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CENTER: LOGO (COMMENTED) + "Parudeesa / — PLANTATION POOL VILLA —" (Zmoksha style) */}
            <div className="flex items-center justify-center shrink-0">
              <Link
                href="#home"
                className="group flex flex-col items-center justify-center text-center transition-opacity duration-200 hover:opacity-95 select-none"
                aria-label="Parudeesa Home"
              >
                {/* Logo Mark on Left (Desktop & Mobile) - Kept commented out as instructed */}
                {/* <div
                  className={`relative flex items-center justify-center rounded-lg p-1 shrink-0 transition-all duration-300 ${
                    isScrolled
                      ? "h-8 w-8 sm:h-9 sm:w-9 shadow-xs"
                      : "h-8 w-8 sm:h-9 sm:w-9 shadow-md"
                  }`}
                >
                  <Image
                    src="/logo.png"
                    alt="Parudeesa Logo"
                    width={36}
                    height={36}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div> */}

                {/* Brand Name: "Parudeesa" (Zmoksha Title Style) */}
                <span
                  className={`font-sans text-base uppercase sm:text-2xl lg:text-[22px] font-medium tracking-[0.3em] leading-tight transition-colors duration-200 ${
                    isScrolled ? "text-gray-900" : "text-white drop-shadow-md"
                  }`}
                >
                  Parudeesa
                </span>

                {/* Subtitle with Flanking Lines: "— PLANTATION POOL VILLA —" (Centered & Proportional) */}
                <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-0.5 sm:mt-1 w-full">
                  <span
                    className={`h-[1px] w-3.5 sm:w-5 transition-colors duration-200 ${
                      isScrolled ? "bg-brand-green" : "bg-brand-green"
                    }`}
                  />
                  <span
                    className={`text-[5px] sm:text-[6px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-bold transition-colors duration-200 whitespace-nowrap leading-tight ${
                      isScrolled ? "text-charcoal-muted" : "text-white/90 drop-shadow-sm"
                    }`}
                  >
                    Plantation Pool Villa
                  </span>
                  <span
                    className={`h-[1px] w-3.5 sm:w-5 transition-colors duration-200 ${
                      isScrolled ? "bg-brand-green" : "bg-brand-green"
                    }`}
                  />
                </div>
              </Link>
            </div>

            {/* RIGHT NAVIGATION: 3 Items (Cottages, Location, Contact) */}
            <div className="flex items-center justify-end flex-1">
              <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
                {rightNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-[11px] xl:text-sm tracking-[0.18em] font-medium transition-colors duration-200 ${
                      isScrolled
                        ? "text-gray-800 hover:text-brand-green"
                        : "text-white/95 hover:text-emerald-400 drop-shadow-sm"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-200 ${
                  isScrolled
                    ? "text-brand-green hover:bg-brand-green-soft"
                    : "text-white hover:bg-white/20"
                }`}
                aria-label="Open mobile navigation"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Self-Contained Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          />

          {/* Slide Drawer */}
          <div className="relative z-10 flex h-full w-full max-w-sm flex-col justify-between bg-white px-6 py-6 shadow-2xl border-l border-brand-green-subtle overflow-y-auto animate-in slide-in-from-right duration-300">
            {/* Top Bar with Logo & Close */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-green-subtle">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1 shadow-sm border border-brand-green-subtle shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Parudeesa Logo"
                      width={32}
                      height={32}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-lg uppercase font-medium text-brand-green-dark tracking-[0.05em] leading-tight">
                      Parudeesa
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="h-[1px] w-2.5 bg-brand-green" />
                      <span className="text-[7.5px] font-bold text-charcoal-muted tracking-[0.22em] uppercase whitespace-nowrap">
                        Plantation Pool Villa
                      </span>
                      <span className="h-[1px] w-2.5 bg-brand-green" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green transition-colors hover:bg-brand-green hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* 6 Clean Nav Links */}
              <nav className="mt-6">
                <ul className="space-y-3">
                  {allNavItems.map((item, index) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMobileNavClick(item.href);
                        }}
                        className="group flex items-center justify-between py-2 text-base font-serif text-charcoal hover:text-brand-green transition-colors"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs font-sans font-bold text-brand-green opacity-40 group-hover:opacity-100">
                          0{index + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-6 border-t border-brand-green-subtle space-y-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-green px-5 py-3 text-xs font-bold tracking-wider uppercase text-white shadow-md transition-all hover:bg-brand-green-hover"
              >
                <span>Book Your Stay</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center justify-between pt-2 text-xs text-charcoal-muted">
                <a
                  href={`tel:${siteData.brand.phone.number}`}
                  className="inline-flex items-center gap-1.5 hover:text-brand-green font-medium"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-green" />
                  <span>{siteData.brand.phone.display}</span>
                </a>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-brand-green" />
                  <span>Wayanad, Kerala</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
