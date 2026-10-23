import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import { site } from "@/data/site";
import { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: `${site.name} | Salon, spa & Barbershop`,
  description: site.tagline
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}