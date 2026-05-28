import { ContentCard } from "@/components/base/ContentCard";
import { AboutMe } from "@/components/widgets/AboutMe";
import { Header } from "@/components/widgets/Header";
import { Projects } from "@/components/widgets/Projects";

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <div className="mt-12 flex flex-col gap-4 items-center max-w-7xl mx-auto">
        <ContentCard>
          <AboutMe />
        </ContentCard>
        <ContentCard>
          <Projects />
        </ContentCard>
      </div>
    </div>
  );
}
