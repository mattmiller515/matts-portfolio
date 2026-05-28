import Image from "next/image";
import GithubLogo from "@/public/github-logo.svg";
import LinkedInLogo from "@/public/linkedin-logo.svg";

export const Header = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:gap-4 gap-0 items-center w-full border-b border-gray-secondary pb-4">
      <Image
        src="/profile-pic.png"
        alt="profile picture"
        className="rounded-full w-30 h-30"
        width={100}
        height={100}
      />
      <div className="text-center sm:text-left sm:mt-0 mt-4">
        <h1 className="text-2xl">Matt Miller</h1>
        <p className="italic">Senior Full Stack Software Engineer</p>
      </div>
      <div className="flex-1 italic flex flex-col text-right gap-2">
        <p>mattmiller515@gmail.com</p>
        <div className="flex gap-2 items-center justify-center sm:justify-end">
          <a
            href="https://github.com/mattmiller515"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GithubLogo}
              alt="Github Logo"
              width={40}
              height={40}
              className="transition-[filter] duration-200 hover:brightness-0 hover:invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/miller-matt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedInLogo}
              alt="LinkedIn Logo"
              width={40}
              height={40}
              className="transition-[filter] duration-200 hover:brightness-0 hover:invert"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
