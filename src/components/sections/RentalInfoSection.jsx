import { Truck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import empresa from "../../data/empresa.json";

// Colores de cada círculo de horas (verde, azul, naranja como en el PDF)
const coloresHoras = ["bg-jump-green", "bg-sky-500", "bg-jump-orange"];

export default function RentalInfoSection() {
    const whatsappLink = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent("Hola, quisiera consultar precios de alquiler de inflables.")}`;

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-jump-sky/40">
            <div className="max-w-5xl mx-auto text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-jump-orange">
                    Tiempo de diversión
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-jump-dark mt-2 mb-3">
                    Adquiérelo por 2, 3 o 4 horas
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                    Elige el tiempo que mejor se adapte a tu fiesta. Escríbenos y te
                    damos el precio según el inflable y la duración.
                </p>

                {/* Círculos de horas */}
                <div className="flex items-center justify-center gap-5 sm:gap-8 mb-10">
                    {empresa.alquiler.horas.map((h, i) => (
                        <div key={h} className="flex flex-col items-center">
                            <div
                                className={`${coloresHoras[i % coloresHoras.length]} w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-display text-4xl sm:text-5xl font-bold shadow-lg border-4 border-white`}
                            >
                                {h}
                            </div>
                            <span className="mt-2 text-sm font-bold uppercase tracking-wider text-jump-dark">
                                horas
                            </span>
                        </div>
                    ))}
                </div>

                {/* Transporte */}
                <div className="inline-flex items-center gap-3 bg-white border-2 border-jump-green rounded-full px-6 py-3 shadow-sm mb-8">
                    <Truck size={22} className="text-jump-green flex-shrink-0" />
                    <span className="text-sm font-semibold text-jump-dark text-left">
                        {empresa.alquiler.transporte}
                    </span>
                </div>

                <div>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-jump-green hover:bg-green-600 text-white text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg transition-colors"
                    >
                        <FaWhatsapp size={18} />
                        Consultar precios
                    </a>
                </div>
            </div>
        </section>
    );
}