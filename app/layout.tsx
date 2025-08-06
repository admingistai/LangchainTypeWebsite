import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gist Answers - AI Search Companion for Your Website",
  description:
    "Supercharge your site with intelligent AI answers powered by your own content. Extend engagement, grow traffic, and unlock new revenue.",
  icons: {
    icon: "/Gist G white no background.png",
    shortcut: "/Gist G white no background.png",
    apple: "/Gist G white no background.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          src="https://widget-deploy-hazel.vercel.app/widget.js"
          data-config='{"theme":"dark","borderGradient":{"from":"#C081FF","to":"#B8FFE3"}}'
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
