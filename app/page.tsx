import { AboutMe } from "@/components/widgets/AboutMe";
import { Header } from "@/components/widgets/Header";
import { PersonalProjects } from "@/components/widgets/PersonalProjects";
import { ProfessionalProjects } from "@/components/widgets/ProfessionalProjects";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Analytics />
      <div className="p-4">
        <Header />
        <div className="mt-12 flex flex-col gap-4 items-center max-w-7xl mx-auto">
          <AboutMe />
          <ProfessionalProjects />
          <PersonalProjects />
        </div>
      </div>
    </>
  );
}
