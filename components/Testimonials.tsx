"use client";

import React, { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { siteData } from "@/data/siteData";

export default function Testimonials() {
  const { label, heading, description, items } = siteData.testimonials;
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="testimonials"
      className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header with Top-Right Next/Prev Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
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
              {description}
            </p>
          </div>

          {/* Top-Right Next & Previous Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-soft text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer select-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-soft text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer select-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 4 Testimonials Swiper Slider (Fixed Height & Brand Green Background) */}
        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".testimonials-pagination",
              clickable: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="w-full !pb-14"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-[340px] sm:h-[350px] flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#1E7B4C] to-[#14532D] text-white p-6 sm:p-8 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div>
                    {/* Stars & Subtle Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-300">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-white/20" />
                    </div>

                    {/* Review Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-white leading-snug mb-3 line-clamp-1">
                      “{item.title}”
                    </h3>

                    {/* Review Paragraph (Fixed Line Clamp 4) */}
                    <p className="line-clamp-4 text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                      {item.review}
                    </p>
                  </div>

                  {/* Guest Identity & Villa Context */}
                  <div className="pt-4 border-t border-white/15 flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-green font-serif font-bold text-sm shadow-xs">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-white/70 font-light mt-0.5">
                        {item.city} • <span className="text-emerald-300 font-medium">{item.villa}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Pagination Indicators */}
          <div className="testimonials-pagination flex justify-center gap-2 mt-4"></div>
        </div>
      </div>

      {/* Pagination Dot Styling in Brand Green */}
      <style>{`
        .testimonials-pagination .swiper-pagination-bullet { 
          width: 24px !important; 
          height: 3px !important; 
          background: #111827 !important; 
          border-radius: 9999px !important; 
          opacity: 0.18; 
          transition: all 0.3s ease; 
          cursor: pointer;
        }
        .testimonials-pagination .swiper-pagination-bullet-active { 
          background: #1E7B4C !important; 
          opacity: 1; 
          width: 44px !important; 
        }
      `}</style>
    </section>
  );
}
