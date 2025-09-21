export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics 
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://if.fsm.undip.ac.id/id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Diponegoro University
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2021 - Aug 2025</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          I enrolled in the Informatics program with the motivation
          that commercial jobs would be replaced by technology in the future, so
          I decided to pursue this field of study.
        </li>
        <li>
          Starting from the fifth semester, I realized that coding was my main
          goal in pursuing this major. Therefore, I began to learn about
          programming and fell in love with coding ✨
        </li>
      </ul>
    </div>
  );
};
