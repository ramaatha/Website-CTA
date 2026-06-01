import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import BuyDirect from "./components/BuyDirect";
import Estimasi from "./components/Estimasi";
import Footer from "./components/Footer";
import FloatingEstimasi from "./components/FloatingEstimasi";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Brands />
      <BuyDirect />
      <Estimasi />
      <Footer />
      <FloatingEstimasi />
      <FloatingWhatsApp />
    </>
  );
}
