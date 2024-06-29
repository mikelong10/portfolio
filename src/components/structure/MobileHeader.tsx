"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Underline } from "@lib/icons";
import H1 from "@components/typography/h1";
import H2 from "@components/typography/h2";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import ThemeButtons from "@components/utils/ThemeButtons";
import avatar from "../../../public/avatar.svg";

const mobileNavLinks = [
  { name: "home", href: "/" },
  { name: "experience", href: "/experience" },
  { name: "projects", href: "/#projects" },
  // { name: "about me", href: "/about" },
  { name: "resume", href: "/resume" },
];

export default function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between md:hidden">
      <div className="relative">
        <Link href="/" className="hover:animate-pulse">
          <H2 className="text-foreground">ml.</H2>
        </Link>
        <Underline
          className={`text-secondary absolute -left-1 bottom-[-80px] -z-10 w-12 transition-all duration-500 sm:bottom-[-84px] sm:w-14 ${
            isScrolled ? "opacity-0" : ""
          }`}
        />
      </div>
      <Sheet open={navOpen} onOpenChange={setNavOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Menu size={32} />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex w-full min-w-[360px] flex-col items-center gap-12 p-6">
          <div className="flex w-full flex-col items-center justify-center gap-6 pt-8">
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/"
                className="hover:animate-pulse"
                onClick={() => setNavOpen(false)}
              >
                <Image
                  src={avatar}
                  alt="Picture of the author"
                  className="bg-muted border-border size-24 rounded-full border p-2"
                />
              </Link>
              <div className="flex flex-col">
                <H1 className="text-2xl sm:text-4xl lg:text-4xl">
                  michael long
                </H1>
                <p className="text-sm">〽️🐉</p>
              </div>
            </div>
            <ThemeButtons />
          </div>
          <Separator />
          <div className="flex h-full flex-col items-center justify-between">
            <nav className="flex flex-col items-center justify-center">
              <ul className="flex flex-col items-center justify-between gap-8">
                {mobileNavLinks.map((link) => (
                  <Button key={link.href} asChild variant={"ghost"}>
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setNavOpen(false)}
                    >
                      <p>{link.name}</p>
                    </Link>
                  </Button>
                ))}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
