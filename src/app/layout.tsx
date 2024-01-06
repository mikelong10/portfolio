import "@/styles/globals.css";

import { dmSans } from "@lib/fonts";
import { cn } from "@lib/utils";
import Header from "@components/structure/Header";
import { ThemeProvider } from "@components/utils/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background text-foreground -z-30 flex min-h-screen min-w-[360px] justify-center antialiased",
          dmSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-noise fixed left-0 top-0 -z-10 h-full w-full opacity-10" />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
