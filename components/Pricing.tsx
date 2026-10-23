import { prices } from "@/data/site";

export default function Pricing(){
    return (
       <section id="pricing" className="section alt">
        <div className="container">
            <h2>Price List</h2>
            <div className="grid">
                {prices.map((group)=> (
                    <div className="card" key={group.category}>
                        <h3>{group.category}</h3>
                        <ul className="price-list">
                            {group.items.map((item)=> (
                                <li key={item.name}>
                                    <span>{item.name}</span>
                                    <strong>{item.price}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
       </section> 
    )
}