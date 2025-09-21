import About from "@/features/About";

export const metadata = {
  metadataBase: new URL("https://fadhailbima.com"),
  title: "About | Fadhail Athaillah Bima",
  description:
    "About Fadhail Athaillah Bima | Hello! My real name is Fadhail Athaillah Bima, an Informatics Engineering student interested and experienced in web development, UI design, and 3D modeling.",
  keywords: [
    "About Fadhail Athaillah Bima",
    "Frontend Developer",
    "Informatics Engineering",
    "Web Development",
    "UI Design",
    "3D Modeling"
  ],
  openGraph: {
    title: "About | Fadhail Athaillah Bima",
    description:
      "Learn more about Fadhail Athaillah Bima, an Informatics Engineering student with expertise in web development and design.",
    url: "https://fadhailbima.com/about",
    siteName: "Fadhail Athaillah Bima Portfolio",
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon.ico",
    apple: "/logo.svg"
  }
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
