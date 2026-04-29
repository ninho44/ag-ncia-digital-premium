export type Reference = {
  id: string;
  badge: string;
  title: string;
  type: string;
  desc: string;
  url: string;
  locked: boolean;
};

export const references: Reference[] = [
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
