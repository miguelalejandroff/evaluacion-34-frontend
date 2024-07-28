import { Routes, Route } from "react-router-dom";
import AnimePage from "../animes/pages/AnimePage";
import ComicPage from "../comics/pages/ComicPage";
import LoginPage from "../auth/page/LoginPage";
import AnimeDetallePage from "../animes/pages/AnimeDetallePage";
import ComicDetallePage from "../comics/pages/ComicDetallePage";
import HomePage from "../home/pages/HomePage";
import Navbar from "../ui/components/Navbar";
import Breadcrumb from "../ui/components/Breadcrumb";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/animes" element={<AnimePage />} />
          <Route path="/comics" element={<ComicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/animes/:id" element={<AnimeDetallePage />} />
          <Route path="/comics/:id" element={<ComicDetallePage />} />
        </Routes>
      </div>
    </>
  );
};
