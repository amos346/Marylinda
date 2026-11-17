import React, { useState } from 'react';
import { BOOKS } from '../data';
import { Book } from '../types';
import { BookOpen, ShoppingBag, X, ExternalLink, Star, FileText } from 'lucide-react';

export function Books() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [modalType, setModalType] = useState<'readMore' | 'getTheBook' | null>(null);

  const openReadMore = (book: Book) => {
    setSelectedBook(book);
    setModalType('readMore');
  };

  const openGetTheBook = (book: Book) => {
    setSelectedBook(book);
    setModalType('getTheBook');
  };

  const closeModal = () => {
    setSelectedBook(null);
    setModalType(null);
  };

  return (
    <section id="books" className="py-24 sm:py-32 bg-[#EAE3D8]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#542C3A] font-semibold">
              Ebook Showcase
            </span>
            <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#242321] tracking-tight mb-4">
            Stories Worth Discovering
          </h2>
          <p className="text-base sm:text-lg text-[#242321]/70">
            A collection of stories created to inspire, entertain, and stay with you long after the final page.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="group bg-[#F8F5EF] border border-[#EAE3D8] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Book Cover Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#242321]/5">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F5EF] bg-[#542C3A]/90 px-3 py-1.5 backdrop-blur-sm">
                    {book.publishYear} Edition
                  </span>
                </div>
              </div>

              {/* Book Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C5A46D] font-medium block mb-2">
                    {book.genre}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#242321] mb-3 group-hover:text-[#542C3A] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-[#242321]/70 leading-relaxed mb-6 line-clamp-3">
                    {book.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-[#EAE3D8]">
                  <button
                    onClick={() => openReadMore(book)}
                    className="w-full py-2.5 px-4 bg-transparent border border-[#542C3A] text-[#542C3A] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 hover:bg-[#542C3A] hover:text-[#F8F5EF] cursor-pointer"
                  >
                    Read More
                  </button>
                  <button
                    onClick={() => openGetTheBook(book)}
                    className="w-full py-2.5 px-4 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 hover:bg-[#43232e] cursor-pointer"
                  >
                    Get The Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Modals */}
      {selectedBook && modalType === 'readMore' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#F8F5EF] border border-[#C5A46D]/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-12 relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-[#242321] hover:text-[#542C3A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="aspect-[3/4] shadow-lg overflow-hidden bg-[#EAE3D8]">
                  <img src={selectedBook.coverImage} alt={selectedBook.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-xs space-y-1 text-[#242321]/70">
                  <p><strong className="text-[#242321]">Published:</strong> {selectedBook.publishYear}</p>
                  <p><strong className="text-[#242321]">Length:</strong> {selectedBook.pages} pages</p>
                  <p><strong className="text-[#242321]">ISBN:</strong> {selectedBook.isbn}</p>
                </div>
              </div>

              <div className="md:col-span-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C5A46D] font-medium block mb-1">
                  {selectedBook.genre}
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#242321] mb-3">
                  {selectedBook.title}
                </h3>
                <p className="font-serif italic text-lg text-[#542C3A] mb-6">
                  "{selectedBook.tagline}"
                </p>

                <div className="space-y-4 text-[#242321]/80 text-sm sm:text-base leading-relaxed mb-6">
                  <p>{selectedBook.longDescription}</p>
                </div>

                <div className="bg-[#EAE3D8]/50 p-6 border-l-2 border-[#C5A46D] mb-6">
                  <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#542C3A] mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#C5A46D]" /> Sample Excerpt
                  </h4>
                  <p className="font-serif italic text-[#242321]/90 text-sm leading-relaxed">
                    "{selectedBook.sampleExcerpt}"
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setModalType('getTheBook');
                    }}
                    className="px-6 py-3 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#43232e]"
                  >
                    Get The Book
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 border border-[#242321]/30 text-[#242321] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#242321]/5"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedBook && modalType === 'getTheBook' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#F8F5EF] border border-[#C5A46D]/40 max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-[#242321] hover:text-[#542C3A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A46D] font-medium block mb-1">
              Retailers & Editions
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#242321] mb-2">
              Get {selectedBook.title}
            </h3>
            <p className="text-sm text-[#242321]/70 mb-6">
              Choose your preferred retailer or digital format below:
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={selectedBook.purchaseLinks.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#F8F5EF] border border-[#EAE3D8] hover:border-[#542C3A] transition-all group"
              >
                <span className="font-semibold text-sm text-[#242321] group-hover:text-[#542C3A]">Amazon Kindle & Hardcover</span>
                <ExternalLink className="w-4 h-4 text-[#C5A46D]" />
              </a>
              <a
                href={selectedBook.purchaseLinks.barnesNoble}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#F8F5EF] border border-[#EAE3D8] hover:border-[#542C3A] transition-all group"
              >
                <span className="font-semibold text-sm text-[#242321] group-hover:text-[#542C3A]">Barnes & Noble Nook</span>
                <ExternalLink className="w-4 h-4 text-[#C5A46D]" />
              </a>
              <a
                href={selectedBook.purchaseLinks.bookshop}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#F8F5EF] border border-[#EAE3D8] hover:border-[#542C3A] transition-all group"
              >
                <span className="font-semibold text-sm text-[#242321] group-hover:text-[#542C3A]">Bookshop.org (Support Indie)</span>
                <ExternalLink className="w-4 h-4 text-[#C5A46D]" />
              </a>
              <a
                href={selectedBook.purchaseLinks.appleBooks}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#F8F5EF] border border-[#EAE3D8] hover:border-[#542C3A] transition-all group"
              >
                <span className="font-semibold text-sm text-[#242321] group-hover:text-[#542C3A]">Apple Books</span>
                <ExternalLink className="w-4 h-4 text-[#C5A46D]" />
              </a>
            </div>

            <button
              onClick={closeModal}
              className="w-full py-3 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#43232e]"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
