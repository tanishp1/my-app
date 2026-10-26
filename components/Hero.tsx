import { site } from "@/data/site";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-inner">
                <p className="hero-tag">⭐ {site.rating} Rated · Pune&apos;s #1 Salon</p>
                <h1>Pune&apos;s Premium<br />Salon, Spa &amp; Barbershop</h1>
                <p>Expert hair styling, beard grooming, spa treatments &amp; skin care<br />at FC Road, Pune. Walk in or book online.</p>
                <div className="hero-btns">
                    <Link href="/book" className="btn">Book Appointment</Link>
                    <a href={`https://wa.me/${site.whatsapp}?text=Hi! I'd like to book an appointment at Luxe Salon.`}
                        target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        💬 WhatsApp Us
                    </a>
                </div>
                <div className="hero-badges">
                    <span>✂️ Hair &amp; Color</span>
                    <span>🧔 Beard &amp; Shave</span>
                    <span>💆 Spa &amp; Massage</span>
                    <span>💅 Nails &amp; Skin</span>
                </div>
            </div>
        </section>
    );
}
