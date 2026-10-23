import { site } from "@/data/site";

const year = new Date().getFullYear();

export default function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <p><strong>{site.name}</strong></p>
                <p>{site.address}</p>
                <p>{site.phone}</p>
                <p>{site.hours}</p>
                <p className="copy">© {year} {site.name}</p>
            </div>
        </footer>
    )
}