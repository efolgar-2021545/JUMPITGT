import { Search, MessageCircle, CalendarCheck, PartyPopper } from "lucide-react";

const pasos = [
    {
        id: 1,
        icono: Search,
        titulo: "Elige tu inflable",
        texto: "Revisa el catálogo y escoge el modelo que más le guste a tus peques.",
        color: "bg-jump-green"
    },
    {
        id: 2,
        icono: MessageCircle,
        titulo: "Escríbenos",
        texto: "Mándanos un mensaje por WhatsApp con el modelo que te interesa.",
        color: "bg-sky-500"
    },
    {
        id: 3,
        icono: CalendarCheck,
        titulo: "Confirma fecha y horas",
        texto: "Te confirmamos disponibilidad, tiempo de alquiler (2, 3 o 4 horas) y transporte.",
        color: "bg-jump-orange"
    },
    {
        id: 4,
        icono: PartyPopper,
        titulo: "¡A saltar y sonreír!",
        texto: "Llevamos el inflable y tus invitados solo se preocupan por divertirse.",
        color: "bg-jump-purple"
    }
];

export default function HowToReserveSection() {
    return (
        <section id="como-reservar" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-jump-orange">
                        Fácil y rápido
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-jump-dark mt-2">
                        ¿Cómo reservar?
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pasos.map((paso) => {
                        const Icono = paso.icono;
                        return (
                            <div
                                key={paso.id}
                                className="relative bg-jump-light border-2 border-jump-pink/60 rounded-3xl p-6 pt-10 text-center"
                            >
                                <span
                                    className={`${paso.color} absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full text-white font-display font-bold text-lg flex items-center justify-center shadow-md border-2 border-white`}
                                >
                                    {paso.id}
                                </span>
                                <div className="w-14 h-14 mx-auto rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                                    <Icono size={26} className="text-jump-dark" />
                                </div>
                                <h3 className="font-display text-lg font-bold text-jump-dark mb-2">
                                    {paso.titulo}
                                </h3>
                                <p className="text-sm text-slate-600">{paso.texto}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}