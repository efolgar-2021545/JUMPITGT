import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Truck, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import empresa from "../../data/empresa.json";

// 👇 LOGO: pon aquí la ruta de tu logo (archivo en public/image/) o una URL completa
const LOGO = "/image/logo-jumpit.png";

export default function Footer() {
    const [logoError, setLogoError] = useState(false);

    const whatsappLink = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent(empresa.contacto.mensajeWhatsapp)}`;

    return (
        <footer className="bg-jump-dark text-white/80 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

                    {/* Empresa */}
                    <div>
                        {!logoError ? (
                            <img
                                src={LOGO}
                                alt="Jump It GT"
                                className="h-16 w-auto object-contain bg-white rounded-xl p-1.5 mb-4"
                                onError={() => setLogoError(true)}
                            />
                        ) : (
                            <p className="font-display text-2xl font-bold text-white mb-4">
                                Jump It <span className="text-jump-yellow">GT</span>
                            </p>
                        )}
                        <p className="text-sm text-white/60 leading-relaxed mb-2">
                            {empresa.descripcion}
                        </p>
                        <p className="text-sm font-bold text-jump-yellow">{empresa.lema}</p>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Navegación
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/catalogo" className="hover:text-white transition-colors">Catálogo de inflables</Link></li>
                            <li><Link to="/#como-reservar" className="hover:text-white transition-colors">Cómo reservar</Link></li>
                            <li><Link to="/#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Contacto
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                                <span>{empresa.contacto.telefonoCompleto}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                                <span>Alquiler por {empresa.alquiler.horas.join(", ")} horas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Truck size={16} className="mt-0.5 flex-shrink-0" />
                                <span>{empresa.alquiler.transporte}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Redes */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
                            Síguenos
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <FaWhatsapp size={18} />
                                    <span>WhatsApp</span>
                                </a>
                            </li>

                            {/* Facebook: solo se muestra si pusiste la URL en empresa.json */}
                            {empresa.redes.facebookUrl && (
                                <li>
                                    <a
                                        href={empresa.redes.facebookUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <FaFacebook size={18} />
                                        <span>{empresa.redes.facebookNombre}</span>
                                    </a>
                                </li>
                            )}

                            {empresa.redes.instagramUrl && (
                                <li>
                                    <a
                                        href={empresa.redes.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <FaInstagram size={18} />
                                        <span>@{empresa.redes.instagramUsuario}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <p className="text-center text-xs text-white/50 pt-8">
                    © {new Date().getFullYear()} {empresa.nombre} · {empresa.eslogan}. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}