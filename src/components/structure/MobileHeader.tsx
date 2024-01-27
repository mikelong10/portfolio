"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import H1 from "@components/typography/h1";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import avatar from "../../../public/avatar.svg";

const mobileNavLinks = [
  { name: "home", href: "/" },
  { name: "experience", href: "/experience" },
  { name: "projects", href: "/projects" },
  { name: "about me", href: "/about" },
  { name: "resume", href: "/resume" },
];

export default function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between md:hidden">
      <Link href="/" className="hover:animate-pulse">
        <H1 className="text-2xl sm:text-4xl lg:text-4xl">ml.</H1>
      </Link>
      <Sheet open={navOpen} onOpenChange={setNavOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Menu size={32} />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex w-full min-w-[360px] flex-col items-center gap-8 p-8">
          <div className="flex w-full items-center justify-center gap-4 pb-4 pt-8">
            <Link
              href="/"
              className="hover:animate-pulse"
              onClick={() => setNavOpen(false)}
            >
              <Image
                src={avatar}
                alt="Picture of the author"
                className="bg-muted border-border h-24 w-24 rounded-full border p-2"
              />
            </Link>
            <div className="flex flex-col">
              <H1 className="text-2xl sm:text-4xl lg:text-4xl">michael long</H1>
              <p className="text-sm">think different.</p>
            </div>
          </div>
          <Separator />
          <div className="flex h-full flex-col items-center justify-between">
            <nav className="flex flex-col items-center justify-center">
              <ul className="flex flex-col items-center justify-between gap-8 py-8">
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
