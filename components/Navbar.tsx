"use client";
import { site } from "@/data/site";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="nav">
            <div className="container nav-inner">
                <Link href="/" className="logo">{site.name}</Link>
                <nav className={`nav-links${open ? " nav-open" : ""}`}>
                    <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
                    <Link href="/#pricing" onClick={() => setOpen(false)}>Pricing</Link>
                    <Link href="/#gallery" onClick={() => setOpen(false)}>Gallery</Link>
                    <Link href="/#reviews" onClick={() => setOpen(false)}>Reviews</Link>
                    <a href={`tel:${site.phone}`} className="nav-phone">{site.phone}</a>
                    <Link href="/book" className="btn btn-small" onClick={() => setOpen(false)}>Book Now</Link>
                </nav>
                <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? "✕" : "☰"}
                </button>
            </div>
        </header>
    );
}
