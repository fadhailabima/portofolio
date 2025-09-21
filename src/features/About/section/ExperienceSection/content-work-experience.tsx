import tailwindIcon from "@icons/tailwind.svg";
import nextjsIcon from "@icons/nextjs.svg";
import laravelIcon from "@icons/laravel.svg";
import mysqlIcon from "@icons/mysql.svg";
import postgresqlIcon from "@icons/postgresql.svg";
import oracleIcon from "@icons/oracle.svg";
import viteIcon from "@icons/vite.svg";
import nodejsIcon from "@icons/nodejs.svg";
import pythonIcon from "@icons/python.svg";
import Image from "next/image";

export const ContentWorkExperience = () => {
  const datas = [
    {
      title: "IT Developer Internship",
      url: "https://widyapresisisolusi.com/",
      company: "PT. Widya Presisi Solusi",
      date: "Okt 2024 - Jun 2025",
      description: (
        <>
          <li>
            Migrated the HRIS application from Oracle APEX to Laravel, improving system performance, scalability, and
            maintainability.
          </li>
          <li>
            Assisted in designing mockups for the Performance Management System (PMS) using Oracle APEX, collaborating with the
            product team to enhance user experience.
          </li>
          <li>
            Migrated the Company Profile application from native PHP to Laravel, resulting in better code structure, security,
            and integration capabilities.
          </li>
        </>
      ),
      techs: [
        {
          name: "PostgreSQL",
          icon: postgresqlIcon
        },
        {
          name: "Laravel",
          icon: laravelIcon
        },
        {
          name: "Oracle",
          icon: oracleIcon
        },
        {
          name: "Node.js",
          icon: nodejsIcon
        },
      ]
    },
    {
      title: "Web Developer Internship",
      url: "https://thedigitalcellar.com/",
      company: "The Digital Cellar",
      date: "Mar 2024 - Jun 2024",
      description: (
        <>
          <li>
            Collaborated effectively with stakeholders to gather and analyze business requirements, ensuring a comprehensive
            understanding of the app's functionalities and workflow.
          </li>
          <li>Spearheaded the development of a super app utilizing Next.js for frontend architecture.</li>
          <li>Coordinated closely with backend developers to facilitate API consumption and data fetching processes.</li>
          <li>Contributing to testing procedures and refining functionalities.</li>
        </>
      ),
      techs: [
        {
          name: "NextJS",
          icon: nextjsIcon
        },
        {
          name: "TailwindCSS",
          icon: tailwindIcon
        },
      ]
    },
    {
      title: "Fullstack Web Developer Intern",
      url: "https://saprotan-utama.com/",
      company: "PT. Saprotan Utama Nusantara",
      date: "Jan 2024 - Mar 2024",
      description: (
        <>
          <li>
            Collaborated with stakeholders to gather and analyze business requirements, ensuring a comprehensive understanding
            of the warehouse processes and workflow.
          </li>
          <li>
            Developed a Warehouse Management System (WMS) application utilizing the FIFO (First-In-First-Out) method to ensure
            efficient and organized inventory management.
          </li>
          <li>Developed RESTful APIs using Laravel, enabling seamless communication between the frontend and backend.</li>
          <li>Implemented authentication and authorization mechanisms to ensure secure access to the WMS.</li>
          <li>Integrated Laravel Eloquent ORM for simplified database interactions and maintenance.</li>
          <li>Utilized Next.js to create a dynamic and responsive user interface for the WMS</li>
          <li>
            Implemented interactive dashboards for real-time inventory tracking, order processing, and warehouse analytics.
          </li>
          <li>Integrated state management solutions for efficient data flow within the application.</li>
        </>
      ),
      techs: [
        {
          name: "Laravel",
          icon: laravelIcon
        },
        {
          name: "MySQL",
          icon: mysqlIcon
        },
        {
          name: "NextJS",
          icon: nextjsIcon
        },
        {
          name: "TailwindCSS",
          icon: tailwindIcon
        },
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8 text-primary">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              {" "}
              @
              <a href={data.url} target="_blank" rel="noreferrer" className="text-underline">
                {data.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <div className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </div>
          <div className="mt-2">
            <h4 className="mb-1 font-medium">Technologies used</h4>
            <div className="flex flex-wrap gap-2">
              {data.techs.map((tech, index) => (
                <div key={index} className="rounded-md bg-accent/10 p-1" title={tech.name}>
                  <Image src={tech.icon} alt={tech.icon} width={28} height={28} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
