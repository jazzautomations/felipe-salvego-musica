import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Lora,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "A Música e a Matemática da Natureza | Felipe Salvego",
  description:
    "Das origens antigas ao temperamento ocidental — a física do som que moldou a música ocidental, o blues e os sistemas modais do mundo árabe, turco e indiano. Série Fundamentos da Música • Volume I.",
  openGraph: {
    title: "A Música e a Matemática da Natureza",
    description:
      "A física do som que moldou a música ocidental, o blues e os sistemas modais do mundo árabe, turco e indiano.",
    type: "book",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${lora.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
