import H3 from "@components/typography/h3";
import { Card, CardContent, CardHeader } from "@components/ui/card";

export default function DisplayCard({
  title,
  description,
  image,
  footerButtons,
}: {
  title: string;
  description: string;
  image: JSX.Element;
  footerButtons: JSX.Element[];
}) {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="bg-background absolute -z-20 size-full rounded-3xl" />
      <div className="bg-secondary dark:bg-secondary absolute -z-10 size-3/4 rounded-full blur-3xl dark:size-4/5" />
      <Card className="xs:rounded-2xl border-border bg-background/70 dark:bg-background/50 flex size-full flex-col justify-between rounded-xl shadow-xl sm:rounded-3xl dark:border">
        <CardHeader className="xs:p-8 flex flex-col justify-between gap-4 p-6 sm:p-10 md:p-12">
          <div className="flex flex-col gap-4">
            <H3 className="text-tertiary">{title}</H3>
            <p>{description}</p>
          </div>
        </CardHeader>
        <CardContent className="xs:p-8 xs:pt-0 flex flex-col p-6 pt-0 sm:p-10 sm:pt-0 md:p-12 md:pt-0">
          <div className="mb-8 w-full">{image}</div>
          <div className="w-full">
            <div className="relative flex h-10 items-center justify-end gap-4">
              {footerButtons}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
