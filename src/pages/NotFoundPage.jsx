import { Link } from "react-router";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function NotFoundPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <section className="bg-bg min-h-[calc(100vh-68px)] flex items-center justify-center py-20">
        <div className="container text-center">
          {/* 404 number */}
          <div
            className="font-heading font-extrabold text-center leading-none mb-6 select-none"
            style={{
              fontSize: "clamp(96px, 20vw, 180px)",
              background: "linear-gradient(135deg, #0b3d6b 0%, #e8f1fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </div>

          <h1 className="font-heading text-[28px] font-extrabold text-text mb-3 max-md:text-[22px]">
            Halaman tidak ditemukan
          </h1>
          <p className="text-[15px] text-text-secondary max-w-[400px] mx-auto mb-10 leading-[1.7]">
            Halaman yang kamu cari tidak ada atau sudah dipindahkan. Coba
            kembali ke halaman utama.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-heading text-[15px] font-semibold bg-primary text-white no-underline transition-all duration-[250ms] hover:bg-primary-light hover:-translate-y-px"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Kembali ke Home
            </Link>
            <Link
              to="/diversey"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-heading text-[15px] font-semibold text-primary no-underline border border-border transition-all duration-[250ms] hover:border-primary hover:bg-primary-50"
            >
              Lihat Katalog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
