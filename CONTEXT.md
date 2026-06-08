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
- **Navbar responsiva** (`src/components/layout/Navbar.tsx`):
  - Nome à esquerda, links centralizados no desktop (`absolute left-1/2 -translate-x-1/2`)
  - Menu hamburguer no mobile com `AnimatePresence` + `motion.div` (Framer Motion)
  - Dropdown animado com `initial/animate/exit` — entrada e saída suaves
  - Toggle dark/light com `useEffect + mounted` para evitar hydration mismatch
  - Botão PT (i18n visual, sem lógica — Fase 2)
  - Links GitHub e LinkedIn com `react-icons/fa`
  - `overflow-x-hidden` no body para evitar scroll lateral no mobile
  - Commit: `28ddb8b`
- **ParticleCanvas** (`src/components/ui/ParticleCanvas.tsx`):
  - Canvas `fixed inset-0 z-0` — cobre toda a página como fundo
  - 100 partículas com posição e velocidade aleatórias
  - Loop de animação com `requestAnimationFrame`
  - Partículas quicam nas 4 bordas (`vx *= -1` / `vy *= -1`)
  - Canvas dimensionado com `window.innerWidth` / `window.innerHeight`
  - Usado em `page.tsx` antes do Hero
- **Hero** atual (`src/components/sections/Hero.tsx`):
  - Sem `bg-gray-950` (fundo é o ParticleCanvas)
  - `relative z-10` para ficar na frente do canvas
  - Animações em sequência com Framer Motion

### Pendências
- ParticleCanvas: próximo passo é fazer as partículas formarem **shapes por seção** (dispersas → forma → dispersas)
- Hero: layout ainda básico, sem foto
- Navbar: botão PT sem lógica de i18n (intencional, Fase 2)
- Nenhuma seção além do Hero tem conteúdo ainda

### Próximo passo
1. Adicionar `targetX` e `targetY` em cada partícula
2. Definir pontos que formam shapes (pasta para Projetos, etc.)
3. Usar `IntersectionObserver` para detectar qual seção está visível
4. Interpolar posição atual → target com lerp (`x += (targetX - x) * 0.05`)

---

## Seções Planejadas

| # | Seção | Propósito |
|---|---|---|
| 1 | Hero | Primeira impressão — quem você é |
| 2 | Sobre | Seu perfil dev/empreendedor |
| 3 | Habilidades | Tecnologias que você domina |
| 4 | Projetos | Prova do que você constrói |
| 5 | Experiência | Sua trajetória |
| 6 | Contato | Como te encontrar |

---

## Roadmap de Features

1. **Fase 1 (atual):** Portfólio base em PT-BR
2. **Fase 2:** Internacionalização PT-BR + EN (usar `next-intl`)
3. **Fase 3:** Botão de export de currículo em PDF por idioma
