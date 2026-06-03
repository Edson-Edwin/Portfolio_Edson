import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const royal = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-royal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edson Edwin Ninan | Backend Engineer",
  description: "Backend Engineer, Cloud & DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${space.variable} ${outfit.variable} ${royal.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
