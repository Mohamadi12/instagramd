import type { Metadata } from "next";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import ".././globals.css";
import { Theme } from "@radix-ui/themes";
import Link from "next/link";
import {
  CameraIcon,
  HomeIcon,
  LayoutGridIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-4`}
      >
        <Theme>
          {children}
          <div className="fixed bottom-0 px-4 py-2 left-0 right-0">
            <div className="max-w-sm mx-auto flex justify-between text-gray-600 *:size-12 *:flex *:items-center *:justify-center">
              <Link href="/">
                <HomeIcon />
              </Link>
              <Link href="/search">
                <SearchIcon />
              </Link>
              <Link
                href="/create"
                className="bg-gradient-to-tr from-ig-orange to-ig-red size-12 flex items-center justify-center rounded-full text-white relative -top-12"
              >
                <CameraIcon />
              </Link>
              <Link href="/browse">
                <LayoutGridIcon />
              </Link>
              <Link href="/profile" className="text-ig-red">
                <UserIcon />
              </Link>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
