import * as React from "react";

import { dmMono, dmSerifDisplay } from "@lib/fonts";
import { cn } from "@lib/utils";

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "scroll-m-20 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl",
      dmSerifDisplay.className,
      className
    )}
    {...props}
  />
));
H1.displayName = "H1";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-tertiary scroll-m-20 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
      dmSerifDisplay.className,
      className
    )}
    {...props}
  />
));
H2.displayName = "H2";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-muted-foreground scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl",
      dmSerifDisplay.className,
      className
    )}
    {...props}
  />
));
H3.displayName = "H3";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-foreground scroll-m-20 text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl",
      dmSerifDisplay.className,
      className
    )}
    {...props}
  />
));
H4.displayName = "H4";

const Monospace = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <code ref={ref} className={cn("", dmMono.className, className)} {...props} />
));
Monospace.displayName = "Monospace";

export { H1, H2, H3, H4, Monospace };
