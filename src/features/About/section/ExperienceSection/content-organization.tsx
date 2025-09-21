export const ContentOrganization = () => {
  const datas = [
    {
      title: "Chairman Comittee",
      organization: "I-Console 2023",
      date: "May 2023 - Feb 2024",
      description: (
        <>
          <li>Leading consisting of 75 person</li>
          <li>Providing guidance/support to new students</li>
          <li>
            Introducing the culture and academic system in the computer science
            department, impacting 190+ new students
          </li>
        </>
      ),
    },
    {
      title: "Head of Seniora Division",
      url: "https://www.instagram.com/hmif_undip/",
      organization: "HMIF UNDIP",
      date: "Feb 2023 - Dec 2023",
      description: (
        <>
          <li>Leading team consisting of 11 person</li>
          <li>
            Actively participates in the development and refinement of the
            organization strategic
          </li>
          <li>
            Responsible for all matters that relating with organization that
            aims to develop
          </li>
          <li>
            Evaluate regarding the staff performance and activities carried out
            1 time in 2 months
          </li>
          <li>
            Make a decision if any problem regarding internal or external issues
          </li>
        </>
      ),
    },
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
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {data.organization}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
