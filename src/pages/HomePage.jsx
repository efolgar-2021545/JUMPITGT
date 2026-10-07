// TEMPORAL: se reemplaza en el Paso 4
export default function HomePage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-display text-4xl font-bold text-jump-dark">Inicio</h1>
            <p className="text-slate-500 mt-2">Aquí irán las secciones de la página (Paso 4).</p>
            <section id="como-reservar" className="mt-24 py-10">
                <h2 className="font-display text-2xl font-bold text-jump-dark">Cómo reservar (prueba)</h2>
            </section>
            <section id="contacto" className="mt-24 py-10">
                <h2 className="font-display text-2xl font-bold text-jump-dark">Contacto (prueba)</h2>
            </section>
        </div>
    );
}