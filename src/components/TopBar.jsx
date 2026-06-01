export default function TopBar() {
  return (
    <div className="bg-primary text-white text-[13px] py-2">
      <div className="container flex justify-between items-center flex-wrap gap-2">
        <span className="opacity-[0.85]">
          Senin – Sabtu &nbsp;·&nbsp; 07:00 – 20:00 WIB
        </span>
        <a href="tel:+6281283022552" className="flex items-center gap-1.5 font-semibold tracking-[0.3px] text-white no-underline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          0812-8302-2552
        </a>
      </div>
    </div>
  );
}
