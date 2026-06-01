const brands = [
  {
    href: "/brands/diversey.html",
    image: "/images/brands/diversey.webp",
    title: "Diversey",
    description:
      "Solusi kebersihan dan higienitas profesional untuk industri perhotelan, kesehatan, dan perkantoran.",
    count: "20+",
    logoBg: "#fff",
  },
  {
    href: "/brands/godrej.html",
    image: "/images/brands/godrej.jpg",
    title: "Godrej",
    description:
      "Produk pembersih berkualitas tinggi dengan formula ramah lingkungan untuk kebutuhan komersial.",
    count: "15+",
    logoBg: "#fff",
  },
  {
    href: "/brands/prima.html",
    title: "Prima",
    description:
      "Chemical cleaning terpercaya dengan harga kompetitif untuk segala jenis permukaan dan kebutuhan.",
    count: "18+",
    logoBg: "#fff3ed",
    logoColor: "#993c1d",
  },
];

function BrandCard({
  href,
  image,
  title,
  description,
  count,
  logoBg,
  logoColor,
}) {
  return (
    <a
      href={href}
      className="group relative flex flex-col bg-surface border-[1.5px] border-border rounded-[16px] p-8 text-center no-underline text-text overflow-hidden transition-all duration-[250ms] hover:border-primary hover:shadow-md hover:-translate-y-1"
    >
      {/* Arrow — visible on hover */}
      <span className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center bg-bg rounded-[6px] text-primary opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </span>

      {/* Logo */}
      <div
        className="w-full max-w-[250px] min-h-[80px] mx-auto mb-5 rounded-[10px] flex items-center justify-center p-3"
        style={{ background: logoBg }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[120px] object-contain"
          />
        ) : (
          <span
            className="font-heading font-extrabold text-2xl"
            style={{ color: logoColor ?? "var(--color-primary)" }}
          >
            {title}
          </span>
        )}
      </div>

      <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-[1.6] mb-5 flex-1">
        {description}
      </p>

      <div className="text-[13px] text-text-tertiary pt-4 border-t border-border-light">
        <strong className="text-primary font-semibold">{count}</strong> produk
        tersedia
      </div>
    </a>
  );
}

export default function Brands() {
  return (
    <section className="py-[72px] bg-surface" id="brands">
      <div className="container">
        <div className="font-heading text-[12px] font-bold uppercase tracking-[1.5px] text-accent mb-3">Brand partner</div>
        <h2 className="[font-size:clamp(24px,3.5vw,36px)] font-extrabold text-text mb-3 tracking-[-0.3px]">Pilih brand unggulan Anda</h2>
        <p className="text-[16px] text-text-secondary max-w-[520px] mb-12">
          Tiga merek terpercaya dalam industri chemical cleaning profesional.
          Klik untuk melihat katalog lengkap.
        </p>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-4">
          {brands.map((brand) => (
            <BrandCard key={brand.title} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
