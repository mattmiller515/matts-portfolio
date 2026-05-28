import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:gap-2 gap-8">
      <div className="flex-1">
        <h2 className="text-xl font-semibold tracking-tight text-primary mb-4">
          About Me
        </h2>
        <p className="mb-4">
          &emsp;Welcome to my portfolio! My name is Matt Miller and I&apos;m a
          senior full stack software engineer based out of Apple Valley,
          Minnesota. In my free time, I enjoy hiking with my wife and dogs,
          trying new restaurants with friends, playing video games, and spending
          time with my family.
        </p>
        <p>
          &emsp;Professionally, I&apos;m a senior full stack software engineer
          working on various projects. I enjoy working with React.js,
          Node.js(express/GraphQL), and TypeScript. I have experience in the
          fintech and healthcare industries and am always looking for new
          challenges and opportunities to grow.
        </p>
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
  );
};
