import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { RetroCursor } from "@/components/cursor";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nova | Portfolio",
  description: "Nova's digital world — terminal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <RetroCursor />
        {children}
      </body>
    </html>
  );
}
