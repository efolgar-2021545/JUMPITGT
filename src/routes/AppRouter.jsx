import { Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="min-h-screen flex flex-col items-center justify-center bg-jump-light text-center px-4">
                        <h1 className="font-display text-5xl font-bold text-jump-dark">
                            Jump It GT
                        </h1>
                        <p className="mt-3 text-jump-green font-bold text-xl">
                            ¡La diversión comienza aquí!
                        </p>
                    </div>
                }
            />
        </Routes>
    );
}