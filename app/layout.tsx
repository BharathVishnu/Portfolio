import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharath Vishnu | Portfolio",
  description: "SWE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}