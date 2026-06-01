import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiverseyKatalog from "./pages/DiverseyKatalog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diversey" element={<DiverseyKatalog />} />
    </Routes>
  );
}
