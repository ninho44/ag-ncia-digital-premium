interface LogoSymbolProps {
  size?: number;
  className?: string;
}

const LogoSymbol = ({ size = 32, className = "" }: LogoSymbolProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* coluna esquerda */}
    <path d="M1 1H11V39H1V1Z" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinejoin="miter" />

    {/* linha central */}
    <line x1="16" y1="1" x2="16" y2="39" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />

    {/* coluna direita */}
    <path d="M21 1H31V39H21V1Z" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinejoin="miter" />

    {/* diagonal esquerda */}
    <line x1="2.5" y1="3" x2="11" y2="20" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />

    {/* diagonal direita */}
    <line x1="21" y1="20" x2="29.5" y2="3" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />
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
