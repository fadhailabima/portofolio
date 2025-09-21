import type { FC } from "react";
import Image from "next/image";

const HeaderSection: FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 md:px-12 md:pt-28 lg:flex-row lg:px-20 lg:pt-24 xl:px-24">
      {/* Enhanced Background with Better Positioning */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/4 right-1/4 h-72 w-72 animate-pulse rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 h-48 w-48 animate-float rounded-full bg-secondary/10 blur-3xl" />

      {/* Optimized floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float rounded-full bg-accent opacity-20"
            style={{
              left: `${15 + i * 7}%`,
              top: `${20 + Math.sin(i) * 40}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Enhanced Header */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="relative">
                <h1
                  className="bg-300% animate-gradient bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-3xl font-bold text-transparent lg:text-4xl"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <span className="font-mono text-lg font-normal text-accent lg:text-xl">02. </span>
                  About Me
                </h1>
                <div className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-accent to-transparent" />
              </div>
              <div
                className="relative h-[2px] max-w-md flex-1 overflow-hidden rounded-full bg-gradient-to-r from-accent via-secondary to-accent"
                data-aos="zoom-in-left"
                data-aos-duration="800"
              >
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            </div>

            {/* Enhanced Content Cards Grid */}
            <div className="space-y-6">
              {/* Card 1 - Introduction */}
              <div
                className="from-white/8 to-white/12 hover:shadow-accent/15 group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-accent/40 hover:shadow-2xl md:p-8"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                {/* Enhanced glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/25 via-secondary/25 to-accent/25 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                {/* Enhanced animated icon */}
                <div className="group-hover:animate-glow-pulse absolute top-4 right-4 text-3xl opacity-30 drop-shadow-lg filter transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-60">
                  👋
                </div>

                <div className="relative">
                  <h3 className="mb-4 text-xl font-semibold text-accent transition-colors duration-300 group-hover:text-secondary">
                    Hello, I'm Fadhail!
                  </h3>
                  <p className="leading-relaxed text-primary transition-colors duration-300 group-hover:text-secondary">
                    My fullname is{" "}
                    <span className="bg-accent/15 rounded-lg border border-accent/30 px-3 py-1 font-bold text-accent shadow-sm">
                      Fadhail Athaillah Bima
                    </span>
                    , an Informatics fresh graduate passionate about Software Development, with expertise in{" "}
                    <span className="rounded-lg border border-accent/40 bg-gradient-to-r from-accent/25 to-secondary/25 px-3 py-1 font-semibold text-accent shadow-sm">
                      Backend Development
                    </span>{" "}
                    using JavaScript, PHP and Dart.
                  </p>
                </div>
              </div>

              {/* Cards 2 & 3 in Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Card 2 - Expertise */}
                <div
                  className="from-white/8 to-white/12 hover:shadow-secondary/15 group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-secondary/40 hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-secondary/25 via-accent/25 to-secondary/25 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                  <div className="group-hover:animate-glow-pulse absolute top-4 right-4 text-3xl opacity-30 drop-shadow-lg filter transition-all duration-300 group-hover:scale-125 group-hover:opacity-60">
                    🚀
                  </div>

                  <div className="relative">
                    <h3 className="mb-4 text-lg font-semibold text-secondary transition-colors duration-300 group-hover:text-accent">
                      Technical Expertise
                    </h3>
                    <p className="text-sm leading-relaxed text-primary transition-colors duration-300 group-hover:text-secondary">
                      Strong knowledge in Web Programming with focus on Backend Development. I specialize in building{" "}
                      <span className="rounded border border-accent/20 bg-accent/10 px-1 py-0.5 font-bold text-accent">
                        robust
                      </span>
                      ,{" "}
                      <span className="rounded border border-secondary/20 bg-secondary/10 px-1 py-0.5 font-bold text-secondary">
                        scalable
                      </span>
                      , and{" "}
                      <span className="rounded border border-accent/20 bg-accent/10 px-1 py-0.5 font-bold text-accent">
                        efficient
                      </span>{" "}
                      systems.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Philosophy */}
                <div
                  className="from-white/8 to-white/12 hover:shadow-accent/15 group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-accent/40 hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="600"
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/25 via-secondary/25 to-accent/25 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                  <div className="group-hover:animate-glow-pulse absolute top-4 right-4 text-3xl opacity-30 drop-shadow-lg filter transition-all duration-300 group-hover:scale-125 group-hover:opacity-60">
                    📚
                  </div>

                  <div className="relative">
                    <h3 className="mb-4 text-lg font-semibold text-accent transition-colors duration-300 group-hover:text-secondary">
                      Continuous Growth
                    </h3>
                    <p className="text-sm leading-relaxed text-primary transition-colors duration-300 group-hover:text-secondary">
                      Constantly improving skills and knowledge. Committed to staying{" "}
                      <span className="bg-accent/15 rounded-lg border border-accent/30 px-2 py-1 font-bold text-accent shadow-sm">
                        up-to-date
                      </span>{" "}
                      with latest developments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Skills Section */}
              <div className="mt-8" data-aos="fade-up" data-aos-delay="600">
                <h4 className="mb-6 flex items-center gap-3 text-xl font-semibold text-secondary">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-accent" />
                  Core Competencies
                </h4>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { skill: "Full-Stack", icon: "⚡", gradient: "from-accent to-secondary", bgGlow: "bg-accent/5" },
                    { skill: "Backend Expert", icon: "🛠️", gradient: "from-secondary to-accent", bgGlow: "bg-secondary/5" },
                    {
                      skill: "Problem Solver",
                      icon: "🧩",
                      gradient: "from-accent via-secondary to-accent",
                      bgGlow: "bg-accent/5"
                    },
                    {
                      skill: "Team Player",
                      icon: "🤝",
                      gradient: "from-secondary via-accent to-secondary",
                      bgGlow: "bg-secondary/5"
                    }
                  ].map((item, index) => (
                    <div
                      key={item.skill}
                      className={`group relative overflow-hidden rounded-xl border border-white/20 ${
                        item.bgGlow
                      } hover:${item.bgGlow.replace(
                        "/5",
                        "/10"
                      )} cursor-default p-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-xl`}
                      data-aos="zoom-in"
                      data-aos-delay={`${700 + index * 100}`}
                    >
                      {/* Enhanced glow effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 blur-lg transition-all duration-300 group-hover:opacity-30`}
                      />

                      <div className="relative">
                        {/* Enhanced emoticon with glow */}
                        <div className="group-hover:animate-glow-pulse mb-3 text-3xl drop-shadow-lg filter transition-all duration-300 group-hover:scale-125">
                          {item.icon}
                        </div>

                        {/* Better text visibility */}
                        <span className="font-mono text-sm font-medium text-primary transition-all duration-300 group-hover:font-semibold group-hover:text-accent">
                          {item.skill}
                        </span>

                        {/* Subtle background highlight */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Image */}
          <div className="flex items-center justify-center lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
            <div className="group relative">
              {/* Enhanced multi-layer glow effect */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-accent/30 via-secondary/30 to-accent/30 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-80" />

              {/* Image container with enhanced frame */}
              <div className="relative rounded-3xl bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 p-3 transition-all duration-500 group-hover:from-accent/40 group-hover:via-secondary/40 group-hover:to-accent/40">
                <div className="relative transform overflow-hidden rounded-2xl grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0">
                  <Image
                    src="/images/bima.webp"
                    alt="Fadhail Athaillah Bima"
                    width={400}
                    height={600}
                    className="h-auto w-full max-w-sm drop-shadow-2xl filter lg:max-w-md"
                    priority
                  />

                  {/* Enhanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-base_col/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Professional badge with better positioning */}
                  <div className="absolute bottom-6 left-6 translate-y-4 transform rounded-xl border border-white/20 bg-white/10 px-4 py-3 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-mono text-sm font-medium text-accent">Full-Stack Developer</span>
                  </div>
                </div>
              </div>

              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-8 -right-8 h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-accent to-secondary opacity-60" />
              <div className="absolute -bottom-8 -left-8 h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-secondary to-accent opacity-60" />
              <div className="absolute top-1/3 -left-10 h-3 w-3 animate-ping rounded-full bg-accent opacity-40" />
              <div className="absolute top-1/4 -right-6 h-2 w-2 animate-ping rounded-full bg-secondary opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
