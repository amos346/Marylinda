import React, { useEffect, useState } from 'react';

export function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinished, 600); // match transition duration
    }, 1200);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8F5EF] transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#542C3A] flex items-center justify-center text-[#F8F5EF] shadow-xl mb-6 transform animate-pulse">
          <span className="font-serif text-4xl font-bold italic">M</span>
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-[0.25em] text-[#242321] uppercase mb-2">
          Marylinda
        </h1>
        <div className="w-16 h-[2px] bg-[#C5A46D] mb-4"></div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#542C3A]">
          Author & Storyteller
        </p>
      </div>
    </div>
  );
}
