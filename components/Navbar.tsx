import { site } from "@/data/site";
import Link from "next/link";

export default function Navbar(){
    return (
        <header className="nav">
            <div className="container nav-inner">
                <Link href={"/"} className="logo">{site.name}</Link>
                <nav className="nav-links">
                    <Link href={"/#services"}>Services</Link>
                    <Link href={"/#pricing"}>Pricing</Link>
                    <Link href={"/#gallery"}>Gallery</Link>
                    <Link href={"/book"} className="btn btn-small">Book Now</Link>
                </nav>
            </div>
        </header>
    )
}