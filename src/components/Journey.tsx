import React from 'react';
import { JOURNEY_STEPS } from '../data';
import { Sparkles, Compass } from 'lucide-react';

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#542C3A] font-semibold">
              Creative Process
            </span>
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#242321] tracking-tight mb-4">
            Behind Every Story Is a Journey
          </h2>
          <p className="text-base sm:text-lg text-[#242321]/70">
            Discover the quiet inspirations, rigorous research, and heartfelt dedication that bring Marylinda's novels to life.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-20 lg:space-y-28">
          {JOURNEY_STEPS.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 border border-[#C5A46D]/40 translate-x-3 translate-y-3 pointer-events-none hidden sm:block"></div>
                    <div className="relative aspect-[16/10] overflow-hidden shadow-xl bg-[#EAE3D8]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-[#542C3A] text-[#F8F5EF] w-12 h-12 flex items-center justify-center font-serif text-lg font-bold shadow-md">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="max-w-xl">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C5A46D] font-semibold block mb-3">
                      Stage {step.number}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#242321] mb-6">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#242321]/80 leading-relaxed font-normal mb-6">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#542C3A] font-semibold">
                      <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                      <span>Authenticity & Imagination</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Banner */}
        <div className="mt-24 sm:mt-32 bg-[#542C3A] text-[#F8F5EF] p-10 sm:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Compass className="w-64 h-64 text-[#C5A46D]" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="font-serif italic text-2xl sm:text-3xl text-[#C5A46D] block mb-4">
              "A book is a quiet sanctuary built of words, where readers find reflections of their own courage."
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-[#EAE3D8] font-semibold">
              — Marylinda
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
