import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Service from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Service />
      <Pricing />
      <Gallery />
      <Reviews />
      <FAQ />
    </>
  );
}
