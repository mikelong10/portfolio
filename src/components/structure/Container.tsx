import { cn } from "@lib/utils";

export default function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "xs:px-12 w-full max-w-[1600px] px-8 sm:px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-56",
        className
      )}
    >
      {children}
    </section>
  );
}
