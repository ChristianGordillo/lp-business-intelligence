import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luxeandpristine.com"),

  title: {
    default:
      "Luxe & Pristine | Operational Intelligence for Short-Term Rentals",
    template: "%s | Luxe & Pristine",
  },

  description:
    "Luxe & Pristine combines operational intelligence, automation, and trusted cleaning teams to power short-term rental turnovers.",

  applicationName: "Luxe & Pristine",

  keywords: [
    "short-term rental operations",
    "vacation rental operations",
    "turnover management",
    "Airbnb cleaning",
    "property management",
    "housekeeping operations",
    "Miami short-term rentals",
    "operational intelligence",
    "Luxe & Pristine",
  ],

  authors: [
    {
      name: "Luxe & Pristine",
      url: "https://www.luxeandpristine.com",
    },
  ],

  creator: "Luxe & Pristine",
  publisher: "Luxe & Pristine",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Luxe & Pristine | Operational Intelligence for Short-Term Rentals",
    description:
      "We combine software, automation, and trusted cleaning teams to power reliable short-term rental turnovers.",
    url: "/",
    siteName: "Luxe & Pristine",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe & Pristine operational intelligence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Luxe & Pristine | Operational Intelligence for Short-Term Rentals",
    description:
      "We combine software, automation, and trusted cleaning teams to power reliable short-term rental turnovers.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}