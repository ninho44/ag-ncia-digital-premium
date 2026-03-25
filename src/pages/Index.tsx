import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Palette, Code, Zap, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";
import { LogoFull } from "@/components/Logo";

/* ── Animated Counter ── */
function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(end / 40);
          const interval = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(interval);
            } else setCount(start);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <span className="block font-serif text-4xl font-bold text-primary md:text-5xl">{count}+</span>
      <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section className="noise-bg grid-bg relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <LogoFull symbolSize={52} />
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Criamos sites que{" "}
            <span className="text-primary">vendem</span>, convencem e{" "}
            <span className="text-primary">convertem</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Do design ao código — presença digital com resultado real.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gold-glow font-sans font-semibold">
              <Link to="/servicos">
                Ver nossos serviços <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/40 font-sans text-primary hover:bg-primary/10">
              <Link to="/portfolio">Ver portfólio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Social Proof ── */
function SocialProof() {
  return (
    <SectionWrapper className="border-y border-border/20 bg-secondary py-16">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-8">
        <Counter end={50} label="Projetos entregues" />
        <Counter end={35} label="Clientes atendidos" />
        <Counter end={5} label="Anos de experiência" />
        <Counter end={100} label="% de dedicação" />
      </div>
    </SectionWrapper>
  );
}

/* ── Services Preview ── */
const services = [
  { icon: Globe, title: "Sites Institucionais", desc: "Presença digital profissional que transmite credibilidade e gera confiança." },
  { icon: Palette, title: "Landing Pages", desc: "Páginas de alta conversão, projetadas para transformar visitantes em clientes." },
  { icon: Code, title: "Páginas de Vendas", desc: "Copy estratégica combinada com design persuasivo para maximizar resultados." },
  { icon: Zap, title: "Sites Empresariais", desc: "Soluções completas para empresas que precisam de performance e escalabilidade." },
];

function ServicesPreview() {
  return (
    <SectionWrapper className="py-24" noise>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            O que fazemos de <span className="text-primary">melhor</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Serviços pensados para gerar resultado real para o seu negócio.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="gradient-border group rounded-lg bg-card p-6 transition-all hover:-translate-y-1"
            >
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link
                to="/servicos"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Saiba mais <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Portfolio Teaser ── */
function PortfolioTeaser() {
  return (
    <SectionWrapper className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Projeto em <span className="text-primary">destaque</span>
          </h2>
        </div>

        <div className="gradient-border mx-auto max-w-3xl overflow-hidden rounded-lg bg-card">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center bg-secondary p-8 md:w-2/5">
              <span className="font-serif text-3xl font-bold text-primary">PrimeDPO</span>
            </div>
            <div className="p-8 md:w-3/5">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Tecnologia Jurídica / LGPD
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">PrimeDPO</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Site institucional para empresa de consultoria LGPD voltada à administração pública. Projeto técnico com foco em credibilidade e conversão.
              </p>
              <a
                href="https://primedpo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Ver projeto <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Testimonial ── */
function TestimonialSection() {
  return (
    <SectionWrapper className="py-24" noise>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto h-10 w-10 text-primary/40" />
          <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
            "A equipe entendeu exatamente o que precisávamos. O site ficou profissional, rápido e já trouxe resultados nos primeiros dias."
          </blockquote>
          <p className="mt-6 text-sm font-medium text-primary">— Cliente satisfeito</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <SectionWrapper className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="gradient-border mx-auto max-w-3xl rounded-lg bg-card p-10 text-center md:p-16">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Pronto para ter um site que <span className="text-primary">trabalha por você</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Vamos transformar sua presença digital em uma máquina de resultados.
          </p>
          <Button asChild size="lg" className="gold-glow mt-8 font-sans font-semibold">
            <Link to="/contato">
              Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Page ── */
const Index = () => {
  useEffect(() => {
    document.title = "AGÊNCIA — Sites que geram resultado";
  }, []);

  return (
    <PageTransition>
      <HeroSection />
      <SocialProof />
      <ServicesPreview />
      <PortfolioTeaser />
      <TestimonialSection />
      <FinalCTA />
    </PageTransition>
  );
};

export default Index;
