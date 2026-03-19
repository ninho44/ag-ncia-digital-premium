import { useEffect, useState } from "react";
import { ExternalLink, Lock } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";

type Category = "todos" | "landing" | "institucional" | "portfolio";

const tabs: { value: Category; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "landing", label: "Landing Pages" },
  { value: "institucional", label: "Institucionais" },
  { value: "portfolio", label: "Portfólios" },
];

const projects = [
  {
    id: 1,
    title: "PrimeDPO",
    category: "institucional" as Category,
    segment: "Tecnologia Jurídica / LGPD",
    type: "Site Institucional",
    desc: "Plataforma de conformidade LGPD desenvolvida para a administração pública. Projeto técnico com foco em credibilidade e conversão.",
    link: "https://primedpo.com.br",
    featured: true,
  },
  ...[
    { title: "Projeto Alpha", category: "landing" as Category },
    { title: "Projeto Beta", category: "institucional" as Category },
    { title: "Projeto Gamma", category: "portfolio" as Category },
    { title: "Projeto Delta", category: "landing" as Category },
    { title: "Projeto Epsilon", category: "institucional" as Category },
  ].map((p, i) => ({
    id: i + 2,
    ...p,
    segment: "",
    type: "",
    desc: "",
    link: "",
    featured: false,
  })),
];

const PortfolioPage = () => {
  const [active, setActive] = useState<Category>("todos");

  useEffect(() => {
    document.title = "Portfólio — AGÊNCIA";
  }, []);

  const filtered = active === "todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="noise-bg grid-bg flex items-center pt-16">
        <div className="container mx-auto px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Nosso <span className="text-primary">Portfólio</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Conheça alguns dos projetos que desenvolvemos com foco em resultado.
          </p>
        </div>
      </section>

      {/* Tabs + Grid */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setActive(t.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active === t.value
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) =>
              p.featured ? (
                <div key={p.id} className="gradient-border col-span-full rounded-lg bg-card sm:col-span-2 lg:col-span-2">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center bg-secondary p-10 md:w-2/5">
                      <span className="font-serif text-3xl font-bold text-primary">{p.title}</span>
                    </div>
                    <div className="p-8 md:w-3/5">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {p.segment}
                      </span>
                      <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{p.type}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                      >
                        Ver projeto <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={p.id} className="gradient-border flex flex-col items-center justify-center rounded-lg bg-card p-10 text-center">
                  <Lock className="h-8 w-8 text-muted-foreground/40" />
                  <span className="mt-4 font-serif text-lg font-semibold text-foreground/50">Em breve</span>
                  <span className="mt-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
};

export default PortfolioPage;
