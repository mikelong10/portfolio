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
      "text-accent-foreground xs:text-2xl scroll-m-20 text-xl font-semibold tracking-tight sm:text-3xl",
      dmSerifDisplay.className,
      className
    )}
    {...props}
  />
));
H2.displayName = "H2";

export default H2;
