import { Routes, Route } from 'react-router-dom';
import empresa from '../data/empresa.json';
import { inflablesData, getDestacados } from '../data/inflables';

// Página temporal solo para verificar que los datos cargan bien.
// La reemplazaremos en el Paso 3.
function PruebaDatos() {
    return (
        <div className="min-h-screen bg-jump-light px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-5xl font-bold text-jump-dark text-center">
                    {empresa.nombre}
                </h1>
                <p className="mt-2 text-jump-green font-bold text-xl text-center">
                    {empresa.eslogan} · {empresa.contacto.telefonoCompleto}
                </p>

                <p className="mt-8 text-sm font-semibold text-jump-dark">
                    Total de inflables: {inflablesData.length} | Destacados: {getDestacados().length}
                </p>

                <ul className="mt-4 space-y-2">
                    {inflablesData.map((item) => (
                        <li
                            key={item.id}
                            className="bg-white border border-jump-sky rounded-xl p-4 shadow-sm"
                        >
                            <span className="font-display font-bold text-jump-dark">
                                {item.destacado && "⭐ "}
                                {item.nombre}
                            </span>
                            <span className="block text-sm text-slate-600">
                                {item.medidas} · {item.capacidad} · {item.edad}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<PruebaDatos />} />
        </Routes>
    );
}