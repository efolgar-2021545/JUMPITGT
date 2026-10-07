import { FaWhatsapp } from "react-icons/fa";
import empresa from "../../data/empresa.json";

export default function WhatsAppButton() {
    const link = `https://wa.me/${empresa.contacto.whatsapp}?text=${encodeURIComponent(empresa.contacto.mensajeWhatsapp)}`;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
        >
            <FaWhatsapp size={30} className="text-white relative z-10" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        </a>
    );
}