import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Instagram, Facebook, Globe, BookOpen, X } from 'lucide-react';

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#242321] text-[#F8F5EF] pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Contact Section Header & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#F8F5EF]/10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A46D]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A46D] font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Let's Connect
            </h2>
            <p className="text-base text-[#EAE3D8]/80 leading-relaxed mb-8 max-w-lg">
              Whether you are a reader sharing your thoughts on a novel, a book club coordinator scheduling a discussion, or a publisher inquiring about foreign rights, Marylinda loves hearing from you.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A46D]" />
                <a href="mailto:contact@marylindabooks.com" className="text-sm font-medium hover:text-[#C5A46D] transition-colors">
                  contact@marylindabooks.com
                </a>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A46D] text-[#242321] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#b3915b] hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Open Message Form
            </button>
          </div>

          {/* Social Links & Quick Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Follow the Journey</h3>
              <p className="text-sm text-[#EAE3D8]/70 mb-8 max-w-md">
                Connect across literary channels for behind-the-scenes glimpses of manuscript drafts, poetry snippets, and reading recommendations.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#F8F5EF]/5 border border-[#F8F5EF]/10 hover:border-[#C5A46D] flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-wider text-[#EAE3D8]">Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#F8F5EF]/5 border border-[#F8F5EF]/10 hover:border-[#C5A46D] flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <Facebook className="w-5 h-5 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-wider text-[#EAE3D8]">Facebook</span>
                </a>
                <a
                  href="https://goodreads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#F8F5EF]/5 border border-[#F8F5EF]/10 hover:border-[#C5A46D] flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <BookOpen className="w-5 h-5 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-wider text-[#EAE3D8]">Goodreads</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#F8F5EF]/5 border border-[#F8F5EF]/10 hover:border-[#C5A46D] flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <Globe className="w-5 h-5 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-wider text-[#EAE3D8]">TikTok</span>
                </a>
              </div>
            </div>

            <div className="bg-[#F8F5EF]/5 p-6 border-l-2 border-[#C5A46D]">
              <p className="font-serif italic text-sm text-[#EAE3D8]">
                "A reader lives a thousand lives before he dies. The man who never reads lives only one."
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F8F5EF] block mb-1">
              MARYLINDA
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A46D]">
              Stories that inspire. Words that remain.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.15em] text-[#EAE3D8]/80">
            <a href="#home" className="hover:text-[#C5A46D] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#C5A46D] transition-colors">About</a>
            <a href="#books" className="hover:text-[#C5A46D] transition-colors">Books</a>
            <a href="#journey" className="hover:text-[#C5A46D] transition-colors">Journey</a>
            <a href="#reviews" className="hover:text-[#C5A46D] transition-colors">Reviews</a>
            <a href="#newsletter" className="hover:text-[#C5A46D] transition-colors">Newsletter</a>
            <a href="#contact" className="hover:text-[#C5A46D] transition-colors">Contact</a>
          </div>

          <div className="text-xs text-[#EAE3D8]/60 text-center md:text-right">
            <p>© {new Date().getFullYear()} Marylinda. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn text-[#242321]">
          <div className="bg-[#F8F5EF] border border-[#C5A46D]/40 max-w-lg w-full p-8 sm:p-10 relative shadow-2xl">
            <button
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="absolute top-6 right-6 p-2 text-[#242321] hover:text-[#542C3A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-[#C5A46D] mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-[#242321] mb-2">Message Sent</h3>
                <p className="text-sm text-[#242321]/70 mb-6">
                  Thank you for reaching out. Marylinda and her literary team will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-3 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="inline-flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4 text-[#C5A46D]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#542C3A] font-semibold">Direct Inquiry</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#242321] mb-4">Send a Message</h3>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#242321]/70 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAE3D8]/30 border border-[#EAE3D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#242321]/70 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAE3D8]/30 border border-[#EAE3D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#242321]/70 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAE3D8]/30 border border-[#EAE3D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                    placeholder="Book Club Inquiry / Fan Mail"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#242321]/70 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAE3D8]/30 border border-[#EAE3D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#542C3A] text-[#F8F5EF] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#43232e]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
