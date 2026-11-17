import React, { useState } from 'react';
import { Sparkles, Heart, BookOpen, X } from 'lucide-react';

export function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#542C3A] font-semibold">
              The Author
            </span>
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#242321] tracking-tight">
            A Little About Marylinda
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Author Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-[#C5A46D]/40 translate-x-3 translate-y-3 pointer-events-none hidden sm:block"></div>
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-none shadow-xl bg-[#EAE3D8]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                  alt="Marylinda, American Author"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#542C3A] text-[#F8F5EF] p-6 shadow-xl hidden sm:flex flex-col items-center justify-center w-36 h-36 border border-[#C5A46D]/30">
                <Sparkles className="w-6 h-6 text-[#C5A46D] mb-2" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-center font-medium">Bestselling Author</span>
              </div>
            </div>
          </div>

          {/* Biography Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#542C3A] mb-6 leading-snug">
              Crafting narratives that linger in the heart long after the final page.
            </h3>

            <div className="space-y-4 text-[#242321]/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
              <p>
                For Marylinda, writing has never been merely about putting words on a page—it is about carving out sanctuary spaces in a fast-paced world. Raised amidst the quiet, mist-shrouded coastlines of New England, she developed an early fascination with the unspoken stories carried by the tides, old letters, and shadowed libraries.
              </p>
              <p>
                Her creative journey is guided by an unwavering belief in the transformative power of imagination. Whether she is exploring historical romance or contemporary solitude, Marylinda crafts multidimensional characters who grapple with love, loss, courage, and redemption with authentic vulnerability.
              </p>
              <p>
                When she is not immersed in manuscript drafts, Marylinda can be found wandering through botanical gardens with a leather-bound notebook in hand, or corresponding with devoted readers who have made her stories part of their personal literary journeys.
              </p>
            </div>

            {/* Signature & Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-[#EAE3D8]">
              <div>
                <span className="font-serif italic text-3xl font-bold text-[#542C3A] tracking-wider block">
                  Marylinda
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C5A46D] font-medium">
                  American Author & Novelist
                </span>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#43232e] hover:shadow-md cursor-pointer active:scale-95"
              >
                <Heart className="w-4 h-4 text-[#C5A46D]" />
                Read My Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Read My Story Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#F8F5EF] border border-[#C5A46D]/40 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-12 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#242321] hover:text-[#542C3A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#C5A46D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#542C3A] font-semibold">
                The Creative Journey
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#242321] mb-6">
              Behind the Written Word
            </h3>

            <div className="space-y-4 text-[#242321]/80 text-base leading-relaxed">
              <p>
                "Every book I write is an invitation—a quiet room where reader and author sit together across time and space."
              </p>
              <p>
                Marylinda’s writing career began in her university library, where she spent countless hours restoring 19th-century leatherbound editions. That tactile connection to history deeply influenced her literary style, teaching her that every book holds an intimate soul.
              </p>
              <p>
                Her philosophy centers on emotional truth. "Plot mechanics matter," she notes, "but what stays with a reader is how a story made them feel when the house was dark and quiet at midnight."
              </p>
              <p>
                Today, Marylinda lives in a sunlit farmhouse overlooking the New England hills, accompanied by a lazy golden retriever and shelves that overflow with poetry, art history, and classic novels. She is currently at work on her fifth novel.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE3D8] flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-3 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#43232e]"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
