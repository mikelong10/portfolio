import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import Container from "@components/structure/Container";
import Content from "@components/structure/Content";
import H1 from "@components/typography/h1";
import { Button } from "@components/ui/button";
import avatar from "../../public/avatar.svg";

export default function Home() {
  return (
    <Container className="min-h-screen py-32" noisy>
      <Content className="h-full">
        <div className="flex h-full flex-col justify-center gap-8 sm:flex-row-reverse sm:items-center md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-48">
          <div className="relative shrink-0">
            <Image
              src={avatar}
              alt="Picture of the author"
              className="h-40 w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56"
            />
            <div className="animate-blob animation-delay-1000 absolute -left-20 bottom-0 -z-20 h-80 w-80 rounded-full bg-sky-300 opacity-70 mix-blend-darken blur-2xl ease-linear dark:bg-sky-600 dark:opacity-30 dark:mix-blend-lighten" />
            <div className="animate-blob absolute -bottom-20 -z-20 h-80 w-80 rounded-full bg-blue-300 opacity-70 mix-blend-darken blur-2xl ease-linear dark:bg-blue-600 dark:opacity-30 dark:mix-blend-lighten" />
            <div className="animate-blob animation-delay-2000 absolute -bottom-20 -left-40 -z-20 h-80 w-80 rounded-full bg-indigo-300 opacity-70 mix-blend-darken blur-2xl ease-linear dark:bg-indigo-600 dark:opacity-30 dark:mix-blend-lighten" />
            <div className="animate-blob animation-delay-3000 absolute -left-20 top-0 -z-20 h-80 w-80 rounded-full bg-violet-300 opacity-70 mix-blend-darken blur-2xl ease-linear dark:bg-violet-600 dark:opacity-30 dark:mix-blend-lighten" />
          </div>

          <div className="flex flex-col gap-4">
            <H1>{"hi, i'm michael."}</H1>
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
