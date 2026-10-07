import { Phone, Truck } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import empresa from "../../data/empresa.json";

export default function ContactSection() {
    const whatsappLink = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent(empresa.contacto.mensajeWhatsapp)}`;

    return (
        <section id="contacto" className="px-4 sm:px-6 lg:px-8 py-20 bg-jump-light">
            <div className="max-w-7xl mx-auto">
                <div className="bg-jump-dark rounded-3xl px-6 sm:px-10 py-14 text-white text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-jump-yellow">
                        ¡Hablemos!
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">
                        Reserva tu inflable
                    </h2>
                    <p className="text-white/70 text-sm max-w-xl mx-auto mb-10">
                        Escríbenos por WhatsApp y te ayudamos a escoger el inflable ideal para tu fiesta.
                    </p>

                    {/* Botón grande de WhatsApp */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-jump-green hover:bg-green-600 text-white font-display text-2xl font-bold py-4 px-10 rounded-full shadow-xl transition-colors"
                    >
                        <FaWhatsapp size={32} />
                        {empresa.contacto.telefonoCompleto}
                    </a>

                    <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                <Phone size={18} />
                            </div>
                            <span className="text-xs uppercase tracking-wider text-white/60">Teléfono</span>
                            <p className="text-sm font-semibold">{empresa.contacto.telefono}</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                <Truck size={18} />
                            </div>
                            <span className="text-xs uppercase tracking-wider text-white/60">Transporte</span>
                            <p className="text-sm font-semibold">{empresa.alquiler.transporte}</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs uppercase tracking-wider text-white/60">Síguenos</span>
                            <div className="flex items-center gap-3">
                                {empresa.redes.facebookUrl && (
                                    <a
                                        href={empresa.redes.facebookUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    >
                                        <FaFacebook size={20} />
                                    </a>
                                )}
                                {empresa.redes.instagramUrl && (
                                    <a
                                        href={empresa.redes.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    >
                                        <FaInstagram size={20} />
                                    </a>
                                )}
                            </div>
                            <p className="text-sm font-semibold">@{empresa.redes.instagramUsuario}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}