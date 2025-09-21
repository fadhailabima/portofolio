import type { FC } from "react";
import Home from "@/features/Home";

export const metadata = {
  metadataBase: new URL("https://fadhailbima.com"),
  title: "Fadhail Athaillah Bima",
  description:
    "Fadhail Athaillah Bima is a Front-End software engineer specializes in building (and sometimes designing) amazing and new digital experiences.",
  keywords: [
    "Fadhail Athaillah Bima",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Fadhail Athaillah Bima" }],
  creator: "Fadhail Athaillah Bima",
  openGraph: {
    title: "Fadhail Athaillah Bima - Frontend Developer",
    description: "Fadhail Athaillah Bima is a Front-End software engineer specializes in building amazing digital experiences.",
    url: "https://fadhailbima.com",
    siteName: "Fadhail Athaillah Bima Portfolio",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon.ico",
    apple: "/logo.svg"
  }
};

const Homepage: FC = () => {
  return <Home />;
};

export default Homepage;
