import { ContentCard } from "@/components/base/ContentCard";
import { Pill } from "@/components/base/Pill";
import Image from "next/image";

export const ProfessionalProjects = () => {
  const projects = [
    {
      company: "Zena",
      name: "SMB Budgeting Tool",
      description:
        "Zena was a AI fintech platform built to help small businesses track spending and manage budgets by project or client. It combined business expense cards with real-time software to categorize transactions, control spend, and provide visibility into where money is going.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Django",
        "PostgreSQL",
      ],
      image: {
        src: "/zena.webp",
        width: 500,
        height: 500,
      },
    },
    {
      company: "Optum",
      name: "Provider Portal",
      description:
        "The UHC provider portal is a centralized dashboard used by clinics and hospitals to manage insurance workflows in one place. It streamlines tasks like verifying patient eligibility, submitting and tracking claims, handling prior authorizations, and reviewing payments.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "MongoDB"],
      image: {
        src: "/uhc-provider-portal.png",
        width: 500,
        height: 500,
      },
    },
  ];

  return (
    <ContentCard>
      <h2 className="text-xl font-semibold tracking-tight text-primary mb-4">
        Professional Projects
      </h2>
      <div className="flex sm:flex-row flex-col sm:gap-4 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="flex-1">
            <ContentCard className="h-full">
              <h3 className="text-xl font-semibold tracking-tight text-secondary">
                {project.company} - <i>{project.name}</i>
              </h3>
              <div className="flex flex-col gap-6 items-center">
                <p className="text-sm text-secondary/90">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 self-start">
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
