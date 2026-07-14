# Naty

Plataforma com IA que responde, qualifica e agenda pacientes 24h no WhatsApp, com integração oficial Clinicorp. Feita para clínicas odontológicas e de estética.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + file-based routing + SSR)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) sobre Radix UI
- [Vite 8](https://vite.dev) + [Nitro](https://nitro.build) como servidor de build

## Pré-requisitos

- [Bun](https://bun.sh) (o projeto usa `bun.lock`; não misture com `npm`/`yarn`/`pnpm`)

## Como rodar

```bash
bun install
bun run dev       # inicia o servidor de desenvolvimento
```

Outros scripts disponíveis (ver `package.json`):

```bash
bun run build       # build de produção
bun run build:dev    # build em modo development
bun run preview      # preview do build de produção
bun run lint         # eslint
bun run format       # prettier --write
```

## Estrutura do projeto

```
src/
├── routes/       # rotas (file-based routing do TanStack Router) — ver src/routes/README.md
├── components/   # componentes de UI (inclui src/components/ui, gerado pelo shadcn/ui)
├── hooks/        # hooks React reutilizáveis
├── lib/          # utilitários e lógica compartilhada
└── assets/       # imagens e outros arquivos estáticos importados pelo código
public/           # arquivos estáticos servidos diretamente (favicon, etc.)
```

Consulte [`src/routes/README.md`](src/routes/README.md) para as convenções de roteamento.

## Sobre o `vite.config.ts`

O projeto ainda usa `@lovable.dev/vite-tanstack-config` como base da configuração do Vite — esse pacote já inclui os plugins do TanStack Start, React, Tailwind, tsconfig-paths e Nitro. Não adicione esses plugins manualmente (duplicaria configuração e quebraria o build). Configurações adicionais podem ser passadas via `defineConfig({ vite: { ... } })`.

## Alias de import

Use `@/` para importar a partir de `src/` (configurado em `tsconfig.json` e reconhecido pelo Vite):

```ts
import { Button } from "@/components/ui/button";
```
