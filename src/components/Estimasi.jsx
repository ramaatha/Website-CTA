import "../../css/estimasi.css";

export default function Estimasi() {
  return (
    <section className="estimasi-cta" id="estimasi-section">
      <div className="container">
        <div className="estimasi-box">
          <h2>Hitung estimasi biaya sekarang</h2>
          <p>
            Rencanakan budget Anda dengan kalkulator estimasi kami. Pilih
            produk, tentukan jumlah, dan lihat total termasuk ongkos kirim.
          </p>
          <div className="estimasi-features">
            <div className="estimasi-feature">
              <div className="estimasi-feature-icon">
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
              </div>
              Hitung otomatis
            </div>
            <div className="estimasi-feature">
              <div className="estimasi-feature-icon">
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
              </div>
              Gratis ongkir DKI &amp; Bandung
            </div>
            <div className="estimasi-feature">
              <div className="estimasi-feature-icon">
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
              </div>
              Langsung checkout via WA
            </div>
          </div>
          <a
            href="/estimasi.html"
            className="btn btn-primary"
            style={{ fontSize: "16px", padding: "16px 36px" }}
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
              style={{ marginLeft: "8px" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
