# Barbearia Alison Rodrigues — Landing page

Landing page premium, responsiva e focada em conversão para a **Barbearia Alison
Rodrigues**, na Vila Velha, Fortaleza (CE). Feita para transformar visitas em
horários marcados no WhatsApp.

> 5,0 no Google · desde 2023 · R. Beta, Vila Velha · corte, barba e acabamento na navalha

## Stack

- **React 19 + TypeScript**
- **Vite 7** (build em arquivo único via `vite-plugin-singlefile`)
- **Tailwind CSS 4** (design tokens em `src/index.css`)
- Fontes **Fraunces** (display) e **Manrope** (texto) via Google Fonts
- Sem backend: o formulário monta a mensagem e abre o WhatsApp

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # valida TypeScript
npm run build      # gera dist/
npm run preview    # serve o build
```

## Estrutura

```
index.html                 # shell, SEO, Open Graph e JSON-LD (BarberShop)
public/img/                # imagens otimizadas (WebP, 2 tamanhos)
assets-src/                # originais das imagens ilustrativas geradas
src/
  data/site.ts             # ⭐ fonte única de conteúdo: contato, horários, serviços, preços, FAQ
  hooks/                   # reveals, scroll spy, status aberto/fechado, contagem
  components/              # Navbar, Hero, SocialProof, Services, Showcase, Benefits,
                           # Testimonials, Pricing, Booking, FAQ, Footer, FloatingActions
  components/ui/           # marca, ícones, estrelas
  index.css                # tema, animações, utilitários
```

## O que editar

Quase tudo está em **`src/data/site.ts`**:

- `business` — nome, telefones, endereço, links do Google Maps, nota e faixa de preço
- `hours` — horários por dia (minutos desde a meia-noite); o site calcula
  "aberto agora" e o próximo horário automaticamente, no fuso de Fortaleza
- `services` / `addOns` — serviços e valores
- `reviews` / `faqs` — depoimentos reais e perguntas frequentes

O formulário de agendamento (`Booking.tsx`) usa esses dados para montar a
mensagem enviada ao WhatsApp.

### Telefones

O perfil do Google Maps informa **(85) 98938-7208** — usado como número
principal em todos os CTAs. A placa/logo da loja e o README antigo trazem
**(85) 98808-6334**, exibido no rodapé como "telefone da loja". Para padronizar
em um único número, ajuste `phoneRaw` / `phoneAltRaw` em `src/data/site.ts`.

## Conteúdo e imagens

- Fotos de clientes e da loja são **fotos reais** da casa (recortadas/otimizadas).
- `assets-src/hero-portrait.jpg`, `detail-fade.jpg` e `tools-still-life.jpg` são
  **imagens ilustrativas geradas** para dar clima de campanha; podem ser trocadas
  por fotos profissionais em `public/img`.
- Preços são **valores de referência** (faixa R$ 20–40 no Google). Confirme a
  tabela com o Alison antes de publicar.

## Acessibilidade e performance

- Skip link, foco visível, `aria-expanded`/`aria-controls` no menu e FAQ,
  `<dialog>` semântico, labels em todos os campos, foco preso no menu mobile
- `prefers-reduced-motion` desliga animações, parallax e marquee
- Imagens em WebP com `srcset`, `loading="lazy"` e dimensões declaradas
- Conteúdo visível sem JavaScript para reveals (classe `reveal-ready` é
  adicionada só quando o JS roda)

## Deploy

O projeto é compatível com Vercel/Netlify (build `npm run build`, output
`dist`) e com GitHub Pages. Em plataformas estáticas, publique a pasta `dist/`.

## Créditos

Design & desenvolvimento: **Bruno Lima** — [(85) 98405-3391](https://wa.me/5585984053391)
