const marketplaces = [
  {
    href: "#",
    img: "/images/ecommerce/tokopedia.png",
    alt: "Tokopedia",
    name: "Tokopedia",
    note: "Harga termasuk pajak aplikator",
    imgSize: 40,
  },
  {
    href: "#",
    img: "/images/ecommerce/shopee.png",
    alt: "Shopee",
    name: "Shopee",
    note: "Harga termasuk pajak aplikator",
    imgSize: 34,
  },
  {
    href: "#",
    img: "/images/ecommerce/tiktok.jpg",
    alt: "TikTok Shop",
    name: "TikTok Shop",
    note: "Harga termasuk pajak aplikator",
    imgSize: 34,
  },
];

export default function BuyDirect() {
  return (
    <section className="py-[72px] bg-surface">
      <div className="container">
        {/* promo-box: 2-col, salmon/peach bg */}
        <div className="grid grid-cols-2 gap-10 bg-warning-light rounded-[24px] p-12 max-md:grid-cols-1 max-md:p-8 max-sm:p-6">

          {/* Left column */}
          <div>
            {/* promo-tag */}
            <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1.5 rounded-full text-[12px] font-bold text-warning bg-[rgba(212,81,30,0.1)]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hemat lebih banyak
            </div>

            <h2 className="font-heading font-extrabold text-text mb-4 tracking-[-0.3px] [font-size:clamp(22px,3vw,30px)]">
              Beli langsung, harga lebih murah
            </h2>

            <p className="text-[15px] text-text-secondary leading-[1.7] mb-6">
              Pembelian langsung melalui website atau WhatsApp kami mendapatkan{" "}
              <strong className="text-text font-semibold">harga yang lebih rendah</strong> dibandingkan marketplace.
              Ini dikarenakan pembelian melalui Tokopedia, Shopee, dan TikTok Shop dikenakan pajak aplikator e-commerce
              yang membuat harga jual lebih tinggi.
            </p>

            {/* promo-savings */}
            <div className="flex items-center gap-3 bg-white rounded-[10px] px-4 py-3.5 text-sm text-text">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l2 2" />
              </svg>
              <span>
                Pembayaran langsung &amp; cash ={" "}
                <strong className="font-semibold text-text">harga terbaik</strong>
              </span>
            </div>
          </div>

          {/* Right column — ecom-grid */}
          <div className="flex flex-col gap-3">

            {/* WhatsApp — highlighted */}
            <a
              href="https://wa.me/6281283022552"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-accent-light border border-accent/20 rounded-[12px] px-4 py-3.5 no-underline transition-all duration-[250ms] hover:shadow-[0_2px_12px_rgba(0,168,107,0.15)] hover:-translate-y-px"
            >
              <div className="w-10 h-10 rounded-[10px] bg-wa flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[14px] text-text">WhatsApp Admin</div>
                <div className="text-[12px] text-text-secondary">Chat langsung, harga terbaik</div>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0" style={{ background: "#e6f7f0", color: "#0f8a4f" }}>
                Termurah
              </span>
            </a>

            {/* Marketplace channels */}
            {marketplaces.map(({ href, img, alt, name, note, imgSize }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-border rounded-[12px] px-4 py-3.5 no-underline transition-all duration-[250ms] hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(11,61,107,0.08)] hover:-translate-y-px"
              >
                <div className="w-10 h-10 rounded-[10px] bg-white border border-border-light flex items-center justify-center shrink-0 p-1">
                  <img src={img} alt={alt} style={{ width: imgSize, height: imgSize, objectFit: "contain" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[14px] text-text">{name}</div>
                  <div className="text-[12px] text-text-secondary">{note}</div>
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
