import { reviews, site } from "@/data/site";

export default function Reviews() {
    return (
        <section className="section alt" id="reviews">
            <div className="container">
                <p className="section-tag">Testimonials</p>
                <h2>What Our Clients Say</h2>
                <p className="section-sub">Rated {site.rating}★ by {site.reviewCount}+ happy clients on Google</p>
                <div className="reviews-grid">
                    {reviews.map((r) => (
                        <div className="review-card" key={r.name}>
                            <div className="review-stars">{"★".repeat(r.rating)}</div>
                            <p className="review-text">"{r.text}"</p>
                            <div className="review-footer">
                                <span className="review-name">{r.name}</span>
                                <span className="review-service">{r.service}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
