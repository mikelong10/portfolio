import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

import { dmSerifDisplay } from "@lib/fonts";
import { Arrow, Squiggle } from "@lib/icons";
import { cn } from "@lib/utils";
import DisplayCard from "@components/display/DisplayCard";
import Container from "@components/structure/Container";
import Content from "@components/structure/Content";
import H2 from "@components/typography/h2";
import Monospace from "@components/typography/monospace";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { TypewriterEffect } from "@components/ui/typewriter-effect";
import avatar from "../../public/avatar.svg";
import calcAppScreenshot from "../../public/calc-app-screenshot.jpg";
import getitdoneScreenshot from "../../public/getitdone-screenshot.jpg";
import hometapLogo from "../../public/hometap-icon.png";
import vballScorekeeperScreenshot from "../../public/vball-scorekeeper-screenshot.jpg";
import woodmacLogo from "../../public/woodmac-icon.png";
import wsaScreenshot from "../../public/wsa-screenshot.jpg";

const emojis = [
  "🌎",
  "👨‍🍳",
  "🏝️",
  "🌊",
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
                priority
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
              <TypewriterEffect
                className={cn(
                  "flex scroll-m-20 items-center text-left text-5xl font-extrabold tracking-tight sm:text-6xl md:text-6xl lg:text-7xl",
                  dmSerifDisplay.className
                )}
                cursorClassName="h-[56px] sm:h-[68px] md:h-[68px] lg:h-[80px]"
                words={[{ text: "hi," }, { text: "i'm" }, { text: "michael" }]}
              />
              <div className="text-accent-foreground flex max-w-prose flex-col gap-2">
                <p>
                  {
                    "fourth-year student at northeastern university completing a computer science and business combined degree."
                  }
                </p>
                <p>
                  {
                    "believer in delightful software, disruptive innovation, and human connection."
                  }
                </p>
                <p>
                  {"liverpool f.c., classical music, and water enthusiast."}
                </p>
                <p>{"welcome — enjoy your time here."}</p>
              </div>
              <div className="text-tertiary flex gap-2">
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/michaeltlong10/"}
                  >
                    <Linkedin />
                  </Link>
                </Button>
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link target="_blank" href={"https://github.com/mikelong10/"}>
                    <Github />
                  </Link>
                </Button>
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link target="_blank" href={"https://x.com/mikelong107/"}>
                    <Twitter />
                  </Link>
                </Button>
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link
                    target="_blank"
                    href={"mailto:long.mich@northeastern.edu"}
                  >
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
        <Content className="h-full pb-32 pt-16">
          <div className="flex h-full flex-col items-center gap-16 sm:gap-20 lg:gap-24">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col gap-4">
                <div className="text-muted-foreground bg-accent flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-lg lg:px-4 lg:py-2 lg:text-xl">
                  <p>✨</p>
                  <Monospace>experience</Monospace>
                </div>
                <H2 className="text-accent-foreground">
                  {"building real-world production software"}
                </H2>
                <blockquote className="border-secondary text-accent-foreground mb-16 mt-8 flex max-w-prose flex-col gap-2 border-l-2 pl-6">
                  <p>
                    {
                      "working in agile scrum teams at a global leader in the energy industry and a fast-growing fintech startup building a brand-new asset class, i've had the opportunity to work on modern, dynamic, full-stack applications and to learn from amazing fellow engineers and mentors in industry."
                    }
                  </p>
                </blockquote>
              </div>
              <div className="flex w-fit flex-col gap-4">
                <div className="flex gap-4">
                  <Link href={"/experience#hometap"} className="size-8 min-w-8">
                    <Image
                      src={hometapLogo}
                      alt="Hometap Logo"
                      width={552}
                      height={552}
                      className="rounded transition-transform hover:scale-105 hover:animate-pulse"
                      priority
                    />
                  </Link>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <Link
                        href={"/experience#hometap"}
                        className="text-primary hover:text-tertiary w-fit text-xl underline underline-offset-[6px] transition-colors"
                      >
                        hometap
                      </Link>
                      <p className="text-tertiary hidden sm:flex">•</p>
                      <Monospace className="text-muted-foreground">
                        full-stack engineering co-op
                      </Monospace>
                    </div>
                    <p>
                      making homeownership less stressful and more accessible
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-4">
                  <Link href={"/experience#woodmac"} className="size-8 min-w-8">
                    <Image
                      src={woodmacLogo}
                      alt="WoodMac Logo"
                      width={225}
                      height={225}
                      className="rounded transition-transform hover:scale-105 hover:animate-pulse"
                      priority
                    />
                  </Link>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <Link
                        href={"/experience#woodmac"}
                        className="text-primary hover:text-tertiary w-fit text-xl underline underline-offset-[6px] transition-colors"
                      >
                        wood mackenzie
                      </Link>
                      <p className="text-tertiary hidden sm:flex">•</p>
                      <Monospace className="text-muted-foreground">
                        software engineering co-op
                      </Monospace>
                    </div>
                    <p>
                      providing data and insights that power smart decisions to
                      power our planet
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="projects">
              <Squiggle className="text-secondary w-32 sm:w-40 lg:w-48" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col gap-4">
                <div className="text-muted-foreground bg-accent flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-lg lg:px-4 lg:py-2 lg:text-xl">
                  <p>🚀</p>
                  <Monospace>projects</Monospace>
                </div>
                <H2 className="text-accent-foreground">
                  {"creating, innovating, & having fun"}
                </H2>
                <blockquote className="border-secondary text-accent-foreground mb-16 mt-8 flex max-w-prose flex-col gap-2 border-l-2 pl-6">
                  <p>
                    ranging from full-stack websites publicly deployed to the
                    web to personal renditions of classic games, here are some
                    of my favorite projects that i&rsquo;ve built.
                  </p>
                </blockquote>
              </div>
              <div className="xs:gap-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <DisplayCard
                  title={"wayland student-athlete"}
                  description={
                    "website powering the local odd jobs business founded by me and my friends built on Next.js with TypeScript, React, TailwindCSS, and a PlanetScale MySQL database using Prisma ORM"
                  }
                  image={
                    <Image
                      src={wsaScreenshot}
                      alt="Wayland Student-Athlete homepage screenshot"
                      width={2880}
                      height={1750}
                      className="rounded-sm"
                      priority
                    />
                  }
                  footerButtons={[
                    <Button
                      key={"explore"}
                      asChild
                      variant={"outline"}
                      className="flex gap-2"
                    >
                      <Link
                        href={
                          "https://github.com/mikelong10/wayland-student-athlete-app"
                        }
                        target="_blank"
                      >
                        explore
                        <Code2 className="size-5" />
                      </Link>
                    </Button>,
                    <Button key={"visit"} asChild className="flex gap-2">
                      <Link
                        href={"https://www.waylandstudentathlete.com/"}
                        target="_blank"
                      >
                        visit
                        <ExternalLink className="size-5" />
                      </Link>
                    </Button>,
                  ]}
                />
                <DisplayCard
                  title={"getitdone to-do app"}
                  description={
                    "fully-featured CRUD to-do app built with EJS HTML templating and vanilla CSS on the frontend and a REST API Express.js + Node.js server on the backend"
                  }
                  image={
                    <Image
                      src={getitdoneScreenshot}
                      alt="Getitdone to-do app screenshot"
                      width={2880}
                      height={1750}
                      className="rounded-sm"
                      priority
                    />
                  }
                  footerButtons={[
                    <Button
                      key={"explore"}
                      asChild
                      variant={"outline"}
                      className="flex gap-2"
                    >
                      <Link
                        href={
                          "https://github.com/mikelong10/getitdone-to-do-app"
                        }
                      >
                        explore
                        <Code2 className="size-5" />
                      </Link>
                    </Button>,
                    <Button key={"visit"} asChild className="flex gap-2">
                      <Link
                        href={"https://getitdone-to-do-app.vercel.app/"}
                        target="_blank"
                      >
                        visit
                        <ExternalLink className="size-5" />
                      </Link>
                    </Button>,
                  ]}
                />
                <DisplayCard
                  title={"calculator app"}
                  description={
                    "simplistic, clean calculator app built from scratch with React (TypeScript) and vanilla CSS modeled after the Apple calculator app"
                  }
                  image={
                    <Image
                      src={calcAppScreenshot}
                      alt="Calculator app screenshot"
                      width={2880}
                      height={1750}
                      className="rounded-sm"
                      priority
                    />
                  }
                  footerButtons={[
                    <Button
                      key={"explore"}
                      asChild
                      variant={"outline"}
                      className="flex gap-2"
                    >
                      <Link
                        href={
                          "https://github.com/mikelong10/react-ts-calculator"
                        }
                        target="_blank"
                      >
                        explore
                        <Code2 className="size-5" />
                      </Link>
                    </Button>,
                    <Button key={"visit"} asChild className="flex gap-2">
                      <Link
                        href={"https://react-ts-calculator.vercel.app/"}
                        target="_blank"
                      >
                        visit
                        <ExternalLink className="size-5" />
                      </Link>
                    </Button>,
                  ]}
                />
                <DisplayCard
                  title={"volleyball scorekeeper"}
                  description={
                    "classic volleyball score flipper with point and set tracking and variable target scores built with vanilla HTML, CSS, and JS"
                  }
                  image={
                    <Image
                      src={vballScorekeeperScreenshot}
                      alt="Volleyball scorekeeper app screenshot"
                      width={2880}
                      height={1750}
                      className="rounded-sm"
                      priority
                    />
                  }
                  footerButtons={[
                    <Button
                      key={"explore"}
                      asChild
                      variant={"outline"}
                      className="flex gap-2"
                    >
                      <Link
                        href={
                          "https://github.com/mikelong10/volleyball-scorekeeper"
                        }
                      >
                        explore
                        <Code2 className="size-5" />
                      </Link>
                    </Button>,
                    <Button key={"visit"} asChild className="flex gap-2">
                      <Link
                        href={
                          "https://mikelong10.github.io/volleyball-scorekeeper/"
                        }
                        target="_blank"
                      >
                        visit
                        <ExternalLink className="size-5" />
                      </Link>
                    </Button>,
                  ]}
                />
              </div>
            </div>
          </div>
        </Content>
      </Container>
    </section>
  );
}
