"use client";

import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 z-[999] h-1 w-full bg-base_col_darker">
        <div
          className="h-full bg-gradient-to-r from-accent via-secondary to-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll to top button */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group fixed bottom-8 right-8 z-50"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl transition-all duration-300 group-hover:blur-2xl" />

            {/* Button */}
            <div className="relative flex h-12 w-12 transform items-center justify-center rounded-full border-2 border-accent/30 bg-base_col/80 text-accent backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-base_col group-hover:shadow-lg group-hover:shadow-accent/20">
              <svg
                className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollIndicator;
