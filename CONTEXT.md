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
- Shadcn/UI instalado (`npx shadcn@latest init`) — preset Nova, Tailwind v4, Radix
  - Criou `src/components/ui/button.tsx` e `src/lib/utils.ts`
- `Hero.tsx` implementado com:
  - `'use client'`
  - Framer Motion (`initial`, `animate`, `transition`)
  - Nome, cargo e descrição
  - Sem Tailwind ainda (próximo passo)

### Conteúdo do Hero
- **Nome:** Gabriel de Melo Meurer
- **Cargo:** Desenvolvedor Full Stack
- **Descrição:** Desenvolvedor Full Stack com 2 anos de experiência, trabalhando com React, Next.js, OracleDB, JavaScript, Python

### Próximo passo
1. Adicionar classes Tailwind no Hero (section, h1, h2, p)
2. Verificar qual arquivo importa as seções (provavelmente `src/app/page.tsx`) e testar no browser
3. Depois partir para `layout.tsx` com Navbar e next-themes (tema dark/light)

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
2. **Fase 2:** Internacionalização PT-BR + EN
3. **Fase 3:** Botão de export de currículo em PDF por idioma
