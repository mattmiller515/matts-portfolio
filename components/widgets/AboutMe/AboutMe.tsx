import { ContentCard } from "@/components/base/ContentCard";
import Image from "next/image";

const RESUME_PDF_URL =
  "https://docs.google.com/document/d/1J_Bc1WKJOTOuFNV3rO5EbttNR8cdpBEisIgh0wLS_1I/export?format=pdf";
const RESUME_FILENAME = "MattMillerResume.pdf";

export const AboutMe = () => {
  return (
    <ContentCard>
      <div className="flex sm:flex-row flex-col sm:gap-2 gap-8">
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-semibold tracking-tight text-primary mb-4">
            About Me
          </h2>
          <p className="mb-4">
            &emsp;Welcome to my portfolio! My name is Matt Miller and I&apos;m a
            senior full stack software engineer based out of Apple Valley,
            Minnesota. In my free time, I enjoy hiking with my wife and dogs,
            trying new restaurants with friends, playing video games, and
            spending time with my family.
          </p>
          <p className="mb-6">
            &emsp;Professionally, I&apos;m a senior full stack software engineer
            working on various projects. I enjoy working with React.js,
            Node.js(express/GraphQL), and TypeScript. I have experience in the
            fintech and healthcare industries and am always looking for new
            challenges and opportunities to grow.
          </p>
          <a
            href={RESUME_PDF_URL}
            download={RESUME_FILENAME}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 self-center sm:self-start rounded-lg bg-primary px-4 py-2 font-medium text-secondary not-italic shadow-md shadow-black/30 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-black/40 active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
              <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
            </svg>
            Download Resume
          </a>
        </div>
        <div className="flex-1">
          <Image
            src="/family-photo.jpeg"
            alt="profile picture"
            width={300}
            height={300}
            className="m-auto rounded-lg"
          />
        </div>
      </div>
    </ContentCard>
  );
};
