import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Books } from './components/Books';
import { Journey } from './components/Journey';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  const scrollToBooks = () => {
    const booksSection = document.getElementById('books');
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#242321] selection:bg-[#542C3A] selection:text-[#F8F5EF] relative">
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}

      <Navbar onOpenBooksModal={scrollToBooks} />

      <main>
        <Hero />
        <About />
        <Books />
        <Journey />
        <Testimonials />
        <Newsletter />
      </main>

      <Contact />
    </div>
  );
}
