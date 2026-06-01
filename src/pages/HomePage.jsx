import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Checkout from "../components/Checkout";
import Estimasi from "../components/Estimasi";
import Footer from "../components/Footer";
import FloatingEstimasi from "../components/FloatingEstimasi";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Brands />
      <Checkout />
      <Estimasi />
      <Footer />
      <FloatingEstimasi />
      <FloatingWhatsApp />
    </>
  );
}
