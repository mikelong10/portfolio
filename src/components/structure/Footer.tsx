import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import H3 from "@components/typography/h3";
import Monospace from "@components/typography/monospace";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import avatar from "../../../public/avatar.svg";
import Container from "./Container";
import Content from "./Content";

export default function Footer() {
  return (
    <Container className=" border-border from-background to-secondary/20 border-t bg-gradient-to-br pb-20 pt-16">
      <div className="flex w-full flex-col items-center gap-12">
        <Content className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:gap-16 lg:gap-24 xl:gap-32">
          <div className="flex h-full shrink-0 flex-col items-center justify-between gap-2 md:items-start md:gap-4 lg:gap-6">
            <div className="-ml-2 flex items-center gap-4">
              <Image
                src={avatar}
                alt="Picture of the author"
                className="size-14 bg-transparent lg:size-16 xl:size-20"
                priority
              />
              <div className="flex flex-col">
                <H3 className="text-accent-foreground">michael long</H3>
                <p className="text-lg">〽️🐉</p>
              </div>
            </div>
            <div className="text-muted-foreground flex gap-2">
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
          <div className="flex w-full justify-center gap-8 md:justify-start md:gap-12 md:pt-4 lg:gap-16 lg:pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Link href={"/experience"}>
                  <Monospace className="hover:text-secondary transition-colors">
                    experience
                  </Monospace>
                </Link>
                <Separator className="bg-muted" />
              </div>
              <Link href={"/experience#hometap"}>
                <Monospace className="text-muted-foreground hover:text-secondary transition-colors">
                  hometap
                </Monospace>
              </Link>
              <Link href={"/experience#woodmac"}>
                <Monospace className="text-muted-foreground hover:text-secondary transition-colors">
                  wood mac
                </Monospace>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"/#projects"}>
                <Monospace className="hover:text-secondary transition-colors">
                  projects
                </Monospace>
              </Link>
              <Separator className="bg-muted" />
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"/resume"}>
                <Monospace className="hover:text-secondary transition-colors">
                  resume
                </Monospace>
              </Link>
              <Separator className="bg-muted" />
            </div>
          </div>
        </Content>
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Michael Long. All rights reserved.
        </p>
      </div>
    </Container>
  );
}
