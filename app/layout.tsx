import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} | Best Salon, Spa & Barbershop in Pune`,
  description: site.description,
  keywords: "salon in Pune, best salon FC Road, hair styling Pune, spa Pune, beard grooming Pune, nail art Pune, hair color Pune, bridal makeup Pune, Luxe Salon",
  authors: [{ name: site.name }],
  robots: "index, follow",
  openGraph: {
    title: `${site.name} | Best Salon & Spa in Pune`,
    description: site.description,
    url: "https://luxesalon.in",
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Luxe Salon & Spa Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Best Salon & Spa in Pune`,
    description: site.description,
    images: ["https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "https://luxesalon.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.name,
  description: site.description,
  url: "https://luxesalon.in",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "FC Road",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.5204",
    longitude: "73.8567",
  },
  openingHours: "Mo-Su 10:00-21:00",
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
    bestRating: "5",
  },
  sameAs: [site.instagram, site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
