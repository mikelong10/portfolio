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
    <Container className=" border-border from-background to-secondary/20 border-t bg-gradient-to-br py-12">
      <Content className="flex w-full flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <div className="flex h-full shrink-0 flex-col items-center justify-between gap-2 sm:items-start sm:gap-10 lg:gap-8">
          <div className="-ml-2 flex items-center gap-4">
            <Image
              src={avatar}
              alt="Picture of the author"
              className="size-14 bg-transparent lg:size-16 xl:size-20"
              priority
            />
            <H3 className="text-accent-foreground">michael long.</H3>
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
        <div className="flex w-full justify-center gap-8 sm:justify-start sm:gap-12 sm:pt-4 lg:gap-16 lg:pt-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link href={"/experience"}>
                <Monospace className="hover:text-secondary transition-colors">
                  experience
                </Monospace>
              </Link>
              <Separator />
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
            <Link href={"/resume"}>
              <Monospace className="hover:text-secondary transition-colors">
                resume
              </Monospace>
            </Link>
            <Separator />
          </div>
        </div>
      </Content>
    </Container>
  );
}
