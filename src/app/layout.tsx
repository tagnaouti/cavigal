import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cavigal Nice Cyclisme",
    template: "%s | Cavigal Nice Cyclisme",
  },
  description:
    "Club de cyclisme de Nice - Sorties, compétitions, école de vélo et vie associative au coeur de la Côte d'Azur.",
  keywords: [
    "cyclisme",
    "Nice",
    "Cavigal",
    "vélo",
    "club",
    "Côte d'Azur",
    "course",
    "compétition",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
