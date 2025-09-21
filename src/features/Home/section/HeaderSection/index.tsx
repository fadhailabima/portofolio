"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { smoothScrollToElement } from "@/utils/scroll";

const HeaderSection: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [interactionReady, setInteractionReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // Simulate loading completion
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setInteractionReady(true);
    }, 800);

    // Browser environment check
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (interactionReady) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [interactionReady]);

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!mounted) {
    return (
      <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:px-12 md:pt-28 lg:px-20 lg:pt-24 xl:px-24">
        {/* Simple loading state for SSR */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
                <p className="font-mono text-sm font-medium tracking-wider text-accent sm:text-base">Hi, my name is</p>
              </div>
              <h1 className="mb-4 leading-[1.1] tracking-tight">
                <span className="block text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                    Fadhail Athaillah
                  </span>
                </span>
                <span className="mt-2 block text-4xl font-bold text-primary/90 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Bima.
                </span>
              </h1>
              <h2 className="mb-8 text-2xl font-bold text-primary/80 sm:text-3xl md:text-4xl lg:text-5xl">
                I build things for the web and mobile.
              </h2>
              <div className="mb-12 max-w-2xl space-y-4">
                <p className="text-lg leading-relaxed text-primary/80 md:text-xl">
                  I'm a Full-Stack Software Engineer with experience in software development, specializing in JavaScript and
                  PHP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-4 pt-32 pb-16 sm:px-6 md:px-12 md:pt-28 lg:px-20 lg:pt-24 xl:px-24">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-base_col/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            <p className="animate-pulse text-sm text-primary/60">Loading amazing experience...</p>
          </div>
        </div>
      )}
      {/* Enhanced Background with Parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-base_col via-base_col_darker to-base_col transition-transform duration-700"
        style={{
          transform: typeof window !== "undefined" ? `translateY(${scrollY * 0.5}px)` : "translateY(0px)"
        }}
      />{" "}
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-accent to-secondary opacity-20 blur-2xl" />
        <div className="opacity-15 absolute bottom-1/3 right-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-secondary to-accent blur-3xl" />
        <div className="absolute top-2/3 left-1/2 h-24 w-24 rounded-full bg-accent opacity-25 blur-xl" />
      </div>
      {/* Floating Particles - Fixed positions for SSR */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { left: "15%", top: "20%", size: 3, delay: 0.5, duration: 4 },
          { left: "25%", top: "60%", size: 2, delay: 1.2, duration: 5 },
          { left: "45%", top: "30%", size: 4, delay: 0.8, duration: 6 },
          { left: "65%", top: "70%", size: 2.5, delay: 2, duration: 4.5 },
          { left: "80%", top: "25%", size: 3.5, delay: 1.5, duration: 5.5 },
          { left: "35%", top: "80%", size: 2, delay: 0.3, duration: 4.2 },
          { left: "75%", top: "50%", size: 3, delay: 1.8, duration: 6.2 },
          { left: "10%", top: "45%", size: 2.5, delay: 0.9, duration: 5.3 },
          { left: "55%", top: "15%", size: 4, delay: 1.1, duration: 4.8 },
          { left: "90%", top: "65%", size: 2, delay: 1.6, duration: 5.7 }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute animate-float rounded-full bg-accent opacity-40"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      {/* Interactive Light Effect - Simplified for SSR */}
      <div
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 blur-3xl transition-all duration-500 ease-out"
        style={{
          left: typeof window !== "undefined" ? Math.max(0, Math.min(window.innerWidth - 288, mousePosition.x - 144)) : 0,
          top: typeof window !== "undefined" ? Math.max(0, Math.min(window.innerHeight - 288, mousePosition.y - 144)) : 0
        }}
      />
      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            {/* Intro Text */}
            <div className="mb-6 flex items-center gap-3" data-aos="fade-up">
              <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
              <p className="font-mono text-sm font-medium tracking-wider text-accent sm:text-base">Hi, my name is</p>
            </div>

            {/* Main Heading - Enhanced Typography */}
            <h1 className="mb-4 leading-[1.1] tracking-tight" data-aos="fade-up" data-aos-delay="200">
              <span className="block text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="bg-300% animate-gradient bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  Fadhail Athaillah
                </span>
              </span>
              <span className="mt-2 block text-4xl font-bold text-primary/90 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Bima.
              </span>
            </h1>

            {/* Subtitle */}
            <h2
              className="mb-8 text-2xl font-bold text-primary/80 sm:text-3xl md:text-4xl lg:text-5xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              I build things for the{" "}
              <span className="relative">
                web and mobile
                <div className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-accent to-secondary" />
              </span>
              .
            </h2>

            {/* Description - Enhanced */}
            <div className="mb-12 max-w-2xl space-y-4" data-aos="fade-up" data-aos-delay="600">
              <p className="text-lg leading-relaxed text-primary/80 md:text-xl">
                I'm a{" "}
                <span className="relative font-semibold text-accent">
                  Full-Stack Software Engineer
                  <div className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent/50" />
                </span>{" "}
                with experience in web development, specializing in JavaScript and PHP.
              </p>

              <p className="text-base leading-relaxed text-primary/60 md:text-lg">
                I'm passionate about creating modern, scalable solutions that deliver exceptional user experiences.
              </p>
            </div>

            {/* Action Buttons - Enhanced */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6" data-aos="fade-up" data-aos-delay="800">
              <a
                href="https://drive.google.com/file/d/1VJOsa5rLHqqUFTGiLA0XsdfH5lxoz5GQ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl border-2 border-accent bg-accent px-8 py-4 font-semibold text-base_col transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-accent hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base_col"
              >
                <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download CV
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </a>

              <button
                onClick={() => router.push("/projects")}
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl border-2 border-secondary/40 bg-transparent px-8 py-4 font-semibold text-secondary transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent/5 hover:text-accent focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-base_col"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                View My Work
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className="hidden lg:col-span-4 lg:flex lg:items-center lg:justify-center"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 h-32 w-32 animate-spin-slow rounded-full border-2 border-accent/20" />
              <div
                className="absolute -bottom-8 -left-8 h-24 w-24 animate-spin-slow rounded-full border-2 border-secondary/20"
                style={{ animationDirection: "reverse" }}
              />

              {/* Main visual */}
              <div className="relative flex h-64 w-64 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 to-secondary/10 backdrop-blur-sm">
                <div className="text-6xl">👨‍💻</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 transition-opacity duration-500 hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced Stats Section - Repositioned */}
      <div className="relative mt-16 w-full" data-aos="fade-up" data-aos-delay="1200">
        {/* Stats Background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/5 via-secondary/5 to-accent/5 blur-xl" />

        <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              label: "Years Experience",
              value: "1+",
              icon: "🚀",
              gradient: "from-accent to-secondary",
              delay: "0",
              description: "Building web solutions"
            },
            {
              label: "Projects Completed",
              value: "10+",
              icon: "⚡",
              gradient: "from-secondary to-accent",
              delay: "100",
              description: "Successful deliveries"
            },
            {
              label: "Technologies",
              value: "10+",
              icon: "🛠️",
              gradient: "from-accent via-secondary to-accent",
              delay: "200",
              description: "Modern tech stack"
            }
          ].map(stat => (
            <div
              key={stat.label}
              className="group relative transform transition-all duration-500 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={stat.delay}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-3 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-3 text-3xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
                  {stat.icon}
                </div>

                {/* Value with animated gradient */}
                <div
                  className={`relative bg-gradient-to-r text-3xl font-bold ${stat.gradient} bg-clip-text text-transparent group-hover:animate-pulse`}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div className="relative mt-2 text-sm font-medium text-primary/70 transition-colors duration-300 group-hover:text-primary">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="relative mt-1 text-xs text-primary/50 transition-colors duration-300 group-hover:text-primary/70">
                  {stat.description}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-accent opacity-0 transition-all duration-300 group-hover:animate-ping group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 h-1 w-1 rounded-full bg-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div
          className="absolute -top-6 left-1/4 h-3 w-3 animate-bounce rounded-full bg-accent/60"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute -bottom-6 right-1/4 h-2 w-2 animate-bounce rounded-full bg-secondary/40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 -left-4 h-1 w-1 animate-ping rounded-full bg-accent/30"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 -right-4 h-1 w-1 animate-ping rounded-full bg-secondary/30"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      {/* Enhanced Scroll Indicator - Fixed Position to Avoid Overlap */}
      <div className="fixed bottom-8 right-8 z-30" data-aos="fade-up" data-aos-delay="1500">
        <div className="group flex flex-col items-center gap-2 rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all duration-300 hover:border-accent/30 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/20">
          {/* Compact design for fixed position */}
          <div className="relative">
            <div className="h-8 w-px bg-gradient-to-b from-accent via-secondary to-transparent opacity-80 transition-all duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 h-8 w-px animate-pulse bg-gradient-to-b from-accent to-transparent opacity-40" />
          </div>

          {/* Enhanced arrow */}
          <div className="relative">
            <svg
              className="h-4 w-4 animate-bounce cursor-pointer text-accent transition-colors duration-300 group-hover:text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ animationDuration: "2s" }}
              onClick={() => smoothScrollToElement("main-content", 100)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>

            {/* Pulse effect on hover */}
            <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
          </div>

          {/* Tooltip on hover */}
          <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 transform rounded-lg bg-base_col/90 px-3 py-1 text-xs font-medium text-accent opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            Scroll Down
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
