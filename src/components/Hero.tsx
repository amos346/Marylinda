import React from 'react';
import { ArrowDown, BookOpen, Compass } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
          alt="Author's warmly lit study with books"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Subtle dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full py-28 sm:py-36">
        <div className="max-w-2xl text-left">
          {/* Small Introductory Text */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/40 backdrop-blur-sm mb-6 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F8F5EF]">
              Welcome to my world of stories
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F5EF] leading-[1.1] mb-6">
            Every Story Begins With a Little Imagination.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#EAE3D8] font-normal leading-relaxed mb-10 max-w-xl">
            Step into the literary world of Marylinda, where meaningful stories, unforgettable characters, and powerful words come together to inspire, entertain, and leave lasting impressions.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#books"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#43232e] hover:shadow-lg active:scale-95 group"
            >
              <BookOpen className="w-4 h-4 text-[#C5A46D] transition-transform group-hover:rotate-12" />
              Explore My Books
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#F8F5EF]/40 text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#F8F5EF]/10 hover:border-[#F8F5EF] active:scale-95 group"
            >
              <Compass className="w-4 h-4 text-[#C5A46D] transition-transform group-hover:rotate-45" />
              Discover My Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#EAE3D8]/80 mb-2">Scroll to explore</span>
        <a href="#about" aria-label="Scroll to About section" className="p-2 text-[#C5A46D] animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
