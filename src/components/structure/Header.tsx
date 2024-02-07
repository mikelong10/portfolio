"use client";

import { useEffect, useState } from "react";

import { cn } from "@lib/utils";
import Container from "@components/structure/Container";
import Content from "./Content";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full justify-center py-6 transition-all duration-1000",
        isScrolled && "bg-background/70 py-4 shadow-lg backdrop-blur-sm"
      )}
    >
      <Container className="flex w-full justify-center">
        <Content className="w-full">
          <MobileHeader isScrolled={isScrolled} />
          <DesktopHeader isScrolled={isScrolled} />
        </Content>
      </Container>
    </header>
  );
}
