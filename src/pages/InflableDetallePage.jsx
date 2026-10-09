import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Ruler, Users, Cake, Clock, Truck, Star, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import InflableCard from "../components/inflables/InflableCard";
import { inflablesData, categoriasInflables, getInflable } from "../data/inflables";
import empresa from "../data/empresa.json";
import usePageTitle from "../hooks/usePageTitle";

// Colores de cada círculo de horas (verde, azul, naranja como en el PDF)
const coloresHoras = ["bg-jump-green", "bg-sky-500", "bg-jump-orange"];

export default function InflableDetallePage() {
    const { id } = useParams();
    const item = getInflable(id);

    // Foto seleccionada en la galería y fotos que no se pudieron cargar
    const [fotoActual, setFotoActual] = useState(0);
    const [fotosConError, setFotosConError] = useState([]);

    // Al cambiar de inflable, volvemos a la primera foto
    useEffect(() => {
        setFotoActual(0);
        setFotosConError([]);
    }, [id]);

    usePageTitle(item ? item.nombre : "Inflable no encontrado");

    // Si el id de la URL no existe, mostramos un aviso
    if (!item) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <p className="text-6xl mb-4">🏰</p>
                <h1 className="font-display text-3xl font-bold text-jump-dark">
                    Inflable no encontrado
                </h1>
                <p className="text-slate-500 mt-2">
                    Es posible que ya no esté disponible o que el enlace esté mal.
                </p>
                <Link
                    to="/catalogo"
                    className="mt-6 inline-block bg-jump-orange hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider py-3 px-8 rounded-full transition-colors"
                >
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    // Foto principal + fotos extra
    const fotos = [item.imagen, ...(item.galeria || [])];
    const fotoSeleccionada = fotos[fotoActual] || fotos[0];
    const fotoSeleccionadaFalla = fotosConError.includes(fotoSeleccionada);

    const marcarError = (src) => {
        setFotosConError((prev) => (prev.includes(src) ? prev : [...prev, src]));
    };

    const tipo = categoriasInflables.find((c) => c.slug === item.tipo);

    // Inflables relacionados: primero los del mismo tipo, luego el resto
    const relacionados = [
        ...inflablesData.filter((x) => x.id !== item.id && x.tipo === item.tipo),
        ...inflablesData.filter((x) => x.id !== item.id && x.tipo !== item.tipo)
    ].slice(0, 3);

    const mensaje = `Hola, quisiera reservar el inflable "${item.nombre}". ¿Está disponible?`;
    const whatsappLink = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Migas de pan */}
                <nav className="text-xs text-slate-500 mb-8 uppercase tracking-wider">
                    <Link to="/" className="hover:text-jump-dark">Inicio</Link>
                    {" / "}
                    <Link to="/catalogo" className="hover:text-jump-dark">Catálogo</Link>
                    {" / "}
                    <span className="text-jump-orange font-bold">{item.nombre}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Galería */}
                    <div>
                        <div className="relative aspect-[4/3] bg-jump-light border-2 border-jump-sky rounded-3xl overflow-hidden shadow-sm">
                            {!fotoSeleccionadaFalla ? (
                                <img
                                    src={fotoSeleccionada}
                                    alt={item.nombre}
                                    onError={() => marcarError(fotoSeleccionada)}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-8xl bg-linear-to-br from-jump-pink/40 to-jump-sky">
                                    🏰
                                </div>
                            )}

                            {item.destacado && (
                                <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-jump-yellow text-jump-dark text-xs font-bold px-3 py-1.5 rounded-full shadow">
                                    <Star size={14} fill="currentColor" />
                                    Destacado
                                </span>
                            )}
                        </div>

                        {/* Miniaturas (solo si hay más de una foto) */}
                        {fotos.length > 1 && (
                            <div className="grid grid-cols-4 gap-3 mt-4">
                                {fotos.map((src, index) => (
                                    <button
                                        key={src}
                                        onClick={() => setFotoActual(index)}
                                        aria-label={`Ver foto ${index + 1}`}
                                        className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${fotoActual === index
                                            ? "border-jump-orange ring-2 ring-jump-orange/30"
                                            : "border-jump-sky hover:border-jump-dark"
                                            }`}
                                    >
                                        {!fotosConError.includes(src) ? (
                                            <img
                                                src={src}
                                                alt={`${item.nombre} - foto ${index + 1}`}
                                                onError={() => marcarError(src)}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-full w-full flex items-center justify-center text-2xl bg-jump-sky/50">
                                                🏰
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Información */}
                    <div className="space-y-6">
                        <div>
                            {tipo && (
                                <span className="inline-block text-xs font-bold uppercase tracking-widest text-jump-orange bg-jump-orange/10 rounded-full px-3 py-1">
                                    {tipo.nombre}
                                </span>
                            )}
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-jump-dark mt-3">
                                {item.nombre}
                            </h1>
                            <p className="text-slate-600 mt-3 leading-relaxed">
                                {item.descripcion}
                            </p>
                        </div>

                        {/* Ficha técnica (los 3 datos del PDF) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="bg-jump-green/15 rounded-2xl p-4 text-center">
                                <Ruler size={24} className="mx-auto text-jump-green mb-1" />
                                <p className="text-xs font-bold uppercase tracking-wider text-jump-dark">
                                    Medidas
                                </p>
                                <p className="text-sm font-semibold text-slate-700 mt-1">{item.medidas}</p>
                            </div>
                            <div className="bg-jump-orange/15 rounded-2xl p-4 text-center">
                                <Users size={24} className="mx-auto text-jump-orange mb-1" />
                                <p className="text-xs font-bold uppercase tracking-wider text-jump-dark">
                                    Capacidad
                                </p>
                                <p className="text-sm font-semibold text-slate-700 mt-1">{item.capacidad}</p>
                            </div>
                            <div className="bg-jump-sky/60 rounded-2xl p-4 text-center">
                                <Cake size={24} className="mx-auto text-sky-600 mb-1" />
                                <p className="text-xs font-bold uppercase tracking-wider text-jump-dark">
                                    Edad
                                </p>
                                <p className="text-sm font-semibold text-slate-700 mt-1">{item.edad}</p>
                            </div>
                        </div>

                        {/* Información de alquiler */}
                        <div className="border-2 border-jump-pink/60 bg-jump-light rounded-3xl p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <Clock size={18} className="text-jump-dark" />
                                <h2 className="font-display text-lg font-bold text-jump-dark">
                                    Adquiérelo por
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                {empresa.alquiler.horas.map((h, i) => (
                                    <div key={h} className="flex flex-col items-center">
                                        <div
                                            className={`${coloresHoras[i % coloresHoras.length]} w-14 h-14 rounded-full flex items-center justify-center text-white font-display text-2xl font-bold shadow border-2 border-white`}
                                        >
                                            {h}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-jump-dark mt-1">
                                            horas
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-start gap-2 text-sm text-slate-600 bg-white rounded-xl px-4 py-3 border border-jump-green/40">
                                <Truck size={18} className="text-jump-green flex-shrink-0 mt-0.5" />
                                <span>{empresa.alquiler.transporte}</span>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-jump-green hover:bg-green-600 text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg transition-colors"
                            >
                                <FaWhatsapp size={20} />
                                Reservar este inflable
                            </a>
                            <Link
                                to="/catalogo"
                                className="inline-flex items-center justify-center gap-2 border-2 border-jump-dark text-jump-dark hover:bg-jump-dark hover:text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-colors"
                            >
                                <ArrowLeft size={16} />
                                Volver al catálogo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* También te puede gustar */}
            {relacionados.length > 0 && (
                <section className="bg-jump-light px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-jump-orange">
                                Más diversión
                            </span>
                            <h2 className="font-display text-3xl font-bold text-jump-dark mt-2">
                                También te puede gustar
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relacionados.map((rel) => (
                                <InflableCard key={rel.id} item={rel} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}