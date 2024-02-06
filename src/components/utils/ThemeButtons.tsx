"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@components/ui/toggle-group";

export default function ThemeButtons() {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <ToggleGroup type="single" disabled className="bg-muted rounded-full p-1">
        <ToggleGroupItem
          value="light"
          aria-label="Toggle light"
          className="h-auto rounded-full p-2"
        >
          <Sun className="size-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dark"
          aria-label="Toggle dark"
          className="h-auto rounded-full p-2"
        >
          <Moon className="size-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={setTheme}
      className="bg-muted rounded-full p-1"
    >
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light"
        className="h-auto rounded-full p-2"
      >
        <Sun className="size-5" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle dark"
        className="h-auto rounded-full p-2"
      >
        <Moon className="size-5" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
