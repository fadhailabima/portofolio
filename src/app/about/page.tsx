import About from "@/features/About";

export const metadata = {
  metadataBase: new URL("https://fadhailbima.com"),
  title: "About | Fadhail Athaillah Bima",
  description:
    "About Fadhail Athaillah Bima | Hello! My real name is Fadhail Athaillah Bima, an Informatics Engineering fresh graduate interested and experienced in backend development, API design, and database management.",
  keywords: [
    "About Fadhail Athaillah Bima",
    "Backend Developer",
    "Informatics Engineering",
    "API Development",
    "Database Management",
    "Server Development"
  ],
  openGraph: {
    title: "About | Fadhail Athaillah Bima",
    description:
      "Learn more about Fadhail Athaillah Bima, an Informatics Engineering fresh graduate with expertise in backend development and API design.",
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
