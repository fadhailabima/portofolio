// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import sassIcon from "@icons/sass.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import laravelIcon from "@icons/laravel.svg";
import nodejsIcon from "@icons/nodejs.svg";
import pythonIcon from "@icons/python.svg";
import postgreIcon from "@icons/postgresql.svg";
import oracleIcon from "@icons/oracle.svg";
import npmIcon from "@icons/npm.svg";
import yarnIcon from "@icons/yarn.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import vscodeIcon from "@icons/vscode.svg";
import vite from "@icons/vite.svg";
import webpackIcon from "@icons/webpack.svg";
import expressIcon from "@icons/express.svg";
import typescriptIcon from "@icons/typescript.svg";
import reactQueryIcon from "@icons/react-query.svg";

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Yarn: { name: "Yarn", src: yarnIcon, level: "Package manager" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" }
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  SASS: { name: "SASS", src: sassIcon, level: "Advanced" },
  PHP: { name: "PHP", src: phpIcon, level: "Advanced" },
  JS: { name: "Javascript", src: jsIcon, level: "Advanced" },
  Typescript: { name: "Typescript", src: typescriptIcon, level: "Intermediate" },
  Webpack: { name: "Webpack", src: webpackIcon, level: "Advanced" },
  Vite: { name: "Vite", src: vite, level: "Advanced" },
  React: { name: "ReactJS", src: reactIcon, level: "Advanced" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Advanced" },
  ReactQuery: {
    name: "React Query",
    src: reactQueryIcon,
    level: "Intermediate"
  },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Advanced" },
  NodeJS: { name: "Node.js", src: nodejsIcon, level: "Advanced" },
  Express: { name: "ExpressJS", src: expressIcon, level: "Beginner" },
  Python: { name: "Python", src: pythonIcon, level: "Intermediate" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Advanced" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
  PostgreSQL: { name: "PostgreSQL", src: postgreIcon, level: "Intermediate" },
  Oracle: { name: "Oracle", src: oracleIcon, level: "Intermediate" }
};

export { tools, stacks };
