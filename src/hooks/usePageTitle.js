import { useEffect } from "react";

// Cambia el título de la pestaña del navegador.
// Si no se le pasa título, usa el título general del sitio.
export default function usePageTitle(titulo) {
    useEffect(() => {
        document.title = titulo
            ? `${titulo} | Jump It GT`
            : "Jump It GT | Saltos & Sonrisas";
    }, [titulo]);
}