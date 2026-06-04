import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DiverseyKatalog from "./pages/DiverseyCatalog";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EstimasiPage from "./pages/EstimasiPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diversey" element={<DiverseyKatalog />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/estimasi" element={<EstimasiPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
