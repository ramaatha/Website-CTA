import { Link } from "react-router";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const valueCards = [
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Produk Original",
    desc: "Semua produk dijamin 100% asli dan langsung dari distributor resmi.",
  },
  {
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
    title: "Harga Terbaik",
    desc: "Harga lebih kompetitif dibanding marketplace karena tanpa biaya pajak aplikator.",
  },
  {
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
    title: "Gratis Ongkir",
    desc: "Pengiriman gratis untuk seluruh wilayah DKI Jakarta dan Kota Bandung.",
  },
  {
    icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
    title: "Konsultasi Gratis",
    desc: "Tim kami siap membantu memilihkan produk yang tepat sesuai kebutuhan Anda.",
  },
];

const companyInfo = [
  { label: "Nama", value: "PT Cipta Teknologi Aplikasi" },
  { label: "Bidang", value: "General Supplier & Contractor" },
  {
    label: "Alamat",
    value: "Jl. T.B. Simatupang 11, Pasar Minggu, Jakarta Selatan 12560",
  },
  {
    label: "Telepon",
    value: (
      <a href="tel:+6281283022552" className="text-primary hover:underline">
        0812-8302-2552
      </a>
    ),
  },
  { label: "Jam Kerja", value: "Senin – Sabtu, 07:00 – 20:00 WIB" },
];

const brandPartners = [
  {
    initial: "D",
    label: "Diversey",
    href: "/diversey",
    bg: "bg-[#e8f1fa]",
    text: "text-[#0b3d6b]",
  },
  {
    initial: "G",
    label: "Godrej",
    href: "/brands/godrej.html",
    bg: "bg-[#e6f7f0]",
    text: "text-[#0f6e56]",
  },
  {
    initial: "P",
    label: "Prima",
    href: "/brands/prima.html",
    bg: "bg-[#fff3ed]",
    text: "text-[#993c1d]",
  },
];

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div
          className="absolute -top-[40%] -right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,107,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10">
          <div className="flex items-center gap-1.5 text-[13px] text-white/50 mb-3">
            <Link to="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white/80">About Us</span>
          </div>
          <h1 className="font-heading text-[32px] font-extrabold text-white mb-2 max-md:text-[24px]">
            About Us
          </h1>
          <p className="text-[15px] text-white/65 max-w-[500px] leading-[1.6]">
            PT Cipta Teknologi Aplikasi — General Supplier &amp; Contractor
            sejak hari pertama.
          </p>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="bg-bg py-14">
        <div className="container">
          <div className="grid grid-cols-[1fr_320px] gap-10 max-lg:grid-cols-1">
            {/* ── Main Content ── */}
            <div>
              <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-[1.5px] text-accent mb-2">
                Siapa kami
              </span>
              <h2 className="font-heading text-[28px] font-extrabold text-text mb-5 leading-tight max-md:text-[22px]">
                CTA Cleaning Supply
              </h2>
              <p className="text-[15px] text-text-secondary leading-[1.8] mb-4">
                PT Cipta Teknologi Aplikasi (CTA) adalah perusahaan General
                Supplier &amp; Contractor yang berlokasi di Jakarta Selatan.
                Kami menyediakan produk-produk chemical cleaning berkualitas
                tinggi dari brand-brand terkemuka dunia untuk kebutuhan
                industri, perhotelan, perkantoran, dan rumah sakit.
              </p>
              <p className="text-[15px] text-text-secondary leading-[1.8] mb-10">
                Sebagai distributor resmi, kami berkomitmen menyediakan produk
                asli dengan harga kompetitif, karena langsung dari pabrik.
              </p>

              {/* Value cards */}
              <h3 className="font-heading text-[18px] font-bold text-text mb-5">
                Mengapa memilih CTA?
              </h3>
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {valueCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-surface border border-border rounded-[12px] p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-[10px] bg-primary-50 flex items-center justify-center mb-3">
                      <svg
                        className="w-5 h-5 stroke-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {card.icon}
                      </svg>
                    </div>
                    <h4 className="font-heading text-[14px] font-bold text-text mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-[13px] text-text-secondary leading-[1.6]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="flex flex-col gap-5">
              {/* Company info card */}
              <div className="bg-surface border border-border rounded-[16px] p-6">
                <h4 className="font-heading text-[14px] font-bold text-text mb-4">
                  Informasi Perusahaan
                </h4>
                <div className="flex flex-col gap-3">
                  {companyInfo.map((row) => (
                    <div
                      key={row.label}
                      className="flex gap-3 pb-3 border-b border-border-light last:border-0 last:pb-0"
                    >
                      <span className="text-[12px] text-text-tertiary w-[72px] shrink-0 pt-0.5">
                        {row.label}
                      </span>
                      <span className="text-[13px] text-text leading-[1.5]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand partners card */}
              <div className="bg-surface border border-border rounded-[16px] p-6">
                <h4 className="font-heading text-[14px] font-bold text-text mb-4">
                  Brand Partner
                </h4>
                <div className="flex flex-col gap-2">
                  {brandPartners.map((b) => (
                    <a
                      key={b.label}
                      href={b.href}
                      className="flex items-center gap-3 p-3 rounded-[10px] border border-border-light hover:border-border hover:bg-bg transition-all no-underline"
                    >
                      <div
                        className={`w-9 h-9 rounded-[8px] flex items-center justify-center font-heading font-extrabold text-[14px] shrink-0 ${b.bg} ${b.text}`}
                      >
                        {b.initial}
                      </div>
                      <span className="text-[14px] font-medium text-text">
                        {b.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Lokasi Section ── */}
      <section className="bg-bg py-14 border-t border-border">
        <div className="container">
          <div className="mb-6">
            <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-[1.5px] text-accent mb-2">
              Lokasi kami
            </span>
            <h2 className="font-heading text-[22px] font-extrabold text-text leading-tight">
              Kantor PT Cipta Teknologi Aplikasi
            </h2>
            <p className="text-[14px] text-text-secondary mt-1">
              Jl. T.B. Simatupang 11, Pasar Minggu, Jakarta Selatan 12560
            </p>
          </div>
          <div className="rounded-[16px] overflow-hidden border border-border shadow-sm h-[380px] max-md:h-[280px]">
            <iframe
              src="https://maps.google.com/maps?q=Jl.+T.B.+Simatupang+11+Pasar+Minggu+Jakarta+Selatan+12560&output=embed&z=16&hl=id"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PT Cipta Teknologi Aplikasi"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
