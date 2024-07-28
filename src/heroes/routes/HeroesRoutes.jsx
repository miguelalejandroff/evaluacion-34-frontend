import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer, Navbar } from '../../ui';
import { AnimePage, ComicPage, HomePage, HeroPage } from '../';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="bg-container">
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/animes" element={<AnimePage />} />
                        <Route path="/comics" element={<ComicPage />} />
                        <Route path="/hero/:id" element={<HeroPage />} />
                        <Route path="/logout" element={<Navigate to="/login" />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    );
};
