export const Pill = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-secondary ${className ?? ""}`}
    >
      {children}
    </span>
  );
};
