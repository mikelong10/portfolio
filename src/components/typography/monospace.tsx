import * as React from "react";

import { dmMono } from "@lib/fonts";
import { cn } from "@lib/utils";

const Monospace = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <code ref={ref} className={cn("", dmMono.className, className)} {...props} />
));
Monospace.displayName = "Monospace";

export default Monospace;
