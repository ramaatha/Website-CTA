export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">CTA Cleaning Supply</div>
            <p className="footer-desc">
              PT Cipta Teknologi Aplikasi — Supplier resmi produk chemical
              cleaning Diversey, Godrej, dan Prima untuk kebutuhan komersial dan
              industri.
            </p>
            <div
              style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}
            >
              <div style={{ marginBottom: "4px" }}>
                Jl. T.B. Simatupang 11, Pasar Minggu
              </div>
              <div>Jakarta Selatan 12560</div>
            </div>
          </div>
          <div>
            <h4>Brand</h4>
            <ul>
              <li>
                <a href="/brands/diversey.html">Diversey</a>
              </li>
              <li>
                <a href="/brands/godrej.html">Godrej</a>
              </li>
              <li>
                <a href="/brands/prima.html">Prima</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Halaman</h4>
            <ul>
              <li>
                <a href="/estimasi.html">Estimasi Biaya</a>
              </li>
              <li>
                <a href="/about.html">About Us</a>
              </li>
              <li>
                <a href="/contact.html">Kontak</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Marketplace</h4>
            <ul>
              <li>
                <a href="#">Tokopedia</a>
              </li>
              <li>
                <a href="#">Shopee</a>
              </li>
              <li>
                <a href="#">TikTok Shop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; 2026 PT Cipta Teknologi Aplikasi. All rights reserved.
          </span>
          <a href="#" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
