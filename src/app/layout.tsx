"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/globals.css";
import { poppins, roboto_mono } from "@/constants/font";
import { Contact, Navbar, Footer, ParticleBackground, LoadingScreen, ScrollIndicator } from "@/components";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 100
    });
  }, []);

  const superadmin = ["/auth/superadmin", "/dashboard/superadmin"];

  return (
    <html lang="en" className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth`}>
      <head />
      <body className="relative">
        <LoadingScreen />
        <ScrollIndicator />
        <ParticleBackground />
        {superadmin.includes(pathname) ? null : <Navbar />}
        {superadmin.includes(pathname) ? null : <Contact />}
        <main className={`relative z-10 ${superadmin.includes(pathname) ? "" : "container"}`}>{children}</main>
        {superadmin.includes(pathname) ? null : <Footer />}
      </body>
    </html>
  );
}
