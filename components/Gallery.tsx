"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { siteData } from "@/data/siteData";

declare global {
  interface Window {
    Fancybox?: any;
  }
}

export default function Gallery() {
  const { label, heading, subheading, items } = siteData.gallery;

  // Initialize Fancybox CDN service
  useEffect(() => {
    const bindFancybox = () => {
      if (typeof window !== "undefined" && window.Fancybox) {
        window.Fancybox.bind('[data-fancybox="parudeesa-gallery"]', {
          Hash: false,
        });
      }
    };

    if (typeof window !== "undefined" && window.Fancybox) {
      bindFancybox();
    } else {
      const interval = setInterval(() => {
        if (typeof window !== "undefined" && window.Fancybox) {
          bindFancybox();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (typeof window !== "undefined" && window.Fancybox) {
        window.Fancybox.destroy();
      }
    };
  }, []);

  return (
    <section
      id="gallery"
      className="relative bg-white   lg:pt-28 overflow-hidden"
    >
      <style>{`
        .swiper-gallery .swiper-slide {
          width: 300px;
          max-width: calc(100% - 30px);
          transition: all 0.4s ease;
        }
        @media (min-width: 640px) {
          .swiper-gallery .swiper-slide {
            width: 440px;
          }
        }
        @media (min-width: 1024px) {
          .swiper-gallery .swiper-slide {
            width: 560px;
          }
        }
      `}</style>

      {/* Header Container */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 mb-10 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-brand-green" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-green">
                {label}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal leading-[1.15] mb-3">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
              {subheading}
            </p>
          </div>

         
        </div>
      </div>

      {/* 3D Coverflow Swiper (No Borders, Light Natural Overlay, Vibrant Images) */}
      <div className="w-full relative py-4 overflow-hidden">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          speed={850}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 14,
            stretch: 0,
            depth: 140,
            modifier: 1.2,
            slideShadows: false,
          }}
          className="swiper-gallery w-full !overflow-visible"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="cursor-pointer">
              <a
                href={item.image}
                data-fancybox="parudeesa-gallery"
                data-caption={`<strong>${item.title}</strong> &bull; ${item.category}`}
                className="group relative block aspect-[4/5] sm:aspect-[16/10] w-full rounded-xl overflow-hidden g transition-all duration-500  select-none"
              >
                {/* Vibrant Resort Image with Slow Zoom on Hover */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 440px, 560px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Subtle Bottom-Only Scrim for Text Legibility (80%+ of photo is 100% natural and bright) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/75" />

                {/* Bottom Title & Fancybox Expand Icon */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 right-4 sm:left-5 sm:right-5 z-10 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg sm:text-2xl font-normal text-white group-hover:text-emerald-300 transition-colors leading-tight drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>

                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md group-hover:bg-brand-green text-white flex items-center justify-center transition-all duration-300 shrink-0 border border-white/30 shadow-lg">
                    <Maximize2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
