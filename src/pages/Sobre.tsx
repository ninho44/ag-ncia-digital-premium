import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";

const values = [
  { icon: Award, title: "Resultado", desc: "Cada projeto é pensado para gerar impacto real no seu negócio." },
  { icon: Heart, title: "Qualidade", desc: "Código limpo, design refinado e atenção obsessiva aos detalhes." },
  { icon: Eye, title: "Transparência", desc: "Comunicação clara em cada etapa, sem surpresas." },
  {
    icon: Users,
    title: "Comprometimento",
    desc: "Tratamos seu projeto como se fosse nosso. Porque, de certa forma, é.",
  },
];

const SobrePage = () => {
  useEffect(() => {
    document.title = "Sobre — NewShift Web Studio";
  }, []);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="noise-bg grid-bg flex items-center pt-16">
        <div className="container mx-auto px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Quem <span className="text-primary">somos</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Conheça a filosofia por trás de cada projeto que entregamos.
          </p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Nossa <span className="text-primary">história</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Nascemos da convicção de que a maioria dos sites não funciona. São bonitos, mas não convertem. São modernos,
            mas não geram resultado. A NewShift surgiu para mudar isso — unindo design estratégico, código de alta
            performance e uma obsessão por métricas reais.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Somos desenvolvedores, designers e estrategistas que entendem que um site é uma ferramenta de negócio. Não
            fazemos sites genéricos. Fazemos sites que trabalham enquanto você dorme.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Nossos <span className="text-primary">valores</span>
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="gradient-border rounded-lg bg-card p-7">
                <v.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Methodology */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Nossa <span className="text-primary">metodologia</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Trabalhamos com um processo enxuto e iterativo. Começamos entendendo profundamente o seu negócio, definimos
            a estratégia visual e de conteúdo, desenvolvemos com tecnologias modernas e entregamos um produto final
            testado, otimizado e pronto para performar. Cada etapa é acompanhada de perto por você.
          </p>
        </div>
      </SectionWrapper>

      {/* Team placeholder */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Quem faz <span className="text-primary">acontecer</span>
          </h2>
          <div className="mx-auto mt-10 gradient-border max-w-xs rounded-lg bg-card p-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <span className="font-serif text-2xl font-bold text-primary">F</span>
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Fundador</h3>
            <p className="mt-1 text-sm text-muted-foreground">Desenvolvedor & Designer</p>
          </div>
          <div className="mx-auto mt-10 gradient-border max-w-xs rounded-lg bg-card p-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <span className="font-serif text-2xl font-bold text-primary">F</span>
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Fundador</h3>
            <p className="mt-1 text-sm text-muted-foreground">Desenvolvedor & Designer</p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Vamos construir algo <span className="text-primary">incrível</span>?
          </h2>
          <Button asChild size="lg" className="gold-glow mt-8 font-sans font-semibold">
            <Link to="/contato">
              Fale conosco <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
};

export default SobrePage;
