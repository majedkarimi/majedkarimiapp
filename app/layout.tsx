import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../style/animation.css";
import "../style/globals.css";

const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export const metadata = {
  title: "Majed Karimi",
  description:
    "Majed Karimi is a Frontend Engineer currently working on the Banimode online shop. He has worked at Banimode for over 2 years, focused on Performance, user Profile, cart process, and better game landing pages.",
  robots: "index, follow",
  canonical: "https://www.majedkarimi.com",
  metadataBase: new URL("https://majedkarimi.com"),
  openGraph: {
    title: "Majed Karimi - Front End Engineer",
    description:
      "🌟 Dive into the magical world of Front End Engineering with me!",
    images: [
      {
        url: "/public/faveicon.png",
        width: 800,
        height: 600,
        alt: "Majed Karimi",
      },
    ],
    url: "https://www.majedkarimi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
