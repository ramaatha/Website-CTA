import "../../css/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Supplier Resmi &nbsp;·&nbsp; Diversey &nbsp;·&nbsp; Godrej
          &nbsp;·&nbsp; Prima
        </div>

        <h1>
          Solusi <span>chemical cleaning</span> terlengkap untuk bisnis Anda
        </h1>

        <p className="hero-sub">
          Produk berkualitas tinggi langsung dari distributor resmi. Gratis
          ongkir untuk area DKI Jakarta dan Kota Bandung.
        </p>

        <div className="hero-actions">
          <a href="/estimasi.html" className="btn btn-primary">
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
          <a href="#brands" className="btn btn-outline">
            Lihat Produk
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-value">3</div>
            <div className="hero-stat-label">Brand premium</div>
          </div>
          <div>
            <div className="hero-stat-value">50+</div>
            <div className="hero-stat-label">Produk tersedia</div>
          </div>
          <div>
            <div className="hero-stat-value">Gratis</div>
            <div className="hero-stat-label">Ongkir Area Jakarta & Bandung</div>
          </div>
        </div>
      </div>
    </section>
  );
}
