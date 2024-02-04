import * as React from "react";

import { dmSerifDisplay } from "@lib/fonts";
import { cn } from "@lib/utils";

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

export default H2;
