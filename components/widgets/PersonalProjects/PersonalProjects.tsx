import { ContentCard } from "@/components/base/ContentCard";
import { Pill } from "@/components/base/Pill";
import Image from "next/image";
import GithubLogo from "@/public/github-logo.svg";

export const PersonalProjects = () => {
  const projects = [
    {
      name: "ATM Machine",
      description:
        "ATM Machine where users are able to enter PINS, check balances, and withdraw money, and deposit money. Demonstrates a full stack application with a frontend with Next.js and a REST backend with Node.js. Further instructions on how to use can be found in the top right corner of the app.",
      link: "https://tr-atm.vercel.app/",
      github: "https://github.com/mattmiller515/tr_atm",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "Tailwind CSS",
      ],
      image: {
        src: "/atm-project.png",
        width: 200,
        height: 200,
      },
    },
    {
      name: "Patient Table",
      description:
        "A frontend application built with Next.js and TypeScript that displays a table of patients with their information. Features filtering, sorting by column, and pagination.",
      link: "https://patient-table-lime.vercel.app/",
      github: "https://github.com/mattmiller515/patient-table",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: {
        src: "/patient-table-project.png",
        width: 500,
        height: 500,
      },
    },
  ];

  return (
    <ContentCard>
      <h2 className="text-xl font-semibold tracking-tight text-primary mb-4">
        Personal Projects
      </h2>
      <div className="flex sm:flex-row flex-col sm:gap-4 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="flex-1 relative">
            <ContentCard className="transition-colors duration-200 has-[[data-project-link]:hover]:bg-white/5 h-full">
              <div className="flex items-start justify-between gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-project-link
                  className="text-xl font-semibold tracking-tight text-secondary transition-colors duration-200 after:content-[''] after:absolute after:inset-0 after:z-0"
                >
                  <h3>{project.name}</h3>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="relative z-10 shrink-0"
                >
                  <Image
                    src={GithubLogo}
                    alt=""
                    width={28}
                    height={28}
                    className="transition-[filter] duration-200 hover:brightness-0 hover:invert"
                  />
                </a>
              </div>
              <div className="flex flex-col gap-6 items-center">
                <p className="text-sm text-secondary/90">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 self-start relative z-10">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Pill>{tech}</Pill>
                    </li>
                  ))}
                </ul>
                <Image
                  src={project.image.src}
                  alt={project.name}
                  width={project.image.width}
                  height={project.image.height}
                />
              </div>
            </ContentCard>
          </div>
        ))}
      </div>
    </ContentCard>
  );
};
