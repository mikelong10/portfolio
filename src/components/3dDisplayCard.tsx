import H3 from "@components/typography/h3";
import { CardBody, CardContainer, CardItem } from "@components/ui/3d-card";

export default function ThreeDimensionalDisplayCard({
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
    <CardContainer className="h-full">
      <div className="bg-background absolute -z-20 size-full rounded-3xl" />
      <div className="bg-secondary dark:bg-secondary absolute -z-10 size-3/4 rounded-full blur-3xl dark:size-4/5" />
      <CardBody className="group/card xs:p-8 xs:rounded-2xl border-border bg-background/70 dark:bg-background/50 relative h-full w-auto rounded-xl border p-6 sm:rounded-3xl sm:p-10 md:p-12">
        <CardBody className="flex h-full flex-col justify-between gap-12">
          <div className="flex flex-col gap-4">
            <CardItem translateZ="30">
              <H3 className="text-tertiary">{title}</H3>
            </CardItem>
            <CardItem translateZ="40">
              <p>{description}</p>
            </CardItem>
          </div>
          <div className="flex flex-col gap-8">
            <CardItem translateZ="50" className="w-full">
              {image}
            </CardItem>
            <CardItem translateZ="40" className="w-full">
              <div className="flex items-center justify-end gap-4">
                {footerButtons}
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardBody>
    </CardContainer>
  );
}
