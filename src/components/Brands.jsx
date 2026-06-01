import "../../css/brands.css";

const BrandCard = ({ href, image, title, description, count, bgcolor }) => {
  return (
    <a href={href} className="brand-card fade-up">
      <div className="brand-card-arrow">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
      <div className="brand-card-logo" style={{ background: bgcolor }}>
        {image ? <img src={image} alt={title} /> : title[0]}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="brand-card-count">
        <strong>{count}</strong> produk tersedia
      </div>
    </a>
  );
};

export default function Brands() {
  const brands = [
    {
      href: "/brands/diversey.html",
      image: "/images/brands/diversey.webp",
      title: "Diversey",
      description:
        "Solusi kebersihan dan higienitas profesional untuk industri perhotelan, kesehatan, dan perkantoran.",
      count: "20+",
      bgcolor: "#fff",
    },
    {
      href: "/brands/godrej.html",
      image: "/images/brands/godrej.jpg",
      title: "Godrej",
      description:
        "Produk pembersih berkualitas tinggi dengan formula ramah lingkungan untuk kebutuhan komersial.",
      count: "15+",
      bgcolor: "#fff",
    },
    {
      href: "/brands/prima.html",
      title: "Prima",
      description:
        "Chemical cleaning terpercaya dengan harga kompetitif untuk segala jenis permukaan dan kebutuhan.",
      count: "18+",
      bgcolor: "#fff3ed",
      color: "#993c1d",
    },
  ];

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-label">Brand partner</div>
        <h2 className="section-title">Pilih brand unggulan Anda</h2>
        <p className="section-desc">
          Tiga merek terpercaya dalam industri chemical cleaning profesional.
          Klik untuk melihat katalog lengkap.
        </p>
        <div className="brand-grid">
          {brands.map((brand) => (
            <BrandCard key={brand.title} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
