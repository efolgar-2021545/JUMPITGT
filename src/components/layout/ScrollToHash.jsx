import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Baja hasta la sección indicada en la URL (por ejemplo /#contacto).
// Si no hay hash, sube al inicio de la página cada vez que cambia la ruta.
export default function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0 });
            return;
        }

        const id = hash.replace("#", "");
        // Pequeña espera para que la página termine de renderizar
        const timer = setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname, hash, key]);

    return null;
}