interface LogoSymbolProps {
  size?: number;
  className?: string;
}

const LogoSymbol = ({ size = 32, className = "" }: LogoSymbolProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Two overlapping diagonal rectangles forming abstract "N/" */}
    <rect
      x="6"
      y="4"
      width="16"
      height="32"
      rx="1"
      transform="rotate(0 6 4)"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="18"
      y="4"
      width="16"
      height="32"
      rx="1"
      transform="rotate(0 18 4)"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Diagonal lines inside creating the "N/" effect */}
    <line x1="10" y1="36" x2="18" y2="4" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <line x1="22" y1="36" x2="30" y2="4" stroke="hsl(var(--primary))" strokeWidth="1.5" />
  </svg>
);

/** Variation B — compact navbar logo: symbol + "NEW SHIFT" */
export const LogoNavbar = () => (
  <div className="flex items-center gap-2">
    <LogoSymbol size={28} />
    <span className="text-lg tracking-wide text-primary">
      <span className="font-sans font-light">NEW</span>{" "}
      <span className="font-sans font-semibold">SHIFT</span>
    </span>
  </div>
);

/** Variation C — hero/footer logo: symbol + "NEWSHIFT" + "WEB STUDIO" */
export const LogoFull = ({ symbolSize = 44 }: { symbolSize?: number }) => (
  <div className="flex items-center gap-3">
    <LogoSymbol size={symbolSize} />
    <div className="flex flex-col">
      <span className="font-sans text-xl font-bold uppercase tracking-wide text-primary">
        NEWSHIFT
      </span>
      <span className="font-sans text-[0.6rem] font-light uppercase tracking-[0.3em] text-primary/70">
        WEB STUDIO
      </span>
    </div>
  </div>
);

export default LogoSymbol;
