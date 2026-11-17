import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenBooksModal: () => void;
}

export function Navbar({ onOpenBooksModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Books', href: '#books' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm py-4 border-b border-[#EAE3D8]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-decoration-none"
        >
          <span className={`font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] transition-colors duration-300 ${
            scrolled ? 'text-[#542C3A]' : 'text-[#F8F5EF] drop-shadow-md'
          }`}>
            MARYLINDA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-200 hover:text-[#C5A46D] ${
                scrolled ? 'text-[#242321]' : 'text-[#F8F5EF]/90 drop-shadow-sm'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenBooksModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#43232e] hover:shadow-md cursor-pointer active:scale-95"
          >
            <BookOpen className="w-4 h-4 text-[#C5A46D]" />
            Get My Books
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md transition-colors ${
              scrolled ? 'text-[#242321]' : 'text-[#F8F5EF]'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F8F5EF] border-b border-[#EAE3D8] shadow-lg py-6 px-8 md:hidden animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-[0.15em] font-medium text-[#242321] hover:text-[#542C3A] py-1 border-b border-transparent hover:border-[#C5A46D] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooksModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em]"
              >
                <BookOpen className="w-4 h-4 text-[#C5A46D]" />
                Get My Books
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
