import type { FC } from "react";
import Home from "@/features/Home";

export const metadata = {
  metadataBase: new URL("https://fadhailbima.com"),
  title: "Fadhail Athaillah Bima",
  description:
    "Fadhail Athaillah Bima is a Backend software engineer specializes in building robust, scalable, and efficient server-side applications and APIs.",
  keywords: [
    "Fadhail Athaillah Bima",
    "Backend Developer",
    "Node.js Developer",
    "Express.js",
    "API Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Fadhail Athaillah Bima" }],
  creator: "Fadhail Athaillah Bima",
  openGraph: {
    title: "Fadhail Athaillah Bima - Backend Developer",
    description:
      "Fadhail Athaillah Bima is a Backend software engineer specializes in building robust and scalable server-side applications.",
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
