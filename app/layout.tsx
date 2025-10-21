import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "react-photo-view/dist/react-photo-view.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Paula Chinchilla",
  description: "Portfolio from Paula Chinchilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="PauChinchilla" />
      </head>
      <body className="antialiased">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
