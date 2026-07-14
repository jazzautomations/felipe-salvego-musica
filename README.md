# A Música e a Matemática da Natureza

Landing page para o e-book gratuito de Felipe Salvego — Série Fundamentos da Música, Volume I.

## Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Lucide React** (ícones)

## Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jazzautomations/felipe-salvego-musica)

Ou manualmente:

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repo `jazzautomations/felipe-salvego-musica`
3. Framework: **Next.js** (detectado automaticamente)
4. Deploy

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # Layout global + fontes
│   ├── page.tsx          # Página principal
│   └── globals.css       # Tokens CSS + estilos base
└── components/
    ├── Navbar.tsx         # Header sticky
    ├── Hero.tsx           # Hero + waveform animada
    ├── Waveform.tsx       # Animação SVG das barras
    ├── Hook.tsx           # Seção problema + roda cromática
    ├── ChromaticWheel.tsx # Roda interativa 12 semitons
    ├── Topics.tsx         # Grid 9 capítulos
    ├── Timeline.tsx       # Linha do tempo 4000 anos
    ├── Structure.tsx      # Índice + capas do livro
    ├── QuoteSection.tsx   # Citação Sylvester
    ├── FAQ.tsx            # Perguntas frequentes
    ├── FinalCTA.tsx       # CTA final de download
    ├── RevealOnScroll.tsx # Animação de entrada
    └── Footer.tsx         # Footer
```

## Imagens

- `public/images/hero-poster.png` — Poster promocional
- `public/images/book-covers.png` — Capa frente e verso
- `public/images/felipe-guitar.jpg` — Felipe Salvego tocando

## Local Development

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).
