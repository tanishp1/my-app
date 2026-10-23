import { services } from "@/data/site";

export default function Service() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Service</h2>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.name}>
              <div className="icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
