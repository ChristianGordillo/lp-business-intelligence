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
    default: "Luxe & Pristine | Cleaning Intelligence for Short-Term Rentals",
    template: "%s | Luxe & Pristine",
  },

  description:
    "The Cleaning Intelligence platform for professional short-term rental operators, combining software, automation, and trusted cleaning teams.",

  applicationName: "Luxe & Pristine",

  keywords: [
    "cleaning intelligence",
    "short-term rentals",
    "vacation rental operations",
    "turnover management",
    "turnovers",
    "Airbnb cleaning",
    "housekeeping",
    "property operations",
    "cleaning automation",
    "property management",
    "Miami short-term rentals",
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
    title: "Luxe & Pristine | Cleaning Intelligence for Short-Term Rentals",
    description:
      "The Cleaning Intelligence platform for professional short-term rental operators.",
    url: "/",
    siteName: "Luxe & Pristine",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe & Pristine | Cleaning Intelligence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxe & Pristine | Cleaning Intelligence for Short-Term Rentals",
    description:
      "The Cleaning Intelligence platform for professional short-term rental operators.",
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
    apple: "/apple-touch-icon.png",
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}