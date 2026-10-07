import { useState } from "react";
import { Link } from "react-router-dom";
import { Ruler, Users, Cake, Star } from "lucide-react";

// Tarjeta de un inflable. Se usa en la Home y en el Catálogo.
// Recibe un objeto de src/data/inflables.js
export default function InflableCard({ item }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="bg-white border-2 border-jump-sky rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col overflow-hidden">

            {/* Imagen */}
            <div className="relative h-56 w-full bg-jump-light">
                {!imgError ? (
                    <img
                        src={item.imagen}
                        alt={item.nombre}
                        loading="lazy"
                        onError={() => setImgError(true)}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center text-6xl bg-linear-to-br from-jump-pink/40 to-jump-sky">
                        🏰
                    </div>
                )}

                {item.destacado && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-jump-yellow text-jump-dark text-xs font-bold px-3 py-1 rounded-full shadow">
                        <Star size={12} fill="currentColor" />
                        Destacado
                    </span>
                )}
            </div>

            {/* Información */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-jump-dark mb-3">
                    {item.nombre}
                </h3>

                <ul className="space-y-2 text-sm text-slate-600 mb-5">
                    <li className="flex items-center gap-2">
                        <Ruler size={16} className="text-jump-green flex-shrink-0" />
                        <span><strong className="text-jump-dark">Medidas:</strong> {item.medidas}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Users size={16} className="text-jump-orange flex-shrink-0" />
                        <span><strong className="text-jump-dark">Capacidad:</strong> {item.capacidad}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Cake size={16} className="text-jump-purple flex-shrink-0" />
                        <span><strong className="text-jump-dark">Edad:</strong> {item.edad}</span>
                    </li>
                </ul>

                <Link
                    to={`/catalogo/${item.id}`}
                    className="mt-auto inline-block text-center bg-jump-dark hover:bg-jump-orange text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-colors"
                >
                    Ver detalles
                </Link>
            </div>
        </div>
    );
}