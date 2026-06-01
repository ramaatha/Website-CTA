import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DiverseyKatalog from "./pages/DiverseyCatalog";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diversey" element={<DiverseyKatalog />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
