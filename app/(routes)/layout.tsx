import type { Metadata } from "next";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import ".././globals.css";
import { Theme } from "@radix-ui/themes";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

const geistSans = localFont({
  src: ".././fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: ".././fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Instagram Clone",
  description: "Build a Fullstack Instagram Clone with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          <div className="flex min-h-screen">
            <DesktopNav />
            <div className="p-4 pt-6 flex justify-around w-full">
              <div>{children}</div>
            </div>
          </div>
          <MobileNav />
        </Theme>
      </body>
    </html>
  );
}
