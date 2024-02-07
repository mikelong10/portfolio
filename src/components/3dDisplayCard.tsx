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
      <div className="bg-secondary/70 dark:bg-secondary absolute -z-10 size-3/4 rounded-full blur-3xl dark:size-4/5" />
      <CardBody className="group/card xs:rounded-2xl xs:p-8 border-border bg-background/30 relative flex h-full w-auto max-w-[600px] flex-col justify-between gap-12 rounded-xl border p-6 backdrop-blur-sm sm:rounded-3xl sm:p-10 md:p-12 lg:p-12">
        <div className="flex flex-col gap-4">
          <CardItem translateZ="20">
            <H3 className="text-tertiary">{title}</H3>
          </CardItem>
          <CardItem as="p" translateZ="30">
            {description}
          </CardItem>
        </div>
        <div className="flex flex-col gap-8">
          <CardItem translateZ="40" className="w-full">
            {image}
          </CardItem>
          <div className="flex items-center justify-end gap-4">
            {footerButtons.map((button) => (
              <CardItem translateZ={30} key={button.key}>
                {button}
              </CardItem>
            ))}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
