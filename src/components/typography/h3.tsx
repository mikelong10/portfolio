import * as React from "react";

import { dmSerifDisplay } from "@lib/fonts";
import { cn } from "@lib/utils";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-muted-foreground scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl",
      dmSerifDisplay.className,
      className
    )}
    {...props}
  />
));
H3.displayName = "H3";

export default H3;
