# Bahia Cuida — Observatório dos Cuidados

Repositório do **Bahia Cuida**, uma plataforma web que reúne **dados, visualizações e mapas** sobre o trabalho dos cuidados na Bahia, com foco em tornar o tema mais visível e apoiar a elaboração/monitoramento de políticas públicas.

A aplicação publicada (produção) está em: **[https://bahiacuida.org/](https://bahiacuida.org/)**

---

## Contexto do projeto

[TODO: introduzir contexto do projeto financiado]

O Bahia Cuida se insere no debate sobre **trabalho de cuidado remunerado e não remunerado** e busca:

- organizar e apresentar informações de forma acessível (narrativas, gráficos e mapas);
- integrar indicadores e recortes intersetoriais (ex.: saúde, educação, assistência social, gênero e raça);
- apoiar gestoras/es, pesquisadoras/es e sociedade civil com **informação qualificada** para planejamento e tomada de decisão.

### Parcerias

#### Idealização e Realização

| <img src="assets/logos/ADR_Logo.svg" alt="Agência de Desenvolvimento Regional Sul da Bahia" height="48"> | <img src="assets/logos/Instituto_Foz_Logo.png" alt="Instituto Foz" height="48"> | <img src="assets/logos/OriOro_Logo.png" alt="ORI:ORO" height="48"> |
|:--:|:--:|:--:|

#### Apoio
| <img src="assets/logos/NicBR_Logo.png" alt="Nic.BR" height="48"> | <img src="assets/logos/Ceweb_Logo.png" alt="Ceweb.BR" height="48"> |
|:--:|:--:|


#### Parceria Local

| <img src="assets/logos/Prefeitura_de_Ilheus_Logo.png" alt="Prefeitura de Ilhéus" height="48"> | 
|:--:|
---

## Visão geral do software

Este repositório contém um [**monorepo**](https://yarnpkg.com/features/workspaces?utm_source=chatgpt.com) com dois pacotes principais:

- `@ba-cuida/ba-cuida-ui`: frontend em **[React](https://react.dev/) + [Next.js](https://nextjs.org/)**, responsável pela renderização das páginas públicas, gráficos e mapas. Principais libs:
  - [**Radix UI**](https://www.radix-ui.com/) (componentes de UI)
  - [**Recharts**](https://recharts.github.io/en-US/) (gráficos de barra, pizza, séries temporais, etc)
  - [**react-map-gl**](https://visgl.github.io/react-map-gl/) (adaptado para [**MapLibre GL**](https://maplibre.org/)) para mapas
- `@ba-cuida/ba-cuida-api`: backend baseado em [**Keystone 6**](https://keystonejs.com/docs), responsável por modelagem de dados, API GraphQL, autenticação e painel administrativo.

---

## Estrutura do repositório

### Pastas importantes (resumo)

- Raiz do repositório: configurações do monorepo, scripts globais e padronizações.
- `packages/ba-cuida-ui`: frontend (rotas do Next, UI, visualizações, mapas).
- `packages/ba-cuida-api`: backend (dados, autenticação, admin, endpoints).

### Estrutura detalhada:

```
.
├── packages/
│ └── ba-cuida-ui/      # Frontend (Next.js)
│ │ ├── app/            # Rotas e páginas (App Router)
│ │ ├── components/     # Componentes reutilizáveis de UI
│ │ ├── public/         # Arquivos estáticos
│ │ ├── .storybook/     # Configuração do Storybook
│ │ ├── next.config.mjs # Configuração do Next.js
│ │ ├── tsconfig.json
│ │ └── package.json
│ │
│ ├── ba-cuida-api/    # Backend (Keystone 6)
│ │ ├── app/
│ │ │ ├── auth/        # Lógica de autenticação
│ │ │ ├── db/          # Configuração e acesso ao banco de dados
│ │ │ ├── indicators/  # Modelo de dados dos indicadores
│ │ │ ├── lists/       # Configuração centralizada de listas
│ │ │ ├── server/      # Configuração do servidor HTTP
│ │ │ └── users/       # Lógica de usuários
│ │ ├── auth.ts        # Configuração central de autenticação
│ │ ├── keystone.js    # Entrypoint do app Keystone
│ │ └── package.json
│ │
├── package.json      # Configuração do monorepo e workspaces
├── yarn.lock         # Lockfile geral da aplicação yarn
├── .yarn/
├── .prettierrc       # Configuração do Prettier (formatador)
└── README.md
```

---

## Ambiente de desenvolvimento

### Pré-requisitos

- **Node.js** (recomendado: 20+)
- **Yarn Workspaces** - Gerenciador de pacotes compatível com monorepo - já disponível junto com Node.js e pode ser habilitado via comando `corepack enable`
- **PostgreSQL** - Banco de dados

### Instalação

```bash
# 1. Clone o repositório e entre na pasta:
git clone https://github.com/bahiacuida/ba-cuida
cd ba-cuida

# 2. Ainda na raiz do monorepo, instale as dependências:
yarn install
```

### Configuração de ambiente

Crie os arquivos .env de configuração de variáveis de ambiente.
**Lembre-se! Nunca adicione estes arquivos ao seu repositório git**

#### UI — packages/ba-cuida-ui/.env

```bash
STORYBOOK_MAP_TILER_API_KEY=<CHAVE_DE_API_MAPTILER>
NEXT_PUBLIC_MAP_TILER_API_KEY=<CHAVE_DE_API_MAPTILER>

# Caso se opte por utilizar os indicadores estáticos (ao invés dos dados advindos da API)
NEXT_PUBLIC_INDICATOR_SRC=static

# STORYBOOK_API_URL=http://localhost:4000/api/graphql
# NEXT_PUBLIC_API_URL=http://localhost:4000/api/graphql
```

#### API — packages/ba-cuida-api/.env

```bash
# Cors
CORS_ORIGINS=http://localhost:3000,http://localhost:6006
SESSION_COOKIE_DOMAIN=localhost

SESSION_SECRET=troque-este-valor-por-um-segredo-local

PORT=4000

DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME"

```

---

## Execução em desenvolvimento

Este repositório é um **monorepo (Yarn Workspaces)** com dois serviços:

- **UI**: `@ba-cuida/ba-cuida-ui` (Next.js) — `packages/ba-cuida-ui`
- **API**: `@ba-cuida/ba-cuida-api` (Keystone 6) — `packages/ba-cuida-api`

> Pré-requisito: ter instalado as dependências na raiz com `yarn install`.

### Subir API + UI ao mesmo tempo (recomendado)

Na **raiz** do repositório:

```bash
yarn dev
```

Esse comando executa o script da raiz:

```json
"dev": "yarn workspaces foreach --all --parallel run dev"
```

### Subir apenas a API (backend)

Na raiz do repositório:

```bash
yarn workspace @ba-cuida/ba-cuida-api dev
```

### Subir apenas a UI (frontend)

Na raiz do repositório:

```bash
# Para subir o ambiente next:
yarn workspace @ba-cuida/ba-cuida-ui dev

# OU, caso prefira-se subir apenas o storybook:
yarn workspace @ba-cuida/ba-cuida-ui dev:storybook
```
