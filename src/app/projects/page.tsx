import type { FC } from "react";
import Project from "@/features/Projects";

export const metadata = {
  metadataBase: new URL("https://fadhailbima.com"),
  title: "Projects | Fadhail Athaillah Bima",
  description:
    "Projects page of Fadhail Athaillah Bima portfolio website. Explore my latest work in web development, mobile applications, and digital solutions.",
  keywords: [
    "Fadhail Athaillah Bima Projects",
    "Web Development Projects",
    "React Projects",
    "Mobile App Development",
    "Portfolio"
  ],
  openGraph: {
    title: "Projects | Fadhail Athaillah Bima",
    description:
      "Explore the latest projects by Fadhail Athaillah Bima including web applications, mobile apps, and digital solutions.",
    url: "https://fadhailbima.com/projects",
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

const ProjectPage: FC = () => {
  return <Project />;
};

export default ProjectPage;
