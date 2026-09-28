import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessInfo, businessName, siteUrl } from "./site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Blackhorn Security | Security Services in Southwest Florida";
const defaultDescription =
  "Professional armed, unarmed, and mobile patrol security services serving Naples, Fort Myers, and Southwest Florida. Contact Blackhorn Security for a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Blackhorn Security",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: businessName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/homej.png",
        width: 180,
        height: 180,
        alt: "Blackhorn Security logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/homej.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/homej.png?v=1",
    shortcut: "/homej.png?v=1",
    apple: "/homej.png?v=1",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: businessName,
  url: siteUrl,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  areaServed: ["Naples, FL", "Fort Myers, FL", "Southwest Florida"],
  sameAs: businessInfo.sameAs,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security Services",
    itemListElement: [
      "Armed Security",
      "Unarmed Security",
      "Mobile Patrol",
      "Commercial Property Security",
      "Residential / HOA Security",
      "Construction Site Security",
      "Event Security",
      "Retail Security",
      "Parking Lot / Property Patrols",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#05070A] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
