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
  metadataBase: new URL('https://portfolio-edson.vercel.app'), // Replace with actual production domain when available
  title: {
    default: "Edson Edwin Ninan | Backend & Cloud Engineer",
    template: "%s | Edson Edwin Ninan"
  },
  description: "Portfolio of Edson Edwin Ninan, a Backend Engineer specializing in Cloud Architecture, Java, Spring Boot, Docker, and scalable full-stack applications.",
  keywords: ["Edson Edwin Ninan", "Backend Engineer", "Cloud Architect", "Software Developer", "Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "Next.js"],
  authors: [{ name: "Edson Edwin Ninan" }],
  creator: "Edson Edwin Ninan",
  publisher: "Edson Edwin Ninan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-edson.vercel.app",
    title: "Edson Edwin Ninan | Backend & Cloud Engineer",
    description: "Portfolio of Edson Edwin Ninan, a Backend Engineer specializing in Cloud Architecture, Java, Spring Boot, and scalable full-stack applications.",
    siteName: "Edson Edwin Ninan Portfolio",
    images: [{
      url: '/luxestay_bg.png', // Fallback OG image using existing asset
      width: 1200,
      height: 630,
      alt: 'Edson Edwin Ninan Portfolio'
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Edwin Ninan | Backend & Cloud Engineer",
    description: "Portfolio of Edson Edwin Ninan, a Backend Engineer specializing in Cloud Architecture and scalable web applications.",
    images: ['/luxestay_bg.png'],
  },
  alternates: {
    canonical: "https://portfolio-edson.vercel.app"
  }
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
