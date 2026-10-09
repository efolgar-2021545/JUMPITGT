import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFoundPage() {
    usePageTitle("Página no encontrada");

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-display text-7xl font-bold text-jump-dark">404</h1>
            <p className="text-slate-500 mt-2">¡Ups! Esta página no existe.</p>
            <Link
                to="/"
                className="mt-6 inline-block bg-jump-orange hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider py-3 px-8 rounded-full transition-colors"
            >
                Volver al inicio
            </Link>
        </div>
    );
}