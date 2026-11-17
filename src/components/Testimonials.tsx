import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#EAE3D8]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#542C3A] font-semibold">
              Reader Experiences
            </span>
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#242321] tracking-tight mb-4">
            Words From My Readers
          </h2>
          <p className="text-base sm:text-lg text-[#242321]/70">
            Every story becomes more special when it finds its way into someone's heart.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#F8F5EF] border border-[#EAE3D8] p-8 sm:p-16 shadow-xl relative">
            {/* Quote Icon Background */}
            <div className="absolute top-6 left-6 text-[#C5A46D]/20 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C5A46D] text-[#C5A46D]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-xl sm:text-3xl text-[#242321] leading-relaxed mb-8 italic">
                "{current.quote}"
              </p>

              {/* Author & Publication */}
              <div className="border-t border-[#EAE3D8] pt-6 w-full max-w-xs mx-auto">
                <h4 className="font-serif text-lg font-bold text-[#542C3A]">
                  {current.author}
                </h4>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C5A46D] font-medium mt-1">
                  {current.role} • {current.publication}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 -left-5 sm:-left-6 flex items-center">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-[#542C3A] text-[#F8F5EF] flex items-center justify-center shadow-lg hover:bg-[#43232e] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 -right-5 sm:-right-6 flex items-center">
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-[#542C3A] text-[#F8F5EF] flex items-center justify-center shadow-lg hover:bg-[#43232e] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#542C3A]' : 'w-2 bg-[#C5A46D]/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
