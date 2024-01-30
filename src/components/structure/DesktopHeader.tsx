"use client";

import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Underline } from "@lib/icons";
import { cn } from "@lib/utils";
import H1 from "@components/typography/h1";
import ThemeToggle from "@components/utils/ThemeToggle";

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "Wayland Student-Athlete",
    href: "/projects/wsa",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Big City Diner",
    href: "/projects/bcd",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Shoots",
    href: "/projects/shoots",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Pokétown",
    href: "/projects/poketown",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Computer Networking",
    href: "/projects/networks",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Fun & Games",
    href: "/projects/fun",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function DesktopHeader({ isScrolled }: { isScrolled: boolean }) {
  return (
    <nav className="hidden items-center justify-between md:flex">
      <div className="relative">
        <Link href="/" className="hover:animate-pulse">
          <H1 className="text-2xl sm:text-4xl lg:text-4xl">ml.</H1>
        </Link>
        <Underline
          className={`text-secondary absolute -left-2 bottom-[-88px] -z-10 w-16 transition-all duration-500 ${
            isScrolled ? "opacity-0" : ""
          }`}
        />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>experience</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                      href="/experience"
                    >
                      <p className="text-4xl">👨‍💻</p>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        work experience
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        9 months and counting of real-world industry experience
                        as a software engineer
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/experience#hometap" title="Hometap">
                  making homeownership less stressful and more accessible
                </ListItem>
                <ListItem href="/experience#woodmac" title="Wood Mackenzie">
                  providing the data and insights that power smart decisions to
                  power our planet
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {projects.map((project) => (
                  <ListItem
                    key={project.title}
                    title={project.title}
                    href={project.href}
                  >
                    {project.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about">about me</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/resume">resume</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle />
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
