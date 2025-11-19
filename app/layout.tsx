import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const inter = localFont({
  variable: "--font-inter",
  src: "../public/InterVariable.ttf"
});

export const metadata: Metadata = {
  title: "eve's website",
  description: "evelyn's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>evelyn's site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${martianMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
