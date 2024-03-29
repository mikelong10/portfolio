import * as React from "react";

import { dmSerifDisplay } from "@lib/fonts";
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

export default H1;
