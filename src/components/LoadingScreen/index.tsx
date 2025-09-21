"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-base_col transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="mb-4 flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse"
            >
              <defs>
                <linearGradient id="loadingLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#83DBFF", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#5EEAD4", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#83DBFF", stopOpacity: 1 }} />
                </linearGradient>
                <filter id="loadingGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Circle with Glow */}
              <circle cx="32" cy="32" r="30" fill="url(#loadingLogoGradient)" opacity="0.1" filter="url(#loadingGlow)" />

              {/* Main Text "FAB" */}
              <text
                x="32"
                y="42"
                fontFamily="Arial, sans-serif"
                fontSize="24"
                fontWeight="bold"
                textAnchor="middle"
                fill="url(#loadingLogoGradient)"
                filter="url(#loadingGlow)"
              >
                FAB
              </text>

              {/* Animated Decorative Elements */}
              <circle cx="12" cy="12" r="2" fill="url(#loadingLogoGradient)" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="52" cy="12" r="2" fill="url(#loadingLogoGradient)" opacity="0.8">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="12" cy="52" r="2" fill="url(#loadingLogoGradient)" opacity="0.7">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="52" cy="52" r="2" fill="url(#loadingLogoGradient)" opacity="0.5">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <p className="mt-2 font-mono text-sm text-primary opacity-60">Loading awesome portfolio...</p>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto w-80 max-w-sm">
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-base_col_darker">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 animate-pulse rounded-full bg-white/20" />
            </div>
          </div>
          <p className="font-mono text-sm text-accent">{Math.floor(progress)}%</p>
        </div>

        {/* Floating Elements */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-pulse rounded-full bg-accent opacity-30"
              style={{
                left: `${10 + i * 4}%`,
                top: `${20 + Math.sin(i) * 30}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
