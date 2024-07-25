import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Nunito } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const nun = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600"],
  variable: "--nun",
});

export const metadata: Metadata = {
  title: "HealthBeats",
  description: "A health care managment system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-dark-300 nun antialiased", nun.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
