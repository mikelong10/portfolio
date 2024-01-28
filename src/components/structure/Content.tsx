import { cn } from "@lib/utils";

export default function Content({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("max-w-[1400px]", className)}>
      {children}
    </section>
  );
}
