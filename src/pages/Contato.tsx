import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";
import SectionWrapper from "@/components/SectionWrapper";

const ContatoPage = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipo: "",
    descricao: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.title = "Contato — NewShift Web Studio";
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.nome.trim()) e.nome = "Informe seu nome";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "E-mail inválido";
    }
    if (!form.whatsapp.trim()) e.whatsapp = "Informe seu WhatsApp";
    if (!form.tipo) e.tipo = "Selecione o tipo de projeto";
    if (!form.descricao.trim()) e.descricao = "Descreva seu projeto";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const tiposProjeto: Record<string, string> = {
    landing: "Landing Page",
    institucional: "Site Institucional",
    vendas: "Página de Vendas",
    captura: "Página de Captura",
    portfolio: "Portfólio",
    empresarial: "Site Empresarial",
    template: "Template Adaptado",
    loja: "Loja Virtual",
    redesign: "Redesign de Site",
    auditoria: "Auditoria UX",
    outro: "Outro",
  };

  const formatTipoProjeto = (tipo: string) => tiposProjeto[tipo] ?? tipo;

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const isValid = validate();
    console.log("submit disparou");
    console.log("form válido?", isValid);
    console.log("dados:", form);

    if (!isValid) {
      toast({
        title: "Preencha os campos corretamente",
        description: "Revise os dados do formulário.",
        variant: "destructive",
      });
      return;
    }

    const mensagem = `Olá! Vim pelo site da NewShift.

Nome: ${form.nome}
E-mail: ${form.email}
WhatsApp: ${form.whatsapp}
Tipo de projeto: ${formatTipoProjeto(form.tipo)}

Descrição do projeto:
${form.descricao}`;

    const numero = "5519971435864";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    console.log("url final:", url);

    window.location.href = url;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <PageTransition>
      <section className="noise-bg grid-bg flex items-center pt-16">
        <div className="container mx-auto px-4 py-24 text-center lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Fale <span className="text-primary">conosco</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Vamos conversar sobre seu projeto. Preencha o formulário e retornaremos em breve.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-24" noise>
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-5 lg:px-8">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Vamos conversar sobre seu <span className="text-primary">projeto</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Preencha o formulário ao lado ou entre em contato diretamente pelos canais abaixo.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                contato@newshift.com.br
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                (19) 971435864 - Rodrigo
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                (19) 995906650 - Lucas
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                Descalvado, SP — Brasil
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="gradient-border rounded-lg bg-card p-8 md:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Nome</label>
                <Input
                  value={form.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  placeholder="Seu nome"
                  className="border-border/40 bg-secondary"
                />
                {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">E-mail</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  className="border-border/40 bg-secondary"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">WhatsApp</label>
                <Input
                  value={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="border-border/40 bg-secondary"
                />
                {errors.whatsapp && <p className="mt-1 text-xs text-destructive">{errors.whatsapp}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Tipo de projeto</label>
                <Select value={form.tipo} onValueChange={(v) => handleChange("tipo", v)}>
                  <SelectTrigger className="border-border/40 bg-secondary">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landing">Landing Page</SelectItem>
                    <SelectItem value="institucional">Site Institucional</SelectItem>
                    <SelectItem value="vendas">Página de Vendas</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tipo && <p className="mt-1 text-xs text-destructive">{errors.tipo}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-sm font-medium text-foreground">Descrição do projeto</label>
              <Textarea
                value={form.descricao}
                onChange={(e) => handleChange("descricao", e.target.value)}
                placeholder="Conte-nos mais sobre o que você precisa..."
                rows={4}
                className="border-border/40 bg-secondary"
              />
              {errors.descricao && <p className="mt-1 text-xs text-destructive">{errors.descricao}</p>}
            </div>

            <Button type="submit" size="lg" className="gold-glow mt-8 w-full font-sans font-semibold sm:w-auto">
              Enviar mensagem <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
};

export default ContatoPage;
