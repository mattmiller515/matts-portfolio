import { ContentCard } from "@/components/base/ContentCard";
import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      name: "ATM Machine",
      description:
        "ATM Machine where users are able to enter PINS, check balances, and withdraw money, and deposit money. Demonstrates a full stack application with a frontend with Next.js and a REST backend with Node.js. Further instructions on how to use can be found in the top right corner of the app.",
      link: "https://tr-atm.vercel.app/",
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
      image: {
        src: "/patient-table-project.png",
        width: 500,
        height: 500,
      },
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-primary mb-4">
        My Projects
      </h2>
      <div className="flex gap-4">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.name}
            className="flex-1"
          >
            <ContentCard className="transition-colors duration-200 hover:bg-white/5 h-full">
              <h3 className="text-xl font-semibold tracking-tight text-secondary transition-colors duration-200">
                {project.name}
              </h3>
              <div className="flex flex-col gap-10 items-center">
                <p className="text-sm text-secondary/90">
                  {project.description}
                </p>
                <Image
                  src={project.image.src}
                  alt={project.name}
                  width={project.image.width}
                  height={project.image.height}
                />
              </div>
            </ContentCard>
          </a>
        ))}
      </div>
    </div>
  );
};
