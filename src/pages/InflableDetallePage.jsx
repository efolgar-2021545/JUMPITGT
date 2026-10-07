import { useParams } from "react-router-dom";

// TEMPORAL: se reemplaza en el Paso 6
export default function InflableDetallePage() {
    const { id } = useParams();

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-display text-4xl font-bold text-jump-dark">Detalle del inflable</h1>
            <p className="text-slate-500 mt-2">Inflable número {id} (Paso 6).</p>
        </div>
    );
}