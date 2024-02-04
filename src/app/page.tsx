import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Arrow, Squiggle } from "@lib/icons";
import Container from "@components/structure/Container";
import Content from "@components/structure/Content";
import H1 from "@components/typography/h1";
import H2 from "@components/typography/h2";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import avatar from "../../public/avatar.svg";
import hometapLogo from "../../public/hometap-icon.png";
import woodmacLogo from "../../public/woodmac-icon.png";

const emojis = [
  "🌎",
  "👨‍🍳",
  "🏝️",
  "🥷",
  "🏂",
  "🤠",
  "🎶",
  "👨‍💻",
  "🛩️",
  "🏐",
  "👨‍🎨",
  "💡",
];

export default function Home() {
  const degrees = Array.from({ length: 12 }, (_, i) => i * 30).sort(
    () => Math.random() - 0.5
  );
  const renderEmojis = () =>
    emojis.map((emoji) => {
      const degree = degrees.pop();
      return (
        <div
          key={emoji}
          className={`ease-out-circ animate-shoot-out-${degree} absolute -z-10 text-4xl`}
        >
          {emoji}
        </div>
      );
    });
  return (
    <section className="min-h-screen w-full">
      <Container
        className="relative flex min-h-screen items-center justify-center"
        noisy
      >
        <Content className="size-full py-32">
          <div className="flex size-full flex-col justify-center gap-4 sm:flex-row-reverse sm:items-center sm:gap-0 md:gap-4 lg:gap-8">
            <div className="relative shrink-0">
              <Image
                src={avatar}
                alt="Picture of the author"
                className="size-40 bg-transparent lg:size-48 xl:size-56"
              />
              <div className="animate-blob-1 absolute -left-20 bottom-0 -z-40 size-80 rounded-full bg-indigo-300 mix-blend-multiply blur-2xl ease-linear lg:-left-16 xl:-left-12 dark:bg-indigo-700 dark:mix-blend-screen" />
              <div className="animate-blob-3 absolute -bottom-20 -z-40 size-80 rounded-full bg-violet-300 mix-blend-multiply blur-2xl ease-linear lg:-bottom-16 xl:-bottom-12 dark:bg-violet-700 dark:mix-blend-screen" />
              <div className="animate-blob-2 absolute -bottom-20 -left-40 -z-40 size-80 rounded-full bg-blue-300 mix-blend-multiply blur-2xl ease-linear lg:-bottom-16 lg:-left-36 xl:-bottom-12 xl:-left-32 dark:bg-blue-700 dark:mix-blend-screen" />
              <div className="animate-blob-4 absolute -left-20 top-0 -z-40 size-80 rounded-full bg-sky-300 mix-blend-multiply blur-2xl ease-linear lg:-left-16 xl:-left-12 dark:bg-sky-700 dark:mix-blend-screen" />
              <div className="absolute inset-0 flex size-40 items-center justify-center">
                {renderEmojis()}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <H1>{"hi, i'm michael."}</H1>
              <p className="text-accent-foreground max-w-prose">
                {
                  "i'm a third-year student at northeastern university pursuing a computer science and business combined degree with a strong passion for entrepreneurship and innovation in tech."
                }
              </p>
              <div className="flex gap-2">
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link href={"https://www.linkedin.com/in/michaeltlong10/"}>
                    <Linkedin />
                  </Link>
                </Button>
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link href={"https://github.com/mikelong10/"}>
                    <Github />
                  </Link>
                </Button>
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link href={"mailto:long.mich@northeastern.edu"}>
                    <Mail />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Content>
        <Arrow className="text-secondary animate-bounce-slow absolute bottom-8 h-16 sm:bottom-10 sm:h-20 lg:bottom-12 lg:h-24" />
      </Container>
      <Container className="flex min-h-screen flex-col items-center" noisy>
        <Content className="h-full py-16">
          <div className="flex h-full flex-col items-center gap-16 sm:gap-20 lg:gap-24">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col gap-2">
                <div className="text-muted-foreground flex items-center gap-2 text-xl lg:text-2xl">
                  <p>✨</p>
                  <p className="font-semibold">experience</p>
                </div>
                <H2>{"building real-world production software"}</H2>
              </div>
              <div className="flex w-fit flex-col gap-4">
                <div className="flex gap-4">
                  <Link href={"/experience"}>
                    <Image
                      src={hometapLogo}
                      alt="Hometap Logo"
                      width={552}
                      height={552}
                      className="h-fit w-8 rounded transition-transform hover:scale-105 hover:animate-pulse"
                    />
                  </Link>
                  <div className="flex flex-col gap-4">
                    <Link
                      href={"/experience"}
                      className="text-primary hover:text-tertiary w-fit text-xl underline underline-offset-8 transition-colors"
                    >
                      Hometap
                    </Link>
                    <p>
                      making homeownership less stressful and more accessible
                    </p>
                  </div>
                </div>
                <Separator className="h-1 rounded-full" />
                <div className="flex gap-4">
                  <Link href={"/experience"}>
                    <Image
                      src={woodmacLogo}
                      alt="WoodMac Logo"
                      width={225}
                      height={225}
                      className="h-fit w-8 rounded transition-transform hover:scale-105 hover:animate-pulse"
                    />
                  </Link>
                  <div className="flex flex-col gap-4">
                    <Link
                      href={"/experience"}
                      className="text-primary hover:text-tertiary w-fit text-xl underline underline-offset-8 transition-colors"
                    >
                      Wood Mackenzie
                    </Link>
                    <p>
                      providing data and insights that power smart decisions to
                      power our planet
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Squiggle className="text-secondary w-32 sm:w-40 lg:w-48" />
            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground flex items-center gap-2 text-xl lg:text-2xl">
                <p>🚀</p>
                <p className="font-semibold">projects</p>
              </div>
              <H2>{"creating, innovating, having fun"}</H2>
            </div>
          </div>
        </Content>
      </Container>
    </section>
  );
}
