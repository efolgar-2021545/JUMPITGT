import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InflableCard from "../inflables/InflableCard";
import { getDestacados } from "../../data/inflables";

export default function FeaturedSection() {
    const destacados = getDestacados();

    if (destacados.length === 0) return null;

    return (
        <section id="destacados" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-jump-orange">
                            Los favoritos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-jump-dark mt-2">
                            Inflables destacados
                        </h2>
                    </div>
                    <Link
                        to="/catalogo"
                        className="inline-flex items-center gap-2 text-sm font-bold text-jump-dark hover:text-jump-orange transition-colors"
                    >
                        Ver todo el catálogo
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destacados.map((item) => (
                        <InflableCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}