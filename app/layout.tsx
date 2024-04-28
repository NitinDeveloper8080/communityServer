import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Server",
  description: "A world full of imagination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className,"bg-white dark:bg-[#313338]")}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        storageKey="community-theme"
        enableSystem={false}>
        {children}
        </ThemeProvider>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
