import { useEffect } from "react";
import { ExternalLink, Lock, Scale, Smartphone, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ── Project Cards ── */
const projects = [
  {
    id: "primedpo",
    badge: "Tecnologia Jurídica / LGPD",
    title: "PrimeDPO",
    type: "Site Institucional",
    desc: "Plataforma de conformidade LGPD desenvolvida para a administração pública. Foco em credibilidade, autoridade e conversão.",
    link: "https://primedpo.com.br",
    status: "live" as const,
    monogram: "P",
  },
  {
    id: "octo",
    badge: "Finanças Pessoais / App",
    title: "Octo Finance",
    type: "Site para Aplicativo",
    desc: "Site institucional desenvolvido para o aplicativo Octo Finance — apresentação de produto com foco em conversão e download.",
    link: "",
    status: "dev" as const,
    monogram: null,
  },
];

const references = [
  {
    id: "advocacia",
    badge: "Jurídico / Advocacia",
    title: "Landing Page — Escritório de Advocacia",
    type: "Landing Page",
    desc: "Modelo de página corrida para escritórios de advocacia — hierarquia clara, credibilidade e CTA direto para captação de clientes.",
    icon: Scale,
    locked: false,
  },
  {
    id: "app-saas",
    badge: "Tecnologia / Aplicativo",
    title: "Site para Aplicativo",
    type: "Site Institucional",
    desc: "Modelo de site institucional para apresentação de produto digital — ideal para apps, SaaS e plataformas.",
    icon: Smartphone,
    locked: false,
  },
  {
    id: "em-breve",
    badge: "Novo modelo",
    title: "Em breve",
    type: "—",
    desc: "Novo modelo em desenvolvimento. Em breve disponível.",
    icon: Lock,
    locked: true,
  },
];

/* ── Thumbnail components ── */
const MonogramThumb = ({ letter }: { letter: string }) => (
  <div className="flex h-48 items-center justify-center bg-secondary">
    <span className="font-serif text-5xl font-bold text-primary">{letter}</span>
  </div>
);

const OctagonThumb = () => (
  <div className="flex h-48 items-center justify-center bg-secondary">
    <svg
      viewBox="0 0 80 80"
      className="h-16 w-16"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
    >
      <polygon points="26,4 54,4 76,26 76,54 54,76 26,76 4,54 4,26" />
    </svg>
  </div>
);

const IconThumb = ({
  Icon,
  blur = false,
}: {
  Icon: React.ElementType;
  blur?: boolean;
}) => (
  <div
    className={`flex h-48 items-center justify-center bg-secondary ${
      blur ? "opacity-40 blur-[2px]" : ""
    }`}
  >
    <Icon className="h-12 w-12 text-primary" strokeWidth={1.2} />
  </div>
);

/* ── Page ── */
const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Portfólio — NewShift Web Studio";
  }, []);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="noise-bg grid-bg flex items-center pt-16">
        <div className="container mx-auto px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Nosso <span className="text-primary">Portfólio</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Conheça os projetos e modelos desenvolvidos pela NewShift.
          </p>
        </div>
      </section>

      {/* Section 1 — Projetos */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Projetos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Trabalhos desenvolvidos e entregues pela NewShift.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.id}
                className="gradient-border overflow-hidden rounded-lg bg-card"
              >
                {/* Thumbnail */}
                {p.monogram ? (
                  <MonogramThumb letter={p.monogram} />
                ) : (
                  <OctagonThumb />
                )}

                {/* Content */}
                <div className="p-6">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {p.badge}
                  </Badge>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.type}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  <div className="mt-5">
                    {p.status === "live" ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                      >
                        Ver projeto{" "}
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Badge
                        variant="outline"
                        className="border-primary/40 text-primary"
                      >
                        <Construction className="mr-1.5 h-3 w-3" />
                        Em desenvolvimento
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px w-full bg-primary/20" />
      </div>

      {/* Section 2 — Modelos de Referência */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto px-4 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary/60">
            Modelos
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">
            Referências de Estilo
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Modelos desenvolvidos como base de projetos — cada entrega é
            personalizada para o seu negócio.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {references.map((r) => (
              <div
                key={r.id}
                className="gradient-border overflow-hidden rounded-lg bg-card"
              >
                <IconThumb Icon={r.icon} blur={r.locked} />

                <div className="p-6">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {r.badge}
                  </Badge>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{r.type}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>

                  <div className="mt-5">
                    {r.locked ? (
                      <Lock className="h-5 w-5 text-muted-foreground/40" />
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary"
                      >
                        <Link to="/contato">Quero algo assim →</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
};

export default PortfolioPage;
