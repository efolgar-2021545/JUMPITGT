import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToHash from '../components/layout/ScrollToHash';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import HomePage from '../pages/HomePage';
import CatalogoPage from '../pages/CatalogoPage';
import InflableDetallePage from '../pages/InflableDetallePage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRouter() {
    return (
        <>
            <ScrollToHash />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Catálogo de inflables */}
                <Route path="/catalogo" element={<CatalogoPage />} />
                <Route path="/catalogo/:id" element={<InflableDetallePage />} />

                {/* Ruta 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
        </>
    );
}