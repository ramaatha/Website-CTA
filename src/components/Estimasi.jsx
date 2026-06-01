const features = [
  "Hitung otomatis",
  "Gratis ongkir DKI & Bandung",
  "Langsung checkout via WA",
];

export default function Estimasi() {
  return (
    <section
      className="py-20 bg-surface max-sm:py-[60px]"
      id="estimasi-section"
    >
      <div className="container">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-primary to-[#0e4d85] px-12 py-14 text-center max-md:px-6 max-md:py-9 max-sm:px-5 max-sm:py-7">
          {/* Decorative blob */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "-50%",
              right: "-20%",
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(0,168,107,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-[1]">
            <h2 className="font-heading font-extrabold text-white mb-3 [font-size:clamp(24px,3vw,32px)]">
              Hitung estimasi biaya sekarang
            </h2>
            <p className="text-[16px] text-white/70 max-w-[480px] mx-auto mb-8 max-sm:text-sm max-sm:mb-6">
              Rencanakan budget Anda dengan kalkulator estimasi kami. Pilih
              produk, tentukan jumlah, dan lihat total termasuk ongkos kirim.
            </p>

            <div className="flex justify-center gap-8 mb-9 flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-4">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-white/85"
                >
                  <span className="w-6 h-6 rounded-full bg-white/[0.12] flex items-center justify-center shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {f}
                </div>
              ))}
            </div>

            <a
              href="/estimasi.html"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-[10px] font-heading text-[16px] font-semibold bg-accent text-white no-underline transition-all duration-[250ms] hover:bg-[#009B62] hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(0,168,107,0.3)]"
            >
              Buka Kalkulator Estimasi
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
          </div>
        </div>
      </div>
    </section>
  );
}
