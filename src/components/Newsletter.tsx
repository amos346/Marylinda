import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setStatus('success');
    setErrorMessage('');
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-24 sm:py-32 bg-[#542C3A] text-[#F8F5EF] relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/40 mb-6">
            <Mail className="w-4 h-4 text-[#C5A46D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F8F5EF]">
              Exclusive Updates
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            A Letter From Marylinda
          </h2>

          <p className="text-base sm:text-lg text-[#EAE3D8] leading-relaxed mb-10 max-w-2xl mx-auto">
            Stay connected and be among the first to discover new releases, upcoming stories, exclusive reading updates, and special announcements from Marylinda.
          </p>

          {/* Subscription Form */}
          {status === 'success' ? (
            <div className="bg-[#F8F5EF]/10 border border-[#C5A46D] p-8 max-w-xl mx-auto text-center animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-[#C5A46D] mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-[#F8F5EF] mb-2">
                Welcome to the Circle
              </h3>
              <p className="text-[#EAE3D8] text-sm leading-relaxed">
                Thank you for subscribing. A welcome letter and reading guide have been dispatched to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  className="flex-grow px-6 py-4 bg-[#F8F5EF] text-[#242321] placeholder-[#242321]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A46D]"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#C5A46D] text-[#242321] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#b3915b] hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              {status === 'error' && (
                <div className="flex items-center justify-center gap-2 mt-3 text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <p className="text-[11px] text-[#EAE3D8]/70 mt-4 uppercase tracking-[0.15em]">
                We respect your privacy. Unsubscribe at any time with a single click.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
