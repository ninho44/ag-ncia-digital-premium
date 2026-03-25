import { Link } from "react-router-dom";
import { LogoFull } from "@/components/Logo";

const Footer = () => (
  <footer className="noise-bg border-t border-border/20 bg-secondary py-16">
    <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3 lg:px-8">
      <div>
        <Link to="/" className="inline-block">
          <LogoFull symbolSize={36} />
        </Link>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Sites que geram resultado. Do design ao código — presença digital com resultado real.
        </p>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/60">Navegação</h4>
        <ul className="space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/servicos", label: "Serviços" },
            { to: "/portfolio", label: "Portfólio" },
            { to: "/sobre", label: "Sobre" },
            { to: "/contato", label: "Contato" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-foreground/60">Contato</h4>
        <p className="text-sm text-muted-foreground">contato@agencia.com.br</p>
        <p className="mt-1 text-sm text-muted-foreground">(19) 971435864 - Rodrigo</p>
        <p className="mt-1 text-sm text-muted-foreground">(19) 995906650 - Lucas</p>
      </div>
    </div>

    <div className="container mx-auto mt-12 border-t border-border/20 px-4 pt-6 lg:px-8">
      <p className="text-center text-xs text-muted-foreground">
        © 2025 NewShift Web Studio. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
