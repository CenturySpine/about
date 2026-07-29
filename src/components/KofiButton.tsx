export function KofiButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://ko-fi.com/G2G31YCXGK"
      target="_blank"
      rel="noopener noreferrer"
      title="Support me on ko-fi.com"
      className={`inline-flex items-center gap-1.5 rounded-[7px] px-3 py-2 text-sm font-bold whitespace-nowrap text-white shadow-[1px_1px_0_rgba(0,0,0,0.2)] !no-underline hover:text-[#f5f5f5] hover:opacity-85 ${className}`}
      style={{ backgroundColor: "#72a4f2", fontFamily: "var(--font-quicksand)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://storage.ko-fi.com/cdn/cup-border.png"
        alt=""
        className="kofi-button-icon h-[15px] w-[22px]"
      />
      Support me on Ko-fi
    </a>
  );
}
