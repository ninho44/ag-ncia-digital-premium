interface LogoSymbolProps {
  size?: number;
  className?: string;
}

const LogoSymbol = ({ size = 32, className = "" }: LogoSymbolProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* borda esquerda */}
    <path d="M2 4V36H10" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M2 4H10" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />

    {/* eixo central */}
    <line x1="14" y1="4" x2="14" y2="36" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />

    {/* borda direita */}
    <path
      d="M18 4H26V36"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path d="M18 36H26" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />

    {/* diagonal esquerda */}
    <line x1="3.5" y1="6" x2="13" y2="20" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />

    {/* diagonal direita */}
    <line x1="15" y1="20" x2="24.5" y2="6" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" />
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
