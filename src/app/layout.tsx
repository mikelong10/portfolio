import "@/styles/globals.css";

import { dmSans } from "@lib/fonts";
import { cn } from "@lib/utils";
import Footer from "@components/structure/Footer";
import Header from "@components/structure/Header";
import { ThemeProvider } from "@components/utils/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="copyright"
          content={`© ${new Date().getFullYear()} Michael Long.`}
        />
        <meta name="author" content="Michael Long" />
      </head>
      <body
        className={cn(
          "bg-background text-foreground -z-50 flex min-h-screen min-w-[360px] flex-col justify-center overflow-x-hidden scroll-smooth antialiased",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
