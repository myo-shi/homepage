import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import "./globals.css";

const notoSansJP = Noto_Serif_JP({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  fallback: ["serif"],
});

export const metadata: Metadata = {
  title: "myo's homepage",
  description: "ホームページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.className} m-auto py-4 max-w-xl`}>
        <header className="flex items-center justify-between">
          <h1 className="flex items-center gap-3">
            <Link href={'/'}>
              <Image
                src={"/avatar.png"}
                alt="avatar"
                width={48}
                height={48}
                className="rounded-full hover:opacity-70"
              ></Image>
            </Link>
            <span className="text-2xl">myo&apos;s homepage</span>
          </h1>
          <nav className="flex items-center gap-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/posts"}>Blog</Link>
          </nav>
        </header>
        <main className="my-6">{children}</main>
        <footer>© 2024 myo</footer>
      </body>
    </html>
  );
}
