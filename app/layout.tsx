import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "react-photo-view/dist/react-photo-view.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Paula Chinchilla",
  description: "Portfolio de Paula Chinchilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
