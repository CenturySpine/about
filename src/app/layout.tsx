import type { Metadata, Viewport } from "next";
import { Public_Sans, Quicksand } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ["500", "700"],
  subsets: ["latin"],
});

const siteUrl = "https://centuryspine.org";
const title = "Bruno Chappe";
const description = "Développeur, passionné de rando et de montagne — à propos de moi et de mes projets.";

const keywords = [
  "Bruno Chappe",
  "CenturySpine",
  "Ridgegear",
  "Planerz",
  "NUNI",
  "Street golf",
  // Activités — FR
  "Rando",
  "Randonnée",
  "Bachata",
  "Escalade",
  "Running",
  "Ciné",
  "Séries",
  "Golf",
  "Cuisine",
  "Réparation vélo",
  "Théâtre d'impro",
  "Jeux de société",
  // Activities — EN
  "Hiking",
  "Climbing",
  "Cinema",
  "Cooking",
  "Bike repair",
  "Improv theater",
  "Board games",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords,
  authors: [{ name: "CenturySpine" }],
  creator: "CenturySpine",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: "fr_FR",
    type: "profile",
    firstName: "Bruno",
    lastName: "Chappe",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2e4020",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${publicSans.variable} ${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
