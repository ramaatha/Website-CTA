const footerLinks = [
  {
    heading: "Brand",
    links: [
      { label: "Diversey", href: "/brands/diversey.html" },
      { label: "Godrej", href: "/brands/godrej.html" },
      { label: "Prima", href: "/brands/prima.html" },
    ],
  },
  {
    heading: "Halaman",
    links: [
      { label: "Estimasi Biaya", href: "/estimasi.html" },
      { label: "About Us", href: "/about.html" },
      { label: "Kontak", href: "/contact.html" },
    ],
  },
  {
    heading: "Marketplace",
    links: [
      { label: "Tokopedia", href: "#" },
      { label: "Shopee", href: "#" },
      { label: "TikTok Shop", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-text text-white/70 pt-14 pb-8">
      <div className="container">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <div className="font-heading font-extrabold text-[18px] text-white mb-3">
              CTA Cleaning Supply
            </div>
            <p className="text-sm leading-[1.7] mb-5">
              PT Cipta Teknologi Aplikasi — Supplier resmi produk chemical
              cleaning Diversey, Godrej, dan Prima untuk kebutuhan komersial dan
              industri.
            </p>
            <div className="text-sm text-white/70">
              <div className="mb-1">Jl. T.B. Simatupang 11, Pasar Minggu</div>
              <div>Jakarta Selatan 12560</div>
            </div>
          </div>

          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-heading text-[13px] font-bold uppercase tracking-[1px] text-white mb-4">
                {heading}
              </h4>
              <ul className="list-none p-0 m-0">
                {links.map(({ label, href }) => (
                  <li key={label} className="mb-2.5">
                    <a
                      href={href}
                      className="text-sm text-white/60 no-underline transition-colors duration-[250ms] hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/[0.08] flex justify-between items-center text-[13px] text-white/40 flex-wrap gap-3">
          <span>&copy; 2026 PT Cipta Teknologi Aplikasi. All rights reserved.</span>
          <a href="#" className="text-white/50 no-underline hover:text-white/80 transition-colors duration-[250ms]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
