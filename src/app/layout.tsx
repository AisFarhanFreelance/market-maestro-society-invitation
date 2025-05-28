import {
  KaiseiTokumin,
  amoresa,
  avenir,
  carrig,
  texGyreTermes,
  unbounded,
} from "@/lib/fonts/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syailendra Networking Night 2025",
  description: "Reserve your position here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${KaiseiTokumin.variable} ${avenir.variable} ${amoresa.variable} ${texGyreTermes.variable} ${carrig.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
