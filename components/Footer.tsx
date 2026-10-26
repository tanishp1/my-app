import { site } from "@/data/site";
import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <h3 className="footer-logo">{site.name}</h3>
                    <p>Pune&apos;s premium destination for hair, beauty, spa &amp; grooming. Trusted by 15,000+ clients.</p>
                    <div className="footer-social">
                        <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/#services">Our Services</Link></li>
                        <li><Link href="/#pricing">Price List</Link></li>
                        <li><Link href="/#gallery">Gallery</Link></li>
                        <li><Link href="/#reviews">Reviews</Link></li>
                        <li><Link href="/book">Book Appointment</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li>Hair Styling &amp; Color</li>
                        <li>Beard &amp; Shave</li>
                        <li>Spa &amp; Massage</li>
                        <li>Nail Art</li>
                        <li>Facial &amp; Skin Care</li>
                        <li>Bridal Packages</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href={`tel:${site.phone}`}>{site.phone}</a></li>
                        <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                        <li><a href={site.mapUrl} target="_blank" rel="noopener noreferrer">{site.address}</a></li>
                        <li>{site.hours}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {year} {site.name}. All rights reserved. | FC Road, Pune, Maharashtra</p>
            </div>
        </footer>
    );
}
