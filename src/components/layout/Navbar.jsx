import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import empresa from "../../data/empresa.json";

// 👇 LOGO: pon aquí la ruta de tu logo (archivo en public/image/) o una URL completa
const LOGO = "/image/logo-jumpit.jpg";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);

    const whatsappLink = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent(empresa.contacto.mensajeWhatsapp)}`;

    const closeMobile = () => setMobileOpen(false);

    // Estilo de los enlaces de página (Inicio, Catálogo): se resalta el activo
    const navLinkClass = ({ isActive }) =>
        `text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? "text-jump-orange" : "text-jump-dark hover:text-jump-orange"
        }`;

    // Estilo de los enlaces a secciones (Cómo reservar, Contacto)
    const hashLinkClass =
        "text-sm font-bold uppercase tracking-wider text-jump-dark hover:text-jump-orange transition-colors";

    return (
        <header className="sticky top-0 bg-white/95 backdrop-blur border-b-4 border-jump-pink z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link to="/" onClick={closeMobile} className="flex items-center gap-2">
                        {!logoError ? (
                            <img
                                src={LOGO}
                                alt="Jump It GT - Saltos & Sonrisas"
                                className="h-14 w-auto object-contain"
                                onError={() => setLogoError(true)}
                            />
                        ) : (
                            <span className="font-display text-2xl font-bold text-jump-dark">
                                Jump It <span className="text-jump-orange">GT</span>
                            </span>
                        )}
                    </Link>

                    {/* Menú de escritorio */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <NavLink to="/" end className={navLinkClass}>
                            Inicio
                        </NavLink>
                        <NavLink to="/catalogo" className={navLinkClass}>
                            Catálogo
                        </NavLink>
                        <Link to="/#como-reservar" className={hashLinkClass}>
                            Cómo reservar
                        </Link>
                        <Link to="/#contacto" className={hashLinkClass}>
                            Contacto
                        </Link>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-jump-green hover:bg-green-600 text-white text-sm font-bold uppercase tracking-wider py-2.5 px-6 rounded-full shadow transition-colors"
                        >
                            <FaWhatsapp size={18} />
                            Reservar
                        </a>
                    </nav>

                    {/* Botón hamburguesa (solo móvil/tablet) */}
                    <button
                        className="lg:hidden text-jump-dark p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Abrir menú"
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Menú móvil desplegable */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-4 py-4 space-y-1">
                        <NavLink
                            to="/"
                            end
                            onClick={closeMobile}
                            className={({ isActive }) =>
                                `block py-3 text-sm font-bold uppercase tracking-wider ${isActive ? "text-jump-orange" : "text-jump-dark"}`
                            }
                        >
                            Inicio
                        </NavLink>

                        <NavLink
                            to="/catalogo"
                            onClick={closeMobile}
                            className={({ isActive }) =>
                                `block py-3 text-sm font-bold uppercase tracking-wider border-t border-gray-100 ${isActive ? "text-jump-orange" : "text-jump-dark"}`
                            }
                        >
                            Catálogo
                        </NavLink>

                        <Link
                            to="/#como-reservar"
                            onClick={closeMobile}
                            className="block py-3 text-sm font-bold uppercase tracking-wider text-jump-dark border-t border-gray-100"
                        >
                            Cómo reservar
                        </Link>

                        <Link
                            to="/#contacto"
                            onClick={closeMobile}
                            className="block py-3 text-sm font-bold uppercase tracking-wider text-jump-dark border-t border-gray-100"
                        >
                            Contacto
                        </Link>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobile}
                            className="mt-3 flex items-center justify-center gap-2 bg-jump-green text-white text-sm font-bold uppercase tracking-wider py-3 rounded-full"
                        >
                            <FaWhatsapp size={18} />
                            Reservar por WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}