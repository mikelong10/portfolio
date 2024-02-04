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
          "bg-background text-foreground -z-50 flex min-h-screen min-w-[360px] justify-center overflow-x-hidden scroll-smooth antialiased",
          dmSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
