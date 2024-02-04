import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import Container from "@components/structure/Container";
import Content from "@components/structure/Content";
import H1 from "@components/typography/h1";
import { Button } from "@components/ui/button";
import avatar from "../../public/avatar.svg";

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
    <Container className="min-h-screen py-32" noisy>
      <Content className="h-full">
        <div className="flex h-full flex-col justify-center gap-8 sm:flex-row-reverse sm:items-center md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-48">
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
            <H1 className="text-4xl sm:text-5xl lg:text-6xl">
              {"hi, i'm michael."}
            </H1>
            <p className="text-accent-foreground">
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
    </Container>
  );
}
