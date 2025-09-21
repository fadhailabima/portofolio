"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectGetInTouchSection } from "./section";

const Project = () => {
  const featuredProjects = [
    {
      name: "Vendor Management System",
      desc: "A comprehensive vendor management platform that streamlines supplier registration, contract management, performance tracking, and procurement processes with an intuitive interface for procurement teams and vendors.",
      image: "/images/vms.webp",
      techStack: ["ExpressJS", "React.js", "PostgreSQL"],
      status: "New",
      icon: "📋",
      featured: true
    },
    {
      name: "KostKita",
      desc: "A mobile application for finding and managing boarding houses with features including location-based search, price filtering, facility comparison, and integrated booking system.",
      image: "/images/kostkita2.webp",
      image2: "/images/coffe-bean.webp",
      techStack: ["Flutter", "ExpressJS", "PostgreSQL"],
      status: "Featured",
      icon: "🏠",
      featured: true
    },
    {
      name: "Human Resource Information System",
      desc: "A comprehensive HRIS platform for managing employee data, attendance tracking, payroll processing, and performance evaluation with advanced analytics dashboard and reporting capabilities.",
      image: "/images/hris.webp",
      techStack: ["ExpressJs", "NextJs", "PostgreSQL", "Docker"],
      status: "Featured",
      icon: "👥",
      featured: true
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Featured Projects Section */}
      <div className="container mx-auto px-6 pb-20 pt-28 lg:px-8">
        <div className="mb-20 text-center">
          <h1
            className="mb-6 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-5xl font-bold text-transparent"
            data-aos="fade-up"
          >
            Featured Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary/80" data-aos="fade-up" data-aos-delay="100">
            Showcasing my latest work in web development, mobile applications, and digital solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-8">
          {/* Project 1 - VMS (Landscape) */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/20 lg:col-span-7"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

            <div className="relative h-80 overflow-hidden rounded-t-3xl">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${featuredProjects[0].image})` }}
              />
              <div className="from-dark via-dark/80 to-dark/30 absolute inset-0 bg-gradient-to-t" />
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                {featuredProjects[0].techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="rounded-full border border-secondary/50 bg-secondary/40 px-4 py-2 text-sm font-semibold text-white drop-shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-secondary/60"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-6 right-6 z-20">
                <div className="flex items-center gap-2 rounded-full border border-green-400/50 bg-green-500/40 px-3 py-1 drop-shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-200"></div>
                  <span className="text-xs font-semibold text-white">New</span>
                </div>
              </div>
            </div>

            <div className="relative p-8">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg transition-colors duration-300 group-hover:text-secondary">
                  {featuredProjects[0].name}
                </h3>
                <div className="rounded-full bg-gradient-to-r from-secondary to-accent p-2">
                  <span className="text-2xl">{featuredProjects[0].icon}</span>
                </div>
              </div>
              <p className="mb-6 text-base font-medium leading-relaxed text-white drop-shadow-md transition-colors duration-300 group-hover:text-secondary">
                {featuredProjects[0].desc}
              </p>
              <div className="flex gap-4 text-xs">
                <div className="rounded-lg border border-secondary/20 bg-secondary/30 py-2 px-3 text-center transition-all duration-300 hover:bg-secondary/50">
                  <div className="font-bold text-white drop-shadow-sm">Admin</div>
                  <div className="text-white/90">Dashboard</div>
                </div>
                <div className="rounded-lg border border-accent/20 bg-accent/30 py-2 px-3 text-center transition-all duration-300 hover:bg-accent/50">
                  <div className="font-bold text-white drop-shadow-sm">Real-time</div>
                  <div className="text-white/90">Tracking</div>
                </div>
                <div className="rounded-lg border border-secondary/20 bg-secondary/30 py-2 px-3 text-center transition-all duration-300 hover:bg-secondary/50">
                  <div className="font-bold text-white drop-shadow-sm">Reports</div>
                  <div className="text-white/90">Analytics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - KostKita (Portrait with enhanced design) */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/20 lg:col-span-5 lg:row-span-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

            {/* Enhanced Image Section with Overlay Content */}
            <div className="relative h-full overflow-hidden rounded-3xl">
              <div
                className="h-3/5 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featuredProjects[1].image})` }}
              />

              {/* Enhanced Gradient Overlays for Better Text Readability */}
              <div className="from-dark/95 via-dark/30 absolute inset-0 bg-gradient-to-t to-transparent" />

              {/* Enhanced Tech Stack Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                {featuredProjects[1].techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="animate-fade-in rounded-full border border-accent/50 bg-accent/40 px-3 py-1 text-xs font-semibold text-white drop-shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-accent/60"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enhanced Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/40 px-3 py-1 drop-shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-blue-500/60">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-blue-200"></div>
                  <span className="text-xs font-semibold text-white">Featured</span>
                </div>
              </div>

              {/* Enhanced Content Section - Fixed bottom area */}
              <div className="bg-dark/95 absolute inset-x-0 bottom-0 z-20 h-2/5 p-6">
                <div className="flex h-full flex-col justify-between">
                  {/* Title and Icon */}
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg transition-colors duration-300 group-hover:text-accent">
                      {featuredProjects[1].name}
                    </h3>
                    <div className="rounded-full bg-gradient-to-r from-secondary to-accent p-2 transition-transform duration-300 group-hover:scale-110">
                      <span className="text-xl">{featuredProjects[1].icon}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm font-medium leading-relaxed text-white/95 drop-shadow-md">
                    {featuredProjects[1].desc}
                  </p>

                  {/* Enhanced Stats with Icons */}
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-lg border border-accent/20 bg-accent/30 py-2 text-center transition-all duration-300 hover:bg-accent/50">
                      <div className="mb-1 text-sm">📱</div>
                      <div className="font-bold text-white drop-shadow-sm">Mobile</div>
                      <div className="text-white/90">App</div>
                    </div>
                    <div className="rounded-lg border border-secondary/20 bg-secondary/30 py-2 text-center transition-all duration-300 hover:bg-secondary/50">
                      <div className="mb-1 text-sm">📍</div>
                      <div className="font-bold text-white drop-shadow-sm">Location</div>
                      <div className="text-white/90">Based</div>
                    </div>
                    <div className="rounded-lg border border-accent/20 bg-accent/30 py-2 text-center transition-all duration-300 hover:bg-accent/50">
                      <div className="mb-1 text-sm">🏠</div>
                      <div className="font-bold text-white drop-shadow-sm">Booking</div>
                      <div className="text-white/90">System</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-4 h-16 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-30 transition-opacity duration-700 group-hover:opacity-60"></div>
              <div className="absolute top-1/2 right-4 h-16 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-30 transition-opacity duration-700 group-hover:opacity-60"></div>
            </div>
          </div>

          {/* Project 3 - HRIS (Landscape) */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/20 lg:col-span-7"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

            <div className="relative h-80 overflow-hidden rounded-t-3xl">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${featuredProjects[2].image})` }}
              />
              <div className="from-dark via-dark/80 to-dark/30 absolute inset-0 bg-gradient-to-t" />
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                {featuredProjects[2].techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/50 bg-accent/40 px-4 py-2 text-sm font-semibold text-white drop-shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-accent/60"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-6 right-6 z-20">
                <div className="flex items-center gap-2 rounded-full border border-orange-400/50 bg-orange-500/40 px-3 py-1 drop-shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-orange-200"></div>
                  <span className="text-xs font-semibold text-white">Featured</span>
                </div>
              </div>
            </div>

            <div className="relative p-8">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg transition-colors duration-300 group-hover:text-accent">
                  {featuredProjects[2].name}
                </h3>
                <div className="rounded-full bg-gradient-to-r from-accent to-secondary p-2">
                  <span className="text-2xl">{featuredProjects[2].icon}</span>
                </div>
              </div>
              <p className="mb-6 text-base font-medium leading-relaxed text-primary drop-shadow-sm transition-colors duration-300 group-hover:text-white">
                {featuredProjects[2].desc}
              </p>
              <div className="flex gap-4 text-xs">
                <div className="rounded-lg border border-accent/20 bg-accent/30 py-2 px-3 text-center transition-all duration-300 hover:bg-accent/50">
                  <div className="font-bold text-white drop-shadow-sm">Employee</div>
                  <div className="text-primary/90">Management</div>
                </div>
                <div className="rounded-lg border border-secondary/20 bg-secondary/30 py-2 px-3 text-center transition-all duration-300 hover:bg-secondary/50">
                  <div className="font-bold text-white drop-shadow-sm">Payroll</div>
                  <div className="text-primary/90">System</div>
                </div>
                <div className="rounded-lg border border-accent/20 bg-accent/30 py-2 px-3 text-center transition-all duration-300 hover:bg-accent/50">
                  <div className="font-bold text-white drop-shadow-sm">Analytics</div>
                  <div className="text-primary/90">Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ProjectGetInTouchSection />
    </div>
  );
};

export default Project;
