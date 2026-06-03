import { useState, useMemo } from "react";
import { Link } from "react-router";
import products from "../data/products";
import diverseyImages from "../data/diverseyImages";
import wilayah from "../data/wilayah";
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

function formatRupiah(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}

function ProductCard({ product, qty, onAdd, onUpdateQty }) {
  const [imgError, setImgError] = useState(false);
  const imgFile = diverseyImages[product.id];
  const imgSrc = imgFile ? `/images/products/${imgFile}` : null;

  return (
    <div
      className={`bg-surface rounded-[12px] overflow-hidden transition-all duration-200 border ${
        qty > 0 ? "border-primary shadow-[0_0_0_2px_#e8f1fa]" : "border-border"
      }`}
    >
      {/* Image */}
      <div className="w-full h-[130px] bg-[#f8f9fb] flex items-center justify-center overflow-hidden">
        {imgSrc && !imgError ? (
          <img
            src={imgSrc}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <svg
            className="w-8 h-8 stroke-border"
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
        )}
      </div>

      {/* Body */}
      <div className="p-3">
        <div className="text-[12px] font-semibold text-text leading-[1.4] mb-1 line-clamp-2 min-h-[34px]">
          {product.name}
        </div>
        <div className="text-[11px] text-text-tertiary mb-2 truncate">
          {product.unit}
        </div>
        <div className="font-heading text-[13px] font-extrabold text-primary mb-3">
          {formatRupiah(product.price)}
        </div>

        {/* Qty controls */}
        {qty === 0 ? (
          <button
            onClick={() => onAdd(product)}
            className="w-full py-1.5 rounded-[8px] bg-accent text-white font-heading text-[12px] font-semibold transition-colors hover:bg-[#009b62]"
          >
            + Tambah
          </button>
        ) : (
          <div className="flex items-center justify-between gap-1">
            <button
              onClick={() => onUpdateQty(product.id, qty - 1)}
              className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-border-light hover:bg-border transition-colors font-heading font-bold text-text text-[16px] leading-none"
            >
              −
            </button>
            <span className="font-heading font-bold text-[14px] text-text min-w-[24px] text-center">
              {qty}
            </span>
            <button
              onClick={() => onUpdateQty(product.id, qty + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-primary-50 hover:bg-[#d0e3f5] transition-colors font-heading font-bold text-primary text-[16px] leading-none"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EstimasiPage() {
  // ── Location state ──────────────────────────────────────────────────────
  const [provinsiId, setProvinsiId] = useState("");
  const [kotaId, setKotaId] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [isLainnya, setIsLainnya] = useState(false);
  const [provinsiText, setProvinsiText] = useState("");
  const [kotaText, setKotaText] = useState("");
  const [kecamatanText, setKecamatanText] = useState("");

  // ── Product state ────────────────────────────────────────────────────────
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // ── Checkout state ───────────────────────────────────────────────────────
  const [phone, setPhone] = useState("");

  // ── Derived: location ───────────────────────────────────────────────────
  const selectedProvinsi = wilayah.find((p) => p.id === provinsiId);
  const kotaList = selectedProvinsi?.kota || [];
  const selectedKota = kotaList.find((k) => k.id === kotaId);
  const kecamatanList = selectedKota?.kecamatan || [];
  const isGratisOngkir = !isLainnya && !!provinsiId;

  // ── Derived: cart ────────────────────────────────────────────────────────
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const getQty = (id) => items.find((i) => i.id === id)?.qty ?? 0;

  // ── Derived: filtered products ───────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return products.filter((p) => {
      const matchCat =
        activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [searchQuery, activeCategory]);

  // ── Derived: checkout validation ─────────────────────────────────────────
  const hasLocation = isLainnya
    ? provinsiText.trim() && kotaText.trim() && kecamatanText.trim()
    : provinsiId && kotaId && kecamatan;
  const hasItems = items.length > 0;
  const hasPhone = phone.trim().length >= 9;
  const canCheckout = !!(hasLocation && hasItems && hasPhone);

  // ── Handlers ─────────────────────────────────────────────────────────────
  function handleProvinsiChange(val) {
    if (val === "lainnya") {
      setIsLainnya(true);
      setProvinsiId("");
      setKotaId("");
      setKecamatan("");
    } else {
      setIsLainnya(false);
      setProvinsiId(val);
      setKotaId("");
      setKecamatan("");
      setProvinsiText("");
      setKotaText("");
      setKecamatanText("");
    }
  }

  function handleAdd(product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          unit: product.unit,
          qty: 1,
        },
      ];
    });
  }

  function handleUpdateQty(id, newQty) {
    if (newQty <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, qty: newQty } : i)),
      );
    }
  }

  function buildAddress() {
    if (isLainnya) {
      return `Kec. ${kecamatanText.trim()}, ${kotaText.trim()}\n${provinsiText.trim()}`;
    }
    return `Kec. ${kecamatan}, ${selectedKota?.nama || ""}\n${selectedProvinsi?.nama || ""}`;
  }

  function handleCheckout() {
    if (!canCheckout) return;

    const itemLines = items
      .map(
        (i) =>
          `• ${i.name} (${i.unit}) x${i.qty} = ${formatRupiah(i.price * i.qty)}`,
      )
      .join("\n");

    const ongkirLine = isGratisOngkir
      ? "Gratis ✓"
      : "Dikonfirmasi via WhatsApp";

    const msg = [
      "Halo CTA Cleaning Supply! 👋",
      "",
      "Saya ingin estimasi pesanan berikut:",
      "",
      "📦 *PRODUK:*",
      itemLines,
      "",
      `💰 Subtotal : ${formatRupiah(subtotal)}`,
      `🚚 Ongkir   : ${ongkirLine}`,
      `✅ *Total    : ${formatRupiah(subtotal)}*`,
      ...(isLainnya
        ? ["", "*Catatan: total belum termasuk ongkir, mohon konfirmasi.*"]
        : []),
      "",
      "📍 *Alamat Pengiriman:*",
      buildAddress(),
      "",
      `📱 No. HP saya: ${phone.trim()}`,
      "",
      "Mohon konfirmasi ketersediaan stok dan estimasi pengiriman. Terima kasih! 🙏",
    ].join("\n");

    window.open(
      `https://wa.me/6281283022552?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  }

  // ── Select class helper ───────────────────────────────────────────────────
  const selectCls =
    "w-full px-3 py-2.5 border border-border rounded-[8px] text-[14px] text-text bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_#e8f1fa] transition-all cursor-pointer";
  const inputCls =
    "w-full px-3 py-2.5 border border-border rounded-[8px] text-[14px] text-text bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_#e8f1fa] transition-all placeholder:text-text-tertiary";
  const labelCls = "block text-[12px] font-semibold text-text-secondary mb-1.5";

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="page-hero">
        <div
          className="absolute -top-[40%] -right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,168,107,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10">
          <div className="flex items-center gap-1.5 text-[13px] text-white/50 mb-3">
            <Link to="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white/80">Estimasi Biaya</span>
          </div>
          <h1 className="font-heading text-[32px] font-extrabold text-white mb-2 max-md:text-[24px]">
            Kalkulator Estimasi Biaya
          </h1>
          <p className="text-[15px] text-white/65 max-w-[540px] leading-[1.6]">
            Pilih produk, tentukan lokasi pengiriman, dan hitung total biaya
            secara instan — lanjut checkout langsung via WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Main ── */}
      <div className="bg-bg py-10 max-sm:py-6">
        <div className="container">
          <div className="grid grid-cols-[1fr_340px] gap-7 items-start max-lg:grid-cols-1">
            {/* ════════ LEFT COLUMN ════════ */}
            <div className="flex flex-col gap-6">
              {/* ── Step 1: Lokasi ── */}
              <div className="bg-surface border border-border rounded-[16px] p-6 max-sm:p-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-[13px] text-white">
                      1
                    </span>
                  </div>
                  <h2 className="font-heading text-[16px] font-bold text-text">
                    Lokasi Pengiriman
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Provinsi */}
                  <div>
                    <label className={labelCls}>Provinsi</label>
                    <select
                      value={isLainnya ? "lainnya" : provinsiId}
                      onChange={(e) => handleProvinsiChange(e.target.value)}
                      className={selectCls}
                    >
                      <option value="">— Pilih Provinsi —</option>
                      {wilayah.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.nama}
                        </option>
                      ))}
                      <option value="lainnya">Provinsi Lainnya</option>
                    </select>
                  </div>

                  {/* Dropdown: kota + kecamatan (area Jabodetabek/Bandung) */}
                  {!isLainnya && provinsiId && (
                    <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                      <div>
                        <label className={labelCls}>Kota / Kabupaten</label>
                        <select
                          value={kotaId}
                          onChange={(e) => {
                            setKotaId(e.target.value);
                            setKecamatan("");
                          }}
                          className={selectCls}
                        >
                          <option value="">— Pilih Kota —</option>
                          {kotaList.map((k) => (
                            <option key={k.id} value={k.id}>
                              {k.nama}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={labelCls}>Kecamatan</label>
                        <select
                          value={kecamatan}
                          onChange={(e) => setKecamatan(e.target.value)}
                          disabled={!kotaId}
                          className={`${selectCls} disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          <option value="">— Pilih Kecamatan —</option>
                          {kecamatanList.map((kec) => (
                            <option key={kec} value={kec}>
                              {kec}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Text input: luar area */}
                  {isLainnya && (
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className={labelCls}>Nama Provinsi</label>
                        <input
                          type="text"
                          value={provinsiText}
                          onChange={(e) => setProvinsiText(e.target.value)}
                          placeholder="Contoh: Jawa Tengah"
                          className={inputCls}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                        <div>
                          <label className={labelCls}>Kota / Kabupaten</label>
                          <input
                            type="text"
                            value={kotaText}
                            onChange={(e) => setKotaText(e.target.value)}
                            placeholder="Contoh: Kota Semarang"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Kecamatan</label>
                          <input
                            type="text"
                            value={kecamatanText}
                            onChange={(e) => setKecamatanText(e.target.value)}
                            placeholder="Contoh: Semarang Tengah"
                            className={inputCls}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Ongkir badge */}
                {(provinsiId || isLainnya) && (
                  <div
                    className={`mt-4 flex items-center gap-2 px-4 py-2.5 rounded-[8px] text-[13px] font-semibold ${
                      isGratisOngkir
                        ? "bg-accent-light text-[#085041]"
                        : "bg-warning-light text-warning"
                    }`}
                  >
                    {isGratisOngkir ? (
                      <>
                        <svg
                          className="w-4 h-4 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Gratis ongkir untuk area Jabodetabek &amp; Kota Bandung
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Ongkos kirim akan dikonfirmasi via WhatsApp
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* ── Step 2: Pilih Produk ── */}
              <div className="bg-surface border border-border rounded-[16px] p-6 max-sm:p-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-[13px] text-white">
                      2
                    </span>
                  </div>
                  <h2 className="font-heading text-[16px] font-bold text-text">
                    Pilih Produk
                  </h2>
                  {totalItems > 0 && (
                    <span className="ml-auto text-[12px] font-semibold text-accent bg-accent-light px-2.5 py-0.5 rounded-full">
                      {totalItems} item
                    </span>
                  )}
                </div>

                {/* Search */}
                <div className="flex items-center gap-2 bg-bg border-[1.5px] border-border rounded-[10px] px-4 py-2.5 mb-4 transition-all focus-within:border-primary focus-within:shadow-[0_0_0_3px_#e8f1fa]">
                  <svg
                    className="w-4 h-4 shrink-0 stroke-text-tertiary"
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
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-[14px] font-body text-text outline-none placeholder:text-text-tertiary"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-text-tertiary hover:text-text transition-colors"
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
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Category tabs */}
                <div className="flex gap-1 overflow-x-auto scrollbar-none mb-5 max-md:gap-0 border-b border-border-light">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`px-4 py-2 font-heading text-[12px] font-semibold border-0 bg-transparent cursor-pointer border-b-2 -mb-px transition-all whitespace-nowrap max-md:px-3 ${
                        activeCategory === cat.key
                          ? "text-primary border-b-primary"
                          : "text-text-secondary border-b-transparent hover:text-primary"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Product grid */}
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-10 text-text-tertiary text-[14px]">
                    Tidak ada produk yang sesuai.
                  </div>
                ) : (
                  <div
                    className="grid gap-3"
                    style={{
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(155px, 1fr))",
                    }}
                  >
                    {filteredProducts.map((p) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        qty={getQty(p.id)}
                        onAdd={handleAdd}
                        onUpdateQty={handleUpdateQty}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ════════ RIGHT COLUMN: Summary (sticky) ════════ */}
            <div className="sticky top-[84px] max-lg:static">
              <div className="bg-surface border border-border rounded-[16px] p-6 max-sm:p-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-[13px] text-white">
                      3
                    </span>
                  </div>
                  <h2 className="font-heading text-[16px] font-bold text-text">
                    Ringkasan
                  </h2>
                </div>

                {/* Empty state */}
                {items.length === 0 ? (
                  <div className="text-center py-8 text-text-tertiary">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 stroke-border"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                    </svg>
                    <p className="text-[13px]">Belum ada produk dipilih</p>
                  </div>
                ) : (
                  <>
                    {/* Items list */}
                    <div className="flex flex-col gap-0 mb-4 max-h-[260px] overflow-y-auto">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start gap-2 py-2.5 border-b border-border-light last:border-0"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-[12px] font-semibold text-text leading-[1.4] line-clamp-1">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-text-tertiary mt-0.5">
                              x{item.qty} &times; {formatRupiah(item.price)}
                            </div>
                          </div>
                          <div className="text-[12px] font-bold text-text shrink-0 pt-0.5">
                            {formatRupiah(item.price * item.qty)}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Totals */}
                    <div className="border-t border-border pt-3 flex flex-col gap-2">
                      <div className="flex justify-between text-[13px]">
                        <span className="text-text-secondary">Subtotal</span>
                        <span className="font-semibold text-text">
                          {formatRupiah(subtotal)}
                        </span>
                      </div>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-text-secondary">Ongkir</span>
                        {!provinsiId && !isLainnya ? (
                          <span className="text-text-tertiary text-[12px]">
                            — pilih lokasi
                          </span>
                        ) : isGratisOngkir ? (
                          <span className="font-semibold text-accent">
                            Gratis
                          </span>
                        ) : (
                          <span className="font-semibold text-warning text-[11px] text-right max-w-[120px] leading-tight">
                            Dikonfirmasi
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-border-light mt-1">
                        <span className="font-heading font-bold text-[14px] text-text">
                          Total
                        </span>
                        <span className="font-heading font-extrabold text-[20px] text-primary">
                          {formatRupiah(subtotal)}
                        </span>
                      </div>
                      {isLainnya && (
                        <p className="text-[11px] text-warning leading-[1.5] mt-0.5">
                          *Belum termasuk ongkir, akan dikonfirmasi via WA
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Divider */}
                <div className="border-t border-border my-5" />

                {/* Phone input */}
                <div className="mb-4">
                  <label className={labelCls}>Nomor HP / WhatsApp Anda</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 08123456789"
                    className={inputCls}
                  />
                </div>

                {/* Checkout button */}
                <button
                  onClick={handleCheckout}
                  disabled={!canCheckout}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] font-heading font-semibold text-[14px] transition-all duration-200 ${
                    canCheckout
                      ? "bg-accent text-white hover:bg-[#009b62] hover:-translate-y-px shadow-[0_4px_12px_rgba(0,168,107,0.25)]"
                      : "bg-border-light text-text-tertiary cursor-not-allowed"
                  }`}
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Checkout via WhatsApp
                </button>

                {/* Helper text */}
                {!canCheckout && (
                  <p className="mt-2.5 text-[11px] text-text-tertiary text-center leading-[1.5]">
                    {!hasItems
                      ? "Pilih minimal 1 produk terlebih dahulu"
                      : !hasLocation
                        ? "Lengkapi lokasi pengiriman"
                        : "Masukkan nomor HP terlebih dahulu"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
