import { stats } from "@/data/site";

export default function Stats() {
    return (
        <section className="stats-bar">
            <div className="container stats-grid">
                {stats.map((s) => (
                    <div className="stat-item" key={s.label}>
                        <span className="stat-value">{s.value}</span>
                        <span className="stat-label">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
