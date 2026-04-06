export const ContentCard = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-full flex-col gap-3 rounded-xl border border-secondary/15 bg-surface p-5 text-secondary/90 shadow-lg shadow-black/35 ring-1 ring-inset ring-white/[0.04] ${className}`}
    >
      {children}
    </div>
  );
};
