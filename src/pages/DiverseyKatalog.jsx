import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { diverseyProducts } from "../data/products";
import diverseyImages from "../data/diverseyImages";
import useCartStore from "../store/cartStore";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const CATEGORIES = [
  { key: "all", label: "Semua" },
  { key: "housekeeping", label: "Housekeeping Care" },
  { key: "kitchen", label: "Kitchen Care" },
  { key: "personal", label: "Personal Care" },
  { key: "laundry", label: "Laundry Care" },
  { key: "equipment", label: "Equipment" },
];

const CAT_META = {
  housekeeping: { cls: "bg-[#e8f1fa] text-[#0b3d6b]", label: "Housekeeping" },
  kitchen: { cls: "bg-[#fff3ed] text-[#993c1d]", label: "Kitchen" },
  personal: { cls: "bg-[#fbeaf0] text-[#72243e]", label: "Personal" },
  laundry: { cls: "bg-[#e6f7f0] text-[#085041]", label: "Laundry" },
  equipment: { cls: "bg-[#f1efe8] text-[#444441]", label: "Equipment" },
};

function formatRupiah(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}

function ProductImage({ src, name }) {
  const [error, setError] = useState(false);

  const placeholder = (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1.5">
      <svg
        className="w-9 h-9 stroke-border"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-[10px] text-text-tertiary">Foto segera hadir</span>
    </div>
  );

  if (!src || error) return placeholder;

  return (
    <img
      src={src}
      alt={name}
      onError={() => setError(true)}
      className="w-full h-full object-contain p-5 transition-transform duration-[400ms] group-hover:scale-110"
    />
  );
}

function ProductCard({ product, onViewDetail, onAddToCart }) {
  const cat = CAT_META[product.category] || CAT_META.housekeeping;
  const imgFile = diverseyImages[product.id];
  const imgSrc = imgFile ? `/images/products/${imgFile}` : null;

  return (
    <div
      className="group bg-surface border border-border rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_30px_rgba(11,61,107,0.12)] cursor-pointer"
      onClick={() => onViewDetail(product)}
    >
      {/* Image */}
      <div className="relative w-full h-[200px] bg-[#f8f9fb] overflow-hidden max-sm:h-[150px]">
        <ProductImage src={imgSrc} name={product.name} />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/75 flex flex-col items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetail(product);
            }}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-[8px] bg-white text-primary font-heading text-[13px] font-semibold transition-colors hover:bg-primary-50"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Lihat Detail
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-[8px] bg-accent text-white font-heading text-[13px] font-semibold transition-colors hover:bg-[#009b62]"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            Tambah Keranjang
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 max-sm:p-3">
        <span
          className={`inline-block px-2 py-0.5 rounded-[4px] text-[10px] font-semibold uppercase tracking-[0.5px] mb-2 ${cat.cls}`}
        >
          {cat.label}
        </span>
        <div className="text-[11px] text-text-tertiary font-heading mb-1">
          SKU: {product.sku}
        </div>
        <div className="text-[14px] font-semibold text-text leading-[1.4] mb-2 line-clamp-2">
          {product.name}
        </div>
        <div className="text-[12px] text-text-tertiary mb-2">
          {product.unit}
        </div>
        <div className="font-heading text-[18px] font-extrabold text-primary max-sm:text-[15px]">
          {formatRupiah(product.price)}
        </div>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, onAddToCart }) {
  const cat = CAT_META[product.category] || CAT_META.housekeeping;
  const imgFile = diverseyImages[product.id];
  const imgSrc = imgFile ? `/images/products/${imgFile}` : null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Panel */}
      <div
        className="relative z-10 bg-surface rounded-t-[20px] sm:rounded-[16px] w-full sm:max-w-[560px] max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-border-light hover:bg-border transition-colors z-10"
        >
          <svg
            className="w-4 h-4 stroke-text-secondary"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image */}
        <div className="w-full h-[240px] bg-[#f8f9fb] overflow-hidden flex items-center justify-center">
          <ProductImage src={imgSrc} name={product.name} />
        </div>

        {/* Content */}
        <div className="p-6">
          <span
            className={`inline-block px-2.5 py-1 rounded-[4px] text-[10px] font-semibold uppercase tracking-[0.5px] mb-3 ${cat.cls}`}
          >
            {cat.label}
          </span>
          <h2 className="font-heading text-[20px] font-bold text-text leading-tight mb-1">
            {product.name}
          </h2>
          <div className="text-[12px] text-text-tertiary mb-4">
            SKU: {product.sku} &middot; {product.unit}
          </div>

          {product.description && (
            <p className="text-[14px] text-text-secondary leading-[1.7] mb-5 p-4 bg-bg rounded-[10px] border border-border-light">
              {product.description}
            </p>
          )}

          <div className="flex items-center justify-between gap-4 pt-4 border-t border-border-light flex-wrap">
            <div>
              <div className="text-[12px] text-text-tertiary mb-0.5">
                Harga per satuan
              </div>
              <div className="font-heading text-[24px] font-extrabold text-primary">
                {formatRupiah(product.price)}
              </div>
            </div>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-[10px] bg-accent text-white font-heading font-semibold text-[14px] transition-colors hover:bg-[#009b62] whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
              </svg>
              Tambah Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toast({ message, visible }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[9999] flex items-center gap-2 px-6 py-3 bg-text text-white rounded-[10px] shadow-lg text-[13px] font-medium transition-all duration-300 ${
        visible
          ? "opacity-100 -translate-x-1/2 translate-y-0"
          : "opacity-0 -translate-x-1/2 translate-y-8 pointer-events-none"
      }`}
    >
      <svg
        className="w-4 h-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00A86B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {message}
    </div>
  );
}

export default function DiverseyKatalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const addItem = useCartStore((s) => s.addItem);
  const totalItems = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.qty, 0),
  );

  const filtered = diverseyProducts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  function showToast(msg) {
    setToast({ visible: true, message: msg });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2500);
  }

  function handleAddToCart(product) {
    addItem(product);
    showToast(`${product.name} ditambahkan ke keranjang`);
  }

  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── Brand Hero ── */}
      <section
        className="relative py-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0b3d6b 100%)",
        }}
      >
        <div
          className="absolute -top-[40%] -right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,107,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 flex items-center gap-8 max-md:flex-col max-md:text-center">
          <div className="w-[100px] h-[100px] bg-white rounded-[16px] flex items-center justify-center p-3 shrink-0 max-md:w-[72px] max-md:h-[72px]">
            <img
              src="/images/brands/diversey.webp"
              alt="Diversey"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[13px] text-white/50 mb-3 max-md:justify-center">
              <Link to="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-white/80">Diversey</span>
            </div>
            <h1 className="font-heading text-[32px] font-extrabold text-white mb-2 max-md:text-[24px]">
              Diversey
            </h1>
            <p className="text-[15px] text-white/65 max-w-[500px] leading-[1.6]">
              A Solenis Company — Solusi chemical cleaning profesional untuk
              industri perhotelan, kesehatan, dan perkantoran.
            </p>
          </div>
        </div>
      </section>

      {/* ── Catalog Header ── */}
      <div className="bg-surface border-b border-border sticky top-[68px] z-50 max-md:top-[60px]">
        <div className="container">
          <div className="flex items-center justify-between gap-4 flex-wrap pt-5">
            <span className="text-[13px] text-text-tertiary">
              Menampilkan{" "}
              <strong className="text-text">{filtered.length}</strong> produk
            </span>
            {/* Search */}
            <div className="flex items-center gap-2 bg-bg border-[1.5px] border-border rounded-[10px] px-4 py-2.5 max-w-[300px] w-full transition-all focus-within:border-primary focus-within:shadow-[0_0_0_3px_#e8f1fa]">
              <svg
                className="w-[18px] h-[18px] shrink-0 stroke-text-tertiary"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Cari produk Diversey..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-0 text-[14px] font-body text-text outline-none placeholder:text-text-tertiary"
              />
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-1 pt-4 overflow-x-auto scrollbar-none max-md:gap-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 font-heading text-[13px] font-semibold border-0 bg-transparent cursor-pointer border-b-[2.5px] transition-all whitespace-nowrap max-md:px-3.5 max-md:text-[12px] ${
                  activeCategory === cat.key
                    ? "text-primary border-b-primary"
                    : "text-text-secondary border-b-transparent hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="bg-bg pb-20 min-h-[400px]">
        <div className="container pt-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-text-tertiary">
              <svg
                className="w-12 h-12 mx-auto mb-4 stroke-border"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p className="text-[14px]">
                Tidak ada produk yang sesuai dengan pencarian.
              </p>
            </div>
          ) : (
            <div
              className="grid gap-5 max-md:gap-3 max-sm:gap-2.5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              }}
            >
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onViewDetail={setSelectedProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />

      {/* ── Floating Cart ── */}
      {totalItems > 0 && (
        <button
          className="fixed bottom-[90px] right-6 z-[998] w-14 h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-[0_4px_20px_rgba(11,61,107,0.3)] hover:scale-[1.08] hover:shadow-[0_6px_28px_rgba(11,61,107,0.4)] transition-all duration-[250ms]"
          onClick={() =>
            alert("Halaman keranjang akan dibuat di fase berikutnya.")
          }
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
          </svg>
          <span className="absolute -top-1 -right-1 w-[22px] h-[22px] bg-accent rounded-full text-[11px] font-bold flex items-center justify-center border-2 border-white">
            {totalItems}
          </span>
        </button>
      )}

      {/* ── Product Modal ── */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* ── Toast ── */}
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
