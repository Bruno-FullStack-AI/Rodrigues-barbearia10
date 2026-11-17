# Barbearia Alison Rodrigues — Landing page

Landing page oficial da **Barbearia Alison Rodrigues**, na R. Beta, Vila Velha — Fortaleza (CE).
Construída em **React + Vite + Tailwind CSS 4**, com foco em conversão: agendamento pelo
WhatsApp, prova social do Google, tabela de preços, horários e localização.

> **5,0 no Google** · Ter–Qui 9h–19h · Sex/Sáb 9h–12h · Dom 8h–12h · Seg fechado
> WhatsApp: **(85) 98938-7208**

## Stack

| Item | Tecnologia |
| --- | --- |
| Base | React 19 + TypeScript |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 (`@theme` em `src/index.css`) |
| Fontes | Bebas Neue, Inter e Playfair Display |

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run preview  # confere o build
```

## Estrutura

```
index.html                 # shell da aplicação + SEO/JSON-LD (HairSalon)
src/
  App.tsx                  # ordem das seções
  data/business.ts         # ⭐ contatos, endereço, horários, preços, serviços, FAQ
  utils/hours.ts           # status "aberto/fechado" e horários do agendamento
  hooks/                   # reveal no scroll e status ao vivo
  components/              # Navbar, Hero, Serviços, Galeria, Avaliações,
                           # Agendamento, Horários/Mapa, FAQ, Footer...
public/
  images/                  # fotos usadas no site (otimizadas)
legacy.html                # versão antiga em HTML/CSS puro (arquivo histórico)
css/ · js/ · images/       # assets da versão antiga, usados por legacy.html
```

### Onde editar cada informação

Quase tudo está em **`src/data/business.ts`**:

- telefone e WhatsApp (`phone`)
- endereço e Plus Code (`address`)
- links do Google Maps (`maps`)
- nota e número de avaliações (`rating`)
- horários de funcionamento (`hours`) — o site calcula "aberto agora" e os horários
  do formulário a partir daqui
- serviços, preços e duração (`services`), depoimentos (`reviews`) e FAQ (`faqs`)

O formulário de agendamento **não envia e-mail**: ele monta a mensagem com nome, serviço,
dia, horário e observação e abre o WhatsApp da barbearia. O horário é confirmado pelo barbeiro.

## Deploy

### Vercel (recomendado)

1. Importe o repositório na Vercel.
2. Framework preset: **Vite** → Build `npm run build`, Output `dist`.
3. O site fica publicado na raiz do domínio.

### GitHub Pages

Como a página agora é uma aplicação Vite, é preciso gerar o build antes de publicar
(`dist/index.html` é um único arquivo com CSS e JS embutidos — plugin `vite-plugin-singlefile`).
A versão antiga, em HTML puro, continua disponível em `legacy.html`.

## Informações do perfil

Dados comerciais extraídos do perfil oficial no Google Maps:
*Barbearia Alison Rodrigues — R. Beta, Vila Velha, Fortaleza — CE, 60349-130*.

Site desenvolvido por **Bruno Lima** — [(85) 98405-3391](https://wa.me/5585984053391).
