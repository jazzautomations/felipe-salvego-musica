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
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
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
    "A Música e a Matemática da Natureza — E-book Gratuito · Felipe Salvego",
  description:
    "Um livro sobre a física do som, a matemática das proporções e a história da música — dos sumérios ao temperamento igual. Download gratuito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
