# Contexto do Projeto

## Prompt do Professor

Você é um professor especializado em desenvolvimento Full Stack. Estou construindo meu portfólio pessoal do zero para aprender Next.js na prática.

Stack: Next.js 16 + TypeScript + Tailwind + Shadcn/UI + Framer Motion + Lucide + next-themes

Sobre mim (dono do portfólio):
- Nome: Gabriel de Melo Meurer
- Perfil: dev/empreendedor
- Visual: tema claro/escuro, azul como cor principal, sério e que chame atenção
- Quero animações e interatividade em todo o site

Como me ensinar:
- Haja como professor, não entregue código pronto
- Explique a teoria antes de codar
- Me faça pensar e responder perguntas
- Mostre código apenas quando necessário para ilustrar um conceito
- Me corrija quando errar mas valorize meu raciocínio

---

## Design System — Hero (UI/UX Pro Max)

### Estilo
- **Motion-Driven:** animações de entrada, microinterações, scroll effects
- Ferramenta: Framer Motion (já instalado)

### Paleta de Cores
| Papel | Light | Dark |
|---|---|---|
| Background | `#FAFAFA` | `#09090B` |
| Texto | `#09090B` | `#FAFAFA` |
| Acento / CTA | `#2563EB` | `#2563EB` |
| Secundário | `#3F3F46` | `#3F3F46` |

### Tipografia
- Manter **Space Grotesk** (mais profissional que Caveat/Quicksand sugerido pela skill)

### Estrutura do Hero
1. Nome + cargo em destaque
2. Breve descrição
3. CTAs — "Ver Projetos" + "Contato"
4. Foto (a decidir)

### Layout (a decidir)
- [ ] Duas colunas (texto esquerda + foto direita)
- [ ] Centralizado (sem foto ou foto ao fundo)

### Regras de Animação
- Usar `transform` e `opacity` — nunca `width/height/top/left`
- Duração: 150–300ms microinterações, até 600ms para entradas
- Sempre respeitar `prefers-reduced-motion`
- Padrão Framer Motion: `initial → animate` por elemento com `delay` em sequência

### Anti-patterns a Evitar
- Não usar emojis como ícones (usar Lucide)
- Não misturar estilos (manter Motion-Driven em todas as seções)
- Não animar `width/height` — quebra performance

---

## Onde Paramos

### Concluído
- Fonte **Space Grotesk** + `ThemeProvider` configurados
- **Design tokens**: `--primary`/`--ring`/`--sidebar-primary`/`--sidebar-ring` remapeados para o azul de marca (`oklch(54.6% 0.245 262.881)` ≈ `#2563EB`) direto no tema shadcn — sem cor hardcoded espalhada pelo código
- **i18n (Fase 2 concluída)**: `next-intl` com locale por cookie (`NEXT_LOCALE`, sem rota `[locale]`) — `src/i18n/request.ts` lê o cookie, `src/i18n/actions.ts` expõe a server action `setLocale` chamada pela Navbar
- **Navbar responsiva** (`src/components/layout/Navbar.tsx`):
  - Nome à esquerda, links centralizados no desktop, sublinhado animado
  - Menu hamburguer no mobile com `AnimatePresence` + `motion.div`
  - Toggle dark/light com ícone animado (`AnimatePresence`) e `useEffect + mounted` para evitar hydration mismatch
  - Troca de idioma real via `setLocale` (server action) + `router.refresh()`
  - Sem fundo fixo (`bg-*` removido) para o ParticleCanvas aparecer por trás
- **ParticleCanvas** (`src/components/ui/ParticleCanvas.tsx`):
  - Canvas `fixed inset-0 -z-10` (corrigido de `z-0`, que renderizava por cima do conteúdo)
  - 90 partículas, opacidade reduzida (0.35 dark / 0.2 light) para não competir com o texto
  - Loop de animação com `requestAnimationFrame`, quicam nas 4 bordas
  - Usado em `page.tsx`, atrás de todas as seções
- **Hero** (`src/components/sections/Hero.tsx`): foto de perfil circular, eyebrow + nome + cargo + descrição, 3 CTAs (Ver Projetos / Contato / Baixar CV — PDF estático por idioma via `siteConfig.cv`), blob radial pulsante com `bg-primary/10`
- **Todas as seções com conteúdo real**, sincronizado com o LinkedIn atual: About, Skills, Experience, Projects (case FrotaON) e Contact — sem blocos de cor por seção, sem linhas divisórias entre seções
- **Componentização**: `SectionEyebrow`, `useScrollReveal`, `siteConfig` (nome/email/redes/foto/CV) compartilhados entre seções

### Pendências
- ParticleCanvas: shapes por seção (dispersa → forma → dispersa) com lerp — ainda não implementado, é so um fundo ambiente por enquanto
- Deploy na Vercel

---

## Seções Planejadas

| # | Seção | Propósito | Status |
|---|---|---|---|
| 1 | Hero | Primeira impressão — quem você é | ✅ |
| 2 | Sobre | Seu perfil dev/empreendedor | ✅ |
| 3 | Habilidades | Tecnologias que você domina | ✅ |
| 4 | Projetos | Prova do que você constrói (FrotaON) | ✅ |
| 5 | Experiência | Sua trajetória | ✅ |
| 6 | Contato | Como te encontrar | ✅ |

---

## Roadmap de Features

1. **Fase 1:** Portfólio base em PT-BR — concluída
2. **Fase 2:** Internacionalização PT-BR + EN (`next-intl`, cookie-based) — concluída
3. **Fase 3:** Botão de download de currículo em PDF por idioma — concluída (PDF estático pré-gerado, sem export dinâmico)
