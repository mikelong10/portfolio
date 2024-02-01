import { cn } from "@lib/utils";

export default function Container({
  children,
  className,
  id,
  noisy,
  bgColorNoisy,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noisy?: boolean;
  bgColorNoisy?: string;
}) {
  return (
    <>
      <section
        id={id}
        className={cn(
          "xs:px-12 sm:px-18 lg:px-30 2xl:px-42 w-full px-6 md:px-24 xl:px-36",
          className,
          noisy && "relative"
        )}
      >
        {noisy && (
          <>
            <div
              className={cn(
                "absolute left-0 top-0 -z-40 size-full",
                bgColorNoisy && `bg-${bgColorNoisy}`
              )}
            />
            <div className="bg-noise absolute left-0 top-0 -z-30 size-full opacity-10 dark:opacity-[0.08]" />
          </>
        )}
        {children}
      </section>
    </>
  );
}
