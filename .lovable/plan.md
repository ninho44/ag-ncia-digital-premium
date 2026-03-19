

## Brazilian Web Agency — Professional Multi-Page Website

A premium dark-themed, multi-page website for "AGÊNCIA" — a Brazilian web agency specializing in high-converting websites. Built in Portuguese (BR) with a sophisticated visual identity.

### Visual Identity
- **Dark theme**: Deep charcoal base (#0F1117), warm gold accent (#C9A84C), soft white text (#F5F5F0)
- **Typography**: Inter for body, Playfair Display for headings (via Google Fonts)
- **Effects**: Scroll fade-ins, parallax hero, gold hover underlines, glowing CTAs, animated gradient card borders, route fade transitions
- **Subtle background texture**: faint noise/grain on dark sections

### Pages

**1. Home (`/`)**
- Sticky navbar with logo + nav links + "Solicitar Orçamento" CTA
- Hero with bold headline, two CTAs, animated subtle grid background
- Animated counter social proof bar (projects, clients, years)
- Services preview (3-4 cards with icons)
- Portfolio teaser featuring PrimeDPO project
- Testimonial block with gold quotation marks
- Final CTA dark card section
- Full footer

**2. Services (`/servicos`)**
- Page hero with title/subtitle
- 6 detailed service cards (Landing Pages, Sites Institucionais, Páginas de Vendas, Páginas de Captura, Portfólios, Sites Empresariais) — each with icon, description, benefits, CTA
- 4-step process timeline (Briefing → Design → Desenvolvimento → Entrega)
- Bottom CTA

**3. Portfolio (`/portfolio`)**
- Filter tabs (Todos, Landing Pages, Institucionais, Portfólios)
- Featured PrimeDPO project card with link to primedpo.com.br
- Placeholder "Em breve" cards with lock badges
- Grid layout

**4. About (`/sobre`)**
- Brand story "Quem somos" section
- 4 value cards (Resultado, Qualidade, Transparência, Comprometimento)
- Methodology paragraph
- Placeholder team section
- Bottom CTA

**5. Contact (`/contato`)**
- Two-column layout: contact info left, form right
- Form: Nome, E-mail, WhatsApp, Tipo de projeto (dropdown), Descrição (textarea)
- Basic validation + submit button
- Floating WhatsApp button (pulse animation, all pages)

### Technical Approach
- React Router for multi-page routing with fade transitions (Framer Motion)
- Intersection Observer for scroll animations
- Lucide React for icons
- Tailwind CSS with custom gold/charcoal design tokens
- Mobile-first responsive design with hamburger menu drawer
- Clean component structure: one component per section
- Semantic HTML with per-page meta tags

