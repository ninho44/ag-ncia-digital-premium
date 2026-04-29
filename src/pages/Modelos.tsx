import { useEffect } from "react";
import { ExternalLink, Lock } from "lucide-react";
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
import { references } from "@/data/references";

function ComingSoonCard() {
  return (
    <div className="gradient-border overflow-hidden rounded-lg bg-card">
      <div className="flex h-48 items-center justify-center bg-secondary opacity-40 blur-sm">
        <Lock className="h-12 w-12 text-primary" strokeWidth={1.2} />
      </div>
      <div className="p-6">
        <Badge variant="outline" className="border-primary/30 text-primary">
          Novo modelo
        </Badge>
        <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
          Em breve
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">—</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Novo modelo em desenvolvimento. Em breve disponível.
        </p>
        <div className="mt-5">
          <Lock className="h-5 w-5 text-muted-foreground/40" />
        </div>
      </div>
    </div>
  );
}

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

const ModelosPage = () => {
  useEffect(() => {
    document.title = "Modelos — NewShift Web Studio";
  }, []);

  return (
    <PageTransition>
      <section className="noise-bg grid-bg flex items-center pt-16">
        <div className="container mx-auto px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Nossos <span className="text-primary">Modelos</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Cada entrega é personalizada para o seu negócio.
          </p>
        </div>
      </section>

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

          <div className="relative mt-12 px-4">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-4">
                {references.map((r) => (
                  <CarouselItem key={r.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                    <div className="gradient-border overflow-hidden rounded-lg bg-card h-full">
                      <SitePreview url={r.url} />

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

                        <div className="mt-5 flex flex-wrap items-center gap-3">
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
                      </div>
                    </div>
                  </CarouselItem>
                ))}

                {[1, 2, 3].map((i) => (
                  <CarouselItem key={`coming-${i}`} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                    <ComingSoonCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary/30 text-primary hover:bg-primary/10" />
              <CarouselNext className="border-primary/30 text-primary hover:bg-primary/10" />
            </Carousel>
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
};

export default ModelosPage;
