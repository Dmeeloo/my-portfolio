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

## Onde Paramos

### Concluído nesta sessão
- Corrigido erro de build: `tw-animate-css` não instalado → instalado via npm
- Fonte trocada para **Space Grotesk** (`next/font/google`, variável `--font-sans`)
- `ThemeProvider` do `next-themes` configurado no `layout.tsx` com `attribute="class"`
- **Navbar** criada em `src/components/layout/Navbar.tsx` com:
  - Nome à esquerda
  - Links centralizados com `absolute left-1/2 -translate-x-1/2` (Sobre, Formação, Experiências, Projetos)
  - Toggle dark/light com ícones Sun/Moon do Lucide
  - Botão PT (i18n visual, sem lógica — Fase 2)
  - Links LinkedIn e Instagram com `react-icons/fa`
  - Dark mode: `bg-white dark:bg-gray-950`
- **Hero** parcialmente estilizado:
  - `bg-gray-950`, `py-24`, `text-center`
  - Framer Motion com `initial={{ opacity: 0, y: -20 }}`, `duration: 1`
  - h1 e h2 lado a lado com flex (ainda tem bug: `item-center` sem s, `gap-150` inválido)

### Pendências / Bugs conhecidos
- Hero: linha 11 tem `item-center` (falta o s) e `gap-150` (não existe) — precisa corrigir
- Hero: h1 e h2 estão muito separados por causa do gap inválido
- Navbar: botão PT sem lógica de i18n (intencional, Fase 2)
- Nenhuma seção além do Hero tem conteúdo ainda

### Próximo passo
1. Corrigir o bug do Hero (`items-center` e `gap-4`)
2. Estilizar melhor o Hero (hierarquia tipográfica, cor do cargo em azul, descrição com `max-w`)
3. Construir a seção **Sobre**

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
