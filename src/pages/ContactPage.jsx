import { useState } from "react";
import { Link } from "react-router";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const contactCards = [
  {
    bg: "bg-[#e6f7f0]",
    text: "text-[#0f6e56]",
    icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
    title: "WhatsApp",
    desc: "Chat langsung dengan admin kami untuk respons tercepat.",
    link: {
      href: "https://wa.me/6281283022552",
      label: "0812-8302-2552",
      external: true,
      color: "text-[#25D366]",
    },
  },
  {
    bg: "bg-[#e8f1fa]",
    text: "text-[#0b3d6b]",
    icon: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    ),
    title: "Telepon",
    desc: "Hubungi kami di jam operasional (Senin–Sabtu, 07:00–20:00 WIB).",
    link: {
      href: "tel:+6281283022552",
      label: "0812-8302-2552",
      external: false,
      color: "text-primary",
    },
  },
  {
    bg: "bg-[#fff3ed]",
    text: "text-[#993c1d]",
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    title: "Email",
    desc: "Kirim email untuk permintaan penawaran atau pertanyaan detail.",
    link: {
      href: "mailto:info@ctacleaning.co.id",
      label: "info@ctacleaning.co.id",
      external: false,
      color: "text-primary",
    },
  },
  {
    bg: "bg-[#e8f1fa]",
    text: "text-[#0b3d6b]",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    title: "Alamat Kantor",
    desc: "Jl. T.B. Simatupang 11, Pasar Minggu, Jakarta Selatan, DKI Jakarta 12560, Indonesia",
    link: null,
  },
];

const marketplaces = [
  { label: "Tokopedia", href: "https://www.tokopedia.com/diversey" },
  {
    label: "Shopee",
    href: "https://shopee.co.id/ciptateknologiaplikasi?categoryId=100636&entryPoint=ShopByPDP&itemId=29115473205&upstream=search",
  },
  { label: "TikTok Shop", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telp: "",
    pesan: "",
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Halo CTA Cleaning, saya ${form.nama} ingin bertanya:%0A%0A${form.pesan}`;
    window.open(`https://wa.me/6281283022552?text=${msg}`, "_blank");
  }

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
            <span className="text-white/80">Kontak</span>
          </div>
          <h1 className="font-heading text-[32px] font-extrabold text-white mb-2 max-md:text-[24px]">
            Hubungi Kami
          </h1>
          <p className="text-[15px] text-white/65 max-w-[500px] leading-[1.6]">
            Ada pertanyaan atau butuh penawaran khusus? Kami siap membantu.
          </p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="bg-bg py-14">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {/* ── Left: Contact cards ── */}
            <div className="flex flex-col gap-4">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-surface border border-border rounded-[12px] p-5 flex gap-4"
                >
                  <div
                    className={`w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0 ${card.bg}`}
                  >
                    <svg
                      className={`w-5 h-5 ${card.text}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-[14px] font-bold text-text mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-text-secondary leading-[1.6] mb-2">
                      {card.desc}
                    </p>
                    {card.link && (
                      <a
                        href={card.link.href}
                        target={card.link.external ? "_blank" : undefined}
                        rel={
                          card.link.external ? "noopener noreferrer" : undefined
                        }
                        className={`inline-flex items-center gap-1 text-[13px] font-semibold no-underline hover:underline ${card.link.color}`}
                      >
                        {card.link.label}
                        {card.link.external && (
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Right: Form + Map ── */}
            <div className="flex flex-col gap-5">
              {/* Form card */}
              <div className="bg-surface border border-border rounded-[16px] p-6">
                <h3 className="font-heading text-[16px] font-bold text-text mb-1">
                  Kirim pesan
                </h3>
                <p className="text-[13px] text-text-secondary mb-5">
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                  secepatnya.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-text mb-1.5">
                      Nama lengkap
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={form.nama}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full px-4 py-2.5 rounded-[10px] border border-border bg-bg text-[14px] text-text font-body outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_#e8f1fa] placeholder:text-text-tertiary"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-text mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      required
                      className="w-full px-4 py-2.5 rounded-[10px] border border-border bg-bg text-[14px] text-text font-body outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_#e8f1fa] placeholder:text-text-tertiary"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-text mb-1.5">
                      Nomor telepon{" "}
                      <span className="font-normal text-text-tertiary">
                        (opsional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="telp"
                      value={form.telp}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-2.5 rounded-[10px] border border-border bg-bg text-[14px] text-text font-body outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_#e8f1fa] placeholder:text-text-tertiary"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-text mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      name="pesan"
                      value={form.pesan}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tulis pesan atau pertanyaan Anda..."
                      required
                      className="w-full px-4 py-2.5 rounded-[10px] border border-border bg-bg text-[14px] text-text font-body outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_#e8f1fa] placeholder:text-text-tertiary resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-[10px] bg-primary text-white font-heading font-semibold text-[14px] transition-colors hover:bg-primary-light"
                  >
                    Kirim Pesan
                  </button>

                  <p className="text-[12px] text-text-tertiary text-center">
                    Atau hubungi langsung via{" "}
                    <a
                      href="https://wa.me/6281283022552"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold no-underline hover:underline"
                    >
                      WhatsApp
                    </a>{" "}
                    untuk respons lebih cepat.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Marketplace Section ── */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="container">
          <div className="text-center max-w-[480px] mx-auto">
            <h3 className="font-heading text-[18px] font-bold text-text mb-2">
              Temukan kami juga di marketplace
            </h3>
            <p className="text-[14px] text-text-secondary mb-6">
              Tersedia juga di platform e-commerce berikut (harga termasuk pajak
              aplikator).
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              {marketplaces.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="px-5 py-2.5 rounded-[10px] border border-border text-[13px] font-semibold text-text no-underline transition-all hover:border-primary hover:text-primary hover:bg-primary-50"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
