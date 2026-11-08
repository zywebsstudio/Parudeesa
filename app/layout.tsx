import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import { siteData } from "@/data/siteData";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parudeesa Plantation Pool Villa | Private Pool Stay in Wayanad",
  description:
    "Experience a peaceful plantation escape at Parudeesa Plantation Pool Villa in Wayanad, Kerala. Discover private pool cottages and a relaxing nature retreat.",
  keywords: [
    "Parudeesa Plantation Pool Villa",
    "Private Pool Villa Wayanad",
    "Luxury Resort Wayanad",
    "Vaduvanchal Resorts",
    "Plantation Stay Wayanad",
    "Kerala Boutique Resort",
    "Private Pool Cottage Kerala",
    "Nature Retreat Wayanad",
  ],
  authors: [{ name: "Parudeesa Plantation Pool Villa" }],
  creator: "Zywebs",
  metadataBase: new URL("https://parudeesa.zywebs.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parudeesa Plantation Pool Villa | Private Pool Stay in Wayanad",
    description:
      "Experience a peaceful plantation escape at Parudeesa Plantation Pool Villa in Wayanad, Kerala. Discover private pool cottages and a relaxing nature retreat.",
    url: "https://parudeesa.zywebs.online",
    siteName: "Parudeesa Plantation Pool Villa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Parudeesa Plantation Pool Villa Wayanad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parudeesa Plantation Pool Villa | Private Pool Stay in Wayanad",
    description:
      "Experience a peaceful plantation escape at Parudeesa Plantation Pool Villa in Wayanad, Kerala. Discover private pool cottages and a relaxing nature retreat.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteData.brand.fullName,
    description: siteData.brand.shortDescription,
    url: "https://parudeesa.zywebs.online",
    telephone: siteData.brand.phone.number,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.location.address.line1,
      addressLocality: siteData.location.address.locality,
      addressRegion: siteData.location.address.district,
      addressCountry: "IN",
      postalCode: siteData.location.address.pincode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.5369",
      longitude: "76.2238",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Outdoor Swimming Pools",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Plantation Surroundings",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Home-Style Dining",
        value: true,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        {/* Fancybox v5 Official CDN CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-charcoal antialiased selection:bg-brand-green selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>

        {/* Fancybox v5 Official CDN Service */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
