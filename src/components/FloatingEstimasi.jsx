export default function FloatingEstimasi() {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById("estimasi-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#estimasi"
      onClick={handleClick}
      title="Hitung Estimasi Biaya"
      className="fixed bottom-6 left-6 z-[998] flex items-center gap-1.5 px-5 py-3 bg-accent text-white rounded-[100px] font-heading text-[13px] font-bold no-underline shadow-[0_4px_20px_rgba(0,168,107,0.35)] transition-all duration-[250ms] hover:bg-primary hover:shadow-[0_6px_24px_rgba(11,61,107,0.35)] hover:scale-[1.05] max-[480px]:left-4 max-[480px]:bottom-4 max-[480px]:text-[12px] max-[480px]:px-4 max-[480px]:py-2.5"
      style={{ animation: "floatPulse 2.5s ease-in-out infinite" }}
    >
      <span className="whitespace-nowrap">Hitung Estimasi Biaya</span>
      <span className="flex" style={{ animation: "bounceArrow 1.5s ease-in-out infinite" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </span>
    </a>
  );
}
