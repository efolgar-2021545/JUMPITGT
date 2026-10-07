import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import empresa from "../../data/empresa.json";

// 👇 MONITO (mascota): pon aquí la ruta del archivo en public/image/ o una URL completa
const MONO = "/image/mono.jpg";

export default function HeroSection() {
    const [monoError, setMonoError] = useState(false);

    const whatsappLink = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent(empresa.contacto.mensajeWhatsapp)}`;

    return (
        <section
            id="inicio"
            className="relative overflow-hidden bg-linear-to-b from-jump-pink/40 via-jump-light to-jump-sky/60"
        >
            {/* Decoración: círculos de colores */}
            <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-jump-yellow/40 blur-2xl" />
            <div className="absolute top-40 -right-20 w-72 h-72 rounded-full bg-jump-purple/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-jump-green/20 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

                {/* Texto */}
                <div className="text-center md:text-left">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-jump-dark bg-white/80 border-2 border-jump-pink rounded-full px-4 py-1 mb-6">
                        {empresa.eslogan}
                    </span>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-jump-dark">
                        Catálogo oficial de{" "}
                        <span className="text-jump-green">inflables</span>
                    </h1>

                    <p className="mt-5 font-display text-2xl text-jump-orange font-semibold">
                        {empresa.lema}
                    </p>

                    <p className="mt-4 text-slate-600 max-w-xl mx-auto md:mx-0 text-base md:text-lg">
                        {empresa.descripcion}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <Link
                            to="/catalogo"
                            className="inline-flex items-center gap-2 bg-jump-orange hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg transition-colors"
                        >
                            Ver catálogo
                            <ArrowRight size={16} />
                        </Link>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-jump-green hover:bg-green-600 text-white text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg transition-colors"
                        >
                            <FaWhatsapp size={18} />
                            Reservar ahora
                        </a>
                    </div>
                </div>

                {/* Monito flotando */}
                <div className="flex justify-center">
                    <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {!monoError ? (
                            <img
                                src={MONO}
                                alt="Mascota de Jump It GT"
                                onError={() => setMonoError(true)}
                                className="w-64 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-xl"
                            />
                        ) : (
                            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/70 border-4 border-jump-pink flex items-center justify-center text-9xl shadow-xl">
                                🐵
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}