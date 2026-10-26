"use client";
import { faqs } from "@/data/site";
import { useState } from "react";

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <section className="section" id="faq">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <div className="container faq-wrap">
                <p className="section-tag">FAQ</p>
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((f, i) => (
                        <div className={`faq-item${open === i ? " faq-open" : ""}`} key={i}>
                            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                                {f.q}
                                <span className="faq-icon">{open === i ? "−" : "+"}</span>
                            </button>
                            {open === i && <p className="faq-a">{f.a}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
