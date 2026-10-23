import { site } from "@/data/site";
import Link from "next/link";

export default function Hero(){
    return (
        <section className="hero">
            <div className="container">
                <h1>{site.name}</h1>
                <p>{site.tagline}</p>
                <Link href={"/book"} className="btn">Book an Appointment</Link>
            </div>
        </section>
    )
}