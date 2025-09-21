"use client";

import { NAVBAR_ITEMS } from "@/constants/components";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);
  const previousCurrentScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsPageTop(currentScrollPosition === 0);
      if (previousCurrentScrollPosition.current < currentScrollPosition && !isNavbarVisible) {
        setIsNavbarVisible(true);
      } else if (previousCurrentScrollPosition.current > currentScrollPosition && isNavbarVisible) {
        setIsNavbarVisible(false);
      }
      previousCurrentScrollPosition.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavbarVisible]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 z-[999] w-screen ${
        !isNavbarVisible
          ? !isPageTop
            ? `translate-y-0 border-b border-white/10 bg-base_col/80 shadow-[0_10px_30px_-10px_rgba(131,219,255,0.1)] backdrop-blur-xl transition-all duration-300 ease-in-out ${
                !isOpen ? "bg-opacity-80" : "bg-opacity-95"
              }`
            : "bg-base_col/60 py-3 backdrop-blur-sm transition-all"
          : `transition-all duration-300 ease-in-out ${!isPageTop ? "-translate-y-full" : "translate-y-0"}`
      }`}
    >
      <div className="flex h-16 items-center justify-between px-7 lg:px-14">
        <Link href="/" className="group flex items-center gap-3 text-accent" scroll={false}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <defs>
              <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#83DBFF", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#5EEAD4", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#83DBFF", stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Background Circle */}
            <circle cx="32" cy="32" r="28" fill="url(#navLogoGradient)" opacity="0.1" />

            {/* Main Text "F" for compact navbar */}
            <text
              x="32"
              y="42"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              fontWeight="bold"
              textAnchor="middle"
              fill="url(#navLogoGradient)"
            >
              F
            </text>
          </svg>
          <h1
            className="transform bg-gradient-to-r from-accent to-secondary bg-clip-text text-2xl font-semibold text-transparent transition-all duration-300 group-hover:scale-105 group-hover:from-secondary group-hover:to-accent"
            data-aos="fade-down"
            data-aos-once="true"
          >
            Fadhail A Bima
          </h1>
        </Link>

        <div className="flex lg:hidden">
          <button
            aria-label={!isOpen ? "Open Navigation Menu" : "Close Navigation Menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-30"
          >
            {!isOpen ? (
              <BiMenuAltRight className="h-10 w-10 fill-current text-accent" />
            ) : (
              <BiX className="h-10 w-10 fill-current text-accent" />
            )}
          </button>
        </div>

        <div className="text-base-content hidden gap-10 lg:flex">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link
              href={item.href}
              className="group relative flex flex-col items-end overflow-hidden font-mono text-sm text-primary transition-all duration-300 hover:text-accent xl:text-base"
              key={index}
              data-aos="fade-down"
              data-aos-delay={`${index}00`}
              data-aos-once="true"
              scroll={false}
            >
              <div className="absolute inset-0 origin-center scale-x-0 transform rounded-lg bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative text-xs text-accent transition-colors duration-300 group-hover:text-secondary">
                {item.number}
              </span>
              <p className="relative transition-transform duration-300 group-hover:scale-105 group-hover:transform">{`// ${item.title}`}</p>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 h-screen w-full lg:hidden ${
          !isOpen
            ? "translate-x-full transition-all duration-300 ease-in"
            : "translate-x-0 transition-all duration-300 ease-out"
        }`}
      >
        <div className="fixed top-0 z-0 h-full w-full backdrop-blur-sm"></div>
        <div className="fixed right-0 top-0 z-[99] h-full w-3/4 bg-base_col_darker drop-shadow-lg md:w-1/2">
          <div className="mt-44 flex flex-col items-center justify-center gap-12 text-base md:text-lg">
            {NAVBAR_ITEMS.map((item, index) => (
              <Link
                href={item.href}
                className="text-center font-mono text-primary hover:text-accent"
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <p className="flex flex-col">
                  <span className="text-sm text-accent">{item.number}.</span>
                  {`${item.title}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
