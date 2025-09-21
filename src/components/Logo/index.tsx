import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 64, className = "", animated = false }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={`logoGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#83DBFF", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#5EEAD4", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#83DBFF", stopOpacity: 1 }} />
        </linearGradient>
        <filter id={`glow-${size}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background Circle with Glow */}
      <circle cx="32" cy="32" r="30" fill={`url(#logoGradient-${size})`} opacity="0.1" filter={`url(#glow-${size})`} />

      {/* Main Text "FAB" */}
      <text
        x="32"
        y="42"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        fill={`url(#logoGradient-${size})`}
        filter={`url(#glow-${size})`}
      >
        FAB
      </text>

      {/* Decorative Elements */}
      {animated && (
        <>
          <circle cx="12" cy="12" r="2" fill={`url(#logoGradient-${size})`} opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="52" cy="12" r="2" fill={`url(#logoGradient-${size})`} opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="12" cy="52" r="2" fill={`url(#logoGradient-${size})`} opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="52" cy="52" r="2" fill={`url(#logoGradient-${size})`} opacity="0.5">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  );
};

export default Logo;
