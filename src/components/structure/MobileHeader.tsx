"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { cn } from "@lib/utils";
import H1 from "@components/typography/h1";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";

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
        <SheetContent className="flex w-full min-w-[224px] flex-col items-center gap-4 py-4">
          <div className="flex w-full items-center">
            <Link
              href="/"
              className="hover:animate-pulse"
              onClick={() => setNavOpen(false)}
            >
              <H1 className="text-2xl sm:text-4xl lg:text-4xl">ml.</H1>
            </Link>
          </div>
          <Separator />
          <div className="flex h-full flex-col items-center justify-between">
            <nav className="flex flex-col items-center justify-center">
              <ul className="flex flex-col items-center justify-between gap-12">
                <a
                  className={cn(
                    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                  )}
                >
                  <div className="text-sm font-medium leading-none">
                    {"title"}
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    {"children"}
                  </p>
                </a>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
