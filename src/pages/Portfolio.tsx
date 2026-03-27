import { useEffect } from "react";
import { ExternalLink, Lock, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    url: "https://roaring-marshmallow-9415c8.netlify.app/",
    locked: false,
  },
  {
    id: "app-saas",
    badge: "Tecnologia / Aplicativo",
    title: "Site para Aplicativo",
    type: "Site Institucional",
    desc: "Modelo de site institucional para apresentação de produto digital — ideal para apps, SaaS e plataformas.",
    url: "https://landingpagepadraoo.netlify.app/",
    locked: false,
  },
  {
    id: "studio",
    badge: "Agência / Portfólio",
    title: "Studio — Portfólio de Agência",
    type: "Site Institucional",
    desc: "Modelo editorial minimalista para agências e estúdios criativos — hierarquia tipográfica forte e identidade visual refinada.",
    url: "https://beautiful-bubblegum-25efe2.netlify.app/",
    locked: false,
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

function SitePreview({ url, blur = false }: { url: string; blur?: boolean }) {
  return (
    <div className={`relative h-48 overflow-hidden bg-secondary ${blur ? "opacity-40 blur-sm" : ""}`}>
      <div className="flex items-center gap-1.5 border-b border-border/20 bg-muted/80 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="ml-2 flex-1 truncate rounded bg-background/30 px-2 py-0.5 text-[9px] text-muted-foreground">
          {url.replace("https://", "")}
        </span>
      </div>
      <div className="relative overflow-hidden" style={{ height: "calc(192px - 28px)" }}>
        <iframe
          src={url}
          title="Site preview"
          scrolling="no"
          tabIndex={-1}
          style={{
            width: "1280px",
            height: "900px",
            transform: "scale(0.22)",
            transformOrigin: "top left",
            border: "none",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

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
                <SitePreview url={r.url} blur={r.locked} />

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
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-primary/50 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                        >
                          Ver site <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary"
                        >
                          <Link to="/contato">Quero algo assim →</Link>
                        </Button>
                      </div>
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
