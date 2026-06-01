const stats = [
  { value: "3", label: "Brand premium" },
  { value: "50+", label: "Produk tersedia" },
  { value: "Gratis", label: "Ongkir Area Jakarta & Bandung" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[#0e4d85] py-20 pb-[100px] max-md:py-[60px] max-md:pb-[80px]">
      {/* Decorative blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-50%",
          right: "-20%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,168,107,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "-30%",
          left: "-10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-[1]">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 mb-6 px-3.5 py-1.5 rounded-full text-[13px] text-white/90 border border-white/15 bg-white/[0.12] backdrop-blur-sm">
          <span className="w-[7px] h-[7px] rounded-full bg-accent shrink-0" />
          Supplier Resmi &nbsp;·&nbsp; Diversey &nbsp;·&nbsp; Godrej
          &nbsp;·&nbsp; Prima
        </div>

        {/* Heading */}
        <h1 className="font-heading font-extrabold text-white mb-5 max-w-[680px] tracking-[-0.5px] [font-size:clamp(32px,5vw,52px)]">
          Solusi <span className="text-accent">chemical cleaning</span>{" "}
          terlengkap untuk bisnis Anda
        </h1>

        {/* Subtext */}
        <p className="text-[17px] text-white/75 max-w-[520px] mb-9 leading-[1.7]">
          Produk berkualitas tinggi langsung dari distributor resmi. Gratis
          ongkir untuk area DKI Jakarta dan Kota Bandung.
        </p>

        {/* Actions */}
        <div className="flex gap-3 flex-wrap">
          <a href="/estimasi.html" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-heading text-[15px] font-semibold bg-accent text-white no-underline transition-all duration-[250ms] hover:bg-[#009B62] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(0,168,107,0.3)]">
            Estimasi Biaya
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#brands"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-heading text-[15px] font-semibold text-white no-underline transition-all duration-[250ms] hover:bg-white/10"
            style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}
          >
            Lihat Produk
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-14 pt-8 border-t border-white/10 max-md:gap-6 max-md:flex-wrap">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="font-heading font-extrabold text-[28px] text-white">
                {value}
              </div>
              <div className="text-[13px] text-white/55 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
