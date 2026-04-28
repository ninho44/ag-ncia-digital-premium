import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Palette,
  Code,
  Target,
  Briefcase,
  Layout,
  CheckCircle,
  FileSearch,
  PenTool,
  MonitorSmartphone,
  Rocket,
  LayoutTemplate,
  ShoppingCart,
  RefreshCw,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";

const allServices = [
  {
    icon: Palette,
    title: "Landing Pages",
    desc: "Páginas de alta conversão com foco total em uma única ação. Ideais para campanhas, lançamentos e captação de leads.",
    benefits: ["Otimização para conversão", "Design persuasivo", "Carregamento ultra rápido"],
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    desc: "Presença digital profissional que transmite credibilidade, apresenta seus serviços e fortalece sua marca.",
    benefits: ["SEO otimizado", "Design responsivo", "Gestão de conteúdo fácil"],
  },
  {
    icon: Code,
    title: "Páginas de Vendas",
    desc: "Copy estratégica combinada com design persuasivo. Cada elemento planejado para guiar o visitante até a compra.",
    benefits: ["Copywriting estratégico", "Gatilhos mentais", "Prova social integrada"],
  },
  {
    icon: Target,
    title: "Páginas de Captura",
    desc: "Capture leads qualificados com páginas focadas e integração direta com suas ferramentas de e-mail marketing.",
    benefits: ["Integração com CRMs", "Formulários otimizados", "A/B Testing ready"],
  },
  {
    icon: Briefcase,
    title: "Portfólios",
    desc: "Mostre seu trabalho de forma impactante. Projetos organizados, visuais de alto nível e navegação intuitiva.",
    benefits: ["Galeria interativa", "Filtros por categoria", "Performance otimizada"],
  },
  {
    icon: Layout,
    title: "Sites Empresariais",
    desc: "Soluções robustas para empresas que precisam de funcionalidades avançadas, escalabilidade e performance.",
    benefits: ["Arquitetura escalável", "Painel administrativo", "Integrações customizadas"],
  },
  {
    icon: LayoutTemplate,
    title: "Templates Adaptados",
    desc: "Solução de entrada rápida com base pronta e identidade visual do cliente aplicada. Pronto em até 2 dias.",
    benefits: ["Entrega em 1–2 dias úteis", "Identidade visual aplicada", "Revisão incluída"],
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    desc: "Do e-commerce simples ao enterprise. Shopify, WooCommerce ou plataforma customizada com painel de pedidos.",
    benefits: ["Integração com gateway de pagamento", "Painel administrativo", "Treinamento incluso"],
  },
  {
    icon: RefreshCw,
    title: "Redesign de Site",
    desc: "Diagnóstico UX completo do site atual e redesign estratégico para melhorar conversão e credibilidade.",
    benefits: ["Auditoria UX incluída", "Novo design responsivo", "Até 3 revisões"],
  },
  {
    icon: Search,
    title: "Auditoria UX",
    desc: "Análise profunda com heatmaps e relatório executivo com recomendações de melhoria de performance.",
    benefits: ["Relatório + apresentação executiva", "Análise de heatmaps", "Recomendações de CRO"],
  },
];

const steps = [
  { icon: FileSearch, title: "Briefing", desc: "Entendemos seu negócio, objetivos e público-alvo a fundo." },
  { icon: PenTool, title: "Design", desc: "Criamos o layout visual alinhado à sua marca e estratégia." },
  { icon: MonitorSmartphone, title: "Desenvolvimento", desc: "Codificamos com tecnologias modernas, rápidas e seguras." },
  { icon: Rocket, title: "Entrega", desc: "Publicamos, testamos e garantimos que tudo funciona perfeitamente." },
];

const ServicosPage = () => {
  useEffect(() => {
    document.title = "Serviços — NewShift Web Studio";
  }, []);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="noise-bg grid-bg flex items-center pt-16">
        <div className="container mx-auto px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Soluções digitais completas para cada etapa do seu crescimento online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {allServices.map((s) => (
            <div key={s.title} className="gradient-border flex flex-col rounded-lg bg-card p-7">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6 border-primary/30 font-sans text-primary hover:bg-primary/10">
                <Link to="/contato">Solicitar orçamento</Link>
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Como <span className="text-primary">trabalhamos</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-wider text-primary">
                  Etapa {i + 1}
                </span>
                <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Vamos começar o seu <span className="text-primary">projeto</span>?
          </h2>
          <Button asChild size="lg" className="gold-glow mt-8 font-sans font-semibold">
            <Link to="/contato">
              Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
};

export default ServicosPage;
