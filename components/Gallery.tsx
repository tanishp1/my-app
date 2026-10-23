import { gallery } from "@/data/site";

export default function Gallery(){
    return (
        <section id="gallery" className="section">
            <div className="container">
                <h2>Gallery</h2>
                <div className="gallery">
                    {gallery.map((item, i)=> (
                        <div key={i} className="gallery-item">
                            <img src={item.src} alt={item.label} loading="lazy" />
                            <span className="gallery-label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}