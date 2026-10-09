import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import InflableCard from "../components/inflables/InflableCard";
import { inflablesData, categoriasInflables } from "../data/inflables";
import empresa from "../data/empresa.json";
import usePageTitle from "../hooks/usePageTitle";

// Quita tildes y pasa a minúsculas para que "tobogan" encuentre "Tobogán"
const normalizar = (texto) =>
    texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

export default function CatalogoPage() {
    usePageTitle("Catálogo de inflables");
    // El filtro de tipo vive en la URL: /catalogo?tipo=acuaticos
    const [searchParams, setSearchParams] = useSearchParams();
    const tipoActual = searchParams.get("tipo") || "todos";

    const [busqueda, setBusqueda] = useState("");

    const cambiarTipo = (slug) => {
        if (slug === "todos") {
            setSearchParams({});
        } else {
            setSearchParams({ tipo: slug });
        }
    };

    const limpiarFiltros = () => {
        setBusqueda("");
        setSearchParams({});
    };

    // Cuántos inflables hay en cada tipo (para mostrar el contador)
    const contarPorTipo = (slug) =>
        slug === "todos"
            ? inflablesData.length
            : inflablesData.filter((item) => item.tipo === slug).length;

    const inflablesFiltrados = useMemo(() => {
        const termino = normalizar(busqueda.trim());

        return inflablesData.filter((item) => {
            const coincideTipo = tipoActual === "todos" || item.tipo === tipoActual;
            const coincideTexto =
                !termino ||
                normalizar(item.nombre).includes(termino) ||
                normalizar(item.descripcion).includes(termino);

            return coincideTipo && coincideTexto;
        });
    }, [busqueda, tipoActual]);

    const whatsappLink = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent("Hola, quisiera reservar un inflable. ¿Me pueden ayudar a elegir?")}`;

    const hayFiltros = busqueda.trim() !== "" || tipoActual !== "todos";

    return (
        <>
            {/* Banner superior */}
            <div className="relative overflow-hidden bg-jump-dark text-white py-14 px-4 sm:px-6 lg:px-8">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-jump-pink/20 blur-2xl" />
                <div className="absolute -bottom-10 left-10 w-40 h-40 rounded-full bg-jump-green/20 blur-2xl" />

                <div className="relative max-w-7xl mx-auto">
                    <h1 className="font-display text-4xl md:text-5xl font-bold">
                        Catálogo de inflables
                    </h1>
                    <p className="text-sm text-white/70 mt-3 uppercase tracking-wider">
                        <Link to="/" className="hover:underline hover:text-white transition-colors">
                            Inicio
                        </Link>
                        {" / "}
                        <span className="text-jump-yellow">Catálogo</span>
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Barra de filtros */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

                    {/* Botones de tipo */}
                    <div className="flex flex-wrap gap-2">
                        {categoriasInflables.map((cat) => {
                            const activo = tipoActual === cat.slug;
                            return (
                                <button
                                    key={cat.slug}
                                    onClick={() => cambiarTipo(cat.slug)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold border-2 transition-colors ${activo
                                        ? "bg-jump-dark text-white border-jump-dark"
                                        : "bg-white text-jump-dark border-jump-sky hover:border-jump-orange hover:text-jump-orange"
                                        }`}
                                >
                                    {cat.nombre}
                                    <span className={`ml-2 text-xs ${activo ? "text-jump-yellow" : "text-slate-400"}`}>
                                        {contarPorTipo(cat.slug)}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Buscador */}
                    <div className="relative w-full lg:w-80">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            type="text"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            placeholder="Buscar inflable..."
                            className="w-full border-2 border-jump-sky rounded-full pl-11 pr-10 py-2.5 text-sm focus:outline-none focus:border-jump-dark"
                        />
                        {busqueda && (
                            <button
                                onClick={() => setBusqueda("")}
                                aria-label="Borrar búsqueda"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-jump-dark"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Contador de resultados */}
                <p className="text-sm text-slate-500 mb-6">
                    Mostrando{" "}
                    <strong className="text-jump-dark">{inflablesFiltrados.length}</strong>{" "}
                    {inflablesFiltrados.length === 1 ? "inflable" : "inflables"}
                </p>

                {/* Grilla */}
                {inflablesFiltrados.length === 0 ? (
                    <div className="text-center py-20 bg-jump-light rounded-3xl border-2 border-dashed border-jump-pink">
                        <p className="text-6xl mb-4">🔍</p>
                        <p className="font-display text-xl font-bold text-jump-dark">
                            No encontramos inflables con esos filtros
                        </p>
                        <p className="text-slate-500 text-sm mt-1 mb-6">
                            Prueba con otra palabra o revisa todo el catálogo.
                        </p>
                        {hayFiltros && (
                            <button
                                onClick={limpiarFiltros}
                                className="bg-jump-orange hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider py-3 px-8 rounded-full transition-colors"
                            >
                                Limpiar filtros
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {inflablesFiltrados.map((item) => (
                            <InflableCard key={item.id} item={item} />
                        ))}
                    </div>
                )}

                {/* Banner final */}
                <div className="mt-16 bg-linear-to-r from-jump-pink/40 via-jump-sky/60 to-jump-green/30 rounded-3xl px-6 py-10 text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-jump-dark mb-2">
                        ¿No sabes cuál elegir?
                    </h2>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
                        Cuéntanos cuántos niños van a la fiesta y su edad, y te recomendamos el inflable ideal.
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-jump-green hover:bg-green-600 text-white text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg transition-colors"
                    >
                        <FaWhatsapp size={18} />
                        Pedir recomendación
                    </a>
                </div>
            </div>
        </>
    );
}