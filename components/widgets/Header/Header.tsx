import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex gap-4 items-center w-full border-b border-gray-secondary pb-4">
      <Image
        src="/profile-pic.png"
        alt="profile picture"
        className="rounded-full w-30 h-30"
        width={100}
        height={100}
      />
      <div>
        <h1 className="text-2xl">Matt Miller</h1>
        <p className="italic">Senior Full Stack Software Engineer</p>
      </div>
      <div className="flex-1 italic flex flex-col text-right">
        <p>651-955-2780</p>
        <p>mattmiller515@gmail.com</p>
      </div>
    </div>
  );
};
