interface LogoSymbolProps {
  size?: number;
  className?: string;
}

const LogoSymbol = ({ size = 32, className = "" }: LogoSymbolProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="4" y="4" width="13" height="32" rx="1" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
    <line
      x1="4.75"
      y1="5.25"
      x2="16.25"
      y2="34.75"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <rect x="21" y="4" width="13" height="32" rx="1" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
    <line
      x1="21.75"
      y1="34.75"
      x2="33.25"
      y2="5.25"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/** Variation B — compact navbar logo: symbol + "NEW SHIFT" */
export const LogoNavbar = () => (
  <div className="flex items-center gap-2">
    <LogoSymbol size={28} />
    <span className="text-lg tracking-wide text-primary">
      <span className="font-sans font-light">NEW</span> <span className="font-sans font-semibold">SHIFT</span>
    </span>
  </div>
);

/** Variation C — hero/footer logo: symbol + "NEWSHIFT" + "WEB STUDIO" */
export const LogoFull = ({ symbolSize = 44 }: { symbolSize?: number }) => (
  <div className="flex items-center gap-3">
    <LogoSymbol size={symbolSize} />
    <div className="flex flex-col">
      <span className="font-sans text-xl font-bold uppercase tracking-wide text-primary">NEWSHIFT</span>
      <span className="font-sans text-[0.6rem] font-light uppercase tracking-[0.3em] text-primary/70">WEB STUDIO</span>
    </div>
  </div>
);

export default LogoSymbol;
