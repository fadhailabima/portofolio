"use client";

import type { FC } from "react";
import { Dominos } from "@/components";
import { useState, useEffect } from "react";

const MainContent: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeParticle, setActiveParticle] = useState<number | null>(null);
  const [rippleEffect, setRippleEffect] = useState({ x: 0, y: 0, show: false });

  const triggerHapticFeedback = () => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(50);
    }
  };

  const handleRippleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRippleEffect({ x, y, show: true });
    triggerHapticFeedback();

    setTimeout(() => setRippleEffect(prev => ({ ...prev, show: false })), 600);
  };

  useEffect(() => {
    setMounted(true);

    // Loading state management
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    // Browser environment check
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add particle interaction
      const rect = document.getElementById("main-content")?.getBoundingClientRect();
      if (rect) {
        const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
        const relativeY = ((e.clientY - rect.top) / rect.height) * 100;

        // Highlight nearest particle
        const particleIndex = Math.floor((relativeX + relativeY) / 13.33) % 15;
        setActiveParticle(particleIndex);
      }
    };

    const handleScroll = () => {
      const element = document.getElementById("main-content");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="main-content"
      className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden py-12 text-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base_col_darker/20 to-transparent" />

      {/* Interactive light orb */}
      <div
        className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 blur-3xl transition-all duration-700 ease-out"
        style={{
          left: mounted ? mousePosition.x / 10 : 0,
          top: mounted ? mousePosition.y / 10 : 0,
          transform: `translate(-50%, -50%) scale(${mounted && isVisible ? 1.2 : 0.8})`,
          opacity: mounted ? 1 : 0
        }}
      />

      {/* Enhanced Main content */}
      <div className="relative z-40 mx-auto mb-8 max-w-5xl md:mb-12">
        {/* Hero Card */}
        <div className="glass-strong group relative transform rounded-3xl border border-white/20 p-8 shadow-2xl transition-all duration-500 hover:scale-102 md:p-12">
          {/* Enhanced animated border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent via-secondary to-accent opacity-0 blur-sm transition-all duration-500 group-hover:opacity-40" />

          <div className="relative">
            {/* Enhanced section label */}
            <div
              className="bg-accent/15 mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-3 font-mono text-sm font-medium text-accent shadow-sm"
              data-aos="fade-up"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              What I Do
            </div>

            <h2
              className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <span className="bg-300% block animate-gradient bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <span className="bg-300% mt-3 block animate-gradient bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p
              className="mb-12 max-w-3xl text-lg leading-relaxed text-primary md:text-xl lg:text-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I specialize in creating{" "}
              <span className="bg-accent/15 rounded-lg border border-accent/30 px-3 py-1 font-bold text-accent shadow-sm">
                modern, scalable digital solutions
              </span>{" "}
              that deliver exceptional user experiences and drive business growth through innovative technology.
            </p>

            {/* Enhanced Interactive Services Grid */}
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="300">
              {[
                {
                  icon: "🔧",
                  title: "Web Development",
                  description: "Building modern, responsive applications with cutting-edge technologies",
                  skills: ["React", "Next.js", "TypeScript"],
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  iconBg: "from-blue-500 to-cyan-500",
                  index: 0
                },
                {
                  icon: "📱",
                  title: "Mobile Development",
                  description: "Creating seamless mobile experiences across all platforms",
                  skills: ["React Native", "Flutter", "iOS/Android"],
                  gradient: "from-purple-500/20 to-pink-500/20",
                  iconBg: "from-purple-500 to-pink-500",
                  index: 1
                },
                {
                  icon: "☁️",
                  title: "Cloud Solutions",
                  description: "Deploying scalable, secure cloud infrastructure and services",
                  skills: ["AWS", "Docker", "Kubernetes"],
                  gradient: "from-green-500/20 to-emerald-500/20",
                  iconBg: "from-green-500 to-emerald-500",
                  index: 2
                }
              ].map(service => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-accent/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/25"
                  data-aos="zoom-in"
                  data-aos-delay={`${400 + service.index * 100}`}
                  onMouseEnter={() => {
                    setHoveredService(service.index);
                    triggerHapticFeedback();
                  }}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Morphing border effect */}
                  <div className="animate-morphing absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />

                  <div className="relative">
                    {/* Enhanced icon with background */}
                    <div className="mb-6 flex justify-center">
                      <div
                        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.iconBg} shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-xl`}
                      >
                        <span className="text-2xl">{service.icon}</span>

                        {/* Pulse ring effect */}
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-all duration-500 group-hover:animate-ping group-hover:opacity-100" />
                      </div>
                    </div>

                    {/* Title with gradient text */}
                    <h3 className="group-hover:gradient-text mb-4 text-center text-xl font-bold text-white transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-center text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white">
                      {service.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:text-white"
                          style={{
                            animationDelay: `${skillIndex * 100}ms`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Interactive elements */}
                    <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-accent/40 opacity-0 transition-all duration-300 group-hover:animate-pulse group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-secondary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Hover indicator */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section with Interactive Elements */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="700">
              {/* Main CTA Container */}
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="glass-strong group relative overflow-hidden rounded-3xl border border-white/20 p-8 shadow-2xl transition-all duration-500 hover:border-accent/40 hover:shadow-accent/20">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    {/* Left side - Text content */}
                    <div className="text-center md:text-left">
                      <h3 className="group-hover:gradient-text mb-2 text-2xl font-bold text-white transition-all duration-300 md:text-3xl">
                        Ready to Create Something Amazing?
                      </h3>
                      <p className="max-w-md text-gray-300 transition-colors duration-300 group-hover:text-white">
                        Let's collaborate and turn your vision into reality with cutting-edge technology.
                      </p>
                    </div>

                    {/* Right side - CTA buttons */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      {/* Primary CTA */}
                      <a
                        href="mailto:bimadharmawan6@gmail.com"
                        onClick={e => {
                          handleRippleClick(e);
                        }}
                        className="focus-ring group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-accent to-secondary px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/50"
                      >
                        {/* Ripple effect */}
                        {rippleEffect.show && (
                          <span
                            className="absolute animate-ping rounded-full bg-white/30"
                            style={{
                              left: rippleEffect.x - 10,
                              top: rippleEffect.y - 10,
                              width: 20,
                              height: 20
                            }}
                          />
                        )}

                        {/* Button content */}
                        <span className="relative flex items-center gap-3">
                          <span className="text-xl">�</span>
                          Start Project
                          <svg
                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      </a>

                      {/* Secondary CTA */}
                      <a
                        href="https://drive.google.com/file/d/1lV4M37AvGsObb7SmAGQOpN3IwuABZn1X/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring group inline-block rounded-xl border-2 border-accent/40 bg-transparent px-8 py-4 font-semibold text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-lg">👁️</span>
                          View Portfolio
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="animate-float-gentle absolute -top-2 left-1/4 h-4 w-4 rounded-full bg-accent/60" />
                  <div className="absolute -bottom-2 right-1/4 h-3 w-3 animate-bounce rounded-full bg-secondary/40" />
                  <div className="absolute top-1/2 -left-2 h-2 w-2 animate-ping rounded-full bg-accent/30" />
                  <div className="absolute top-1/2 -right-2 h-2 w-2 animate-pulse rounded-full bg-secondary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dominos background */}
      <div className="bg-base-100 absolute z-0 m-auto h-[600px] w-[350px] transform opacity-25 transition-all duration-1000 hover:scale-105 md:w-[672px] lg:w-[825px] xl:w-[1080px]">
        <Dominos />
      </div>

      {/* Enhanced Interactive Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { x: 15, y: 25, size: 3, type: "circle", delay: 0, duration: 4 },
          { x: 85, y: 35, size: 2, type: "square", delay: 0.5, duration: 5 },
          { x: 25, y: 65, size: 4, type: "triangle", delay: 1, duration: 3.5 },
          { x: 75, y: 15, size: 2.5, type: "circle", delay: 1.5, duration: 4.5 },
          { x: 45, y: 85, size: 3.5, type: "square", delay: 2, duration: 4 },
          { x: 65, y: 55, size: 2, type: "circle", delay: 0.3, duration: 5.5 },
          { x: 35, y: 45, size: 3, type: "triangle", delay: 1.8, duration: 3.8 },
          { x: 55, y: 25, size: 2.5, type: "square", delay: 0.8, duration: 4.2 },
          { x: 5, y: 75, size: 4, type: "circle", delay: 1.2, duration: 5.2 },
          { x: 95, y: 65, size: 2, type: "triangle", delay: 2.2, duration: 4.8 },
          { x: 20, y: 15, size: 3, type: "square", delay: 0.6, duration: 4.6 },
          { x: 80, y: 85, size: 2.5, type: "circle", delay: 1.4, duration: 3.9 },
          { x: 40, y: 5, size: 3.5, type: "triangle", delay: 0.9, duration: 5.1 },
          { x: 60, y: 95, size: 2, type: "square", delay: 1.7, duration: 4.3 },
          { x: 10, y: 45, size: 3, type: "circle", delay: 2.5, duration: 4.7 }
        ].map((particle, i) => {
          const isActive = activeParticle === i;
          const baseClasses = "absolute transition-all duration-700 opacity-40";
          const activeClasses = isActive ? "opacity-80 scale-150" : "";

          let shapeClasses = "";
          let bgClasses = "";

          switch (particle.type) {
            case "circle":
              shapeClasses = "rounded-full";
              bgClasses = "bg-gradient-to-r from-accent to-secondary";
              break;
            case "square":
              shapeClasses = "rounded-sm rotate-45";
              bgClasses = "bg-gradient-to-br from-secondary to-accent";
              break;
            case "triangle":
              shapeClasses = "rounded-full";
              bgClasses = "bg-gradient-to-tr from-accent via-secondary to-accent";
              break;
          }

          return (
            <div
              key={i}
              className={`${baseClasses} ${shapeClasses} ${bgClasses} ${activeClasses} animate-float-gentle`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                filter: isActive ? "drop-shadow(0 0 8px currentColor)" : "none"
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MainContent;
