"use client";

import { useEffect, useState } from "react";

import Container from "@components/structure/Container";
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
      className={`fixed left-0 top-0 z-50 flex w-full justify-center py-8 transition-all ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
    >
      <Container>
        <MobileHeader />
        <DesktopHeader />
      </Container>
    </header>
  );
}
