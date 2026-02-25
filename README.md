# Zencode Frontend

Aplicação desenvolvida em Next.js para listagem e cadastro de candidatos.

## Tecnologias Utilizadas

- Next.js
- TypeScript
- React Hooks

##  Estrutura do Projeto

app/
 ├── candidates/
 │    └── page.tsx
 │
components/
 ├── CandidateTable.tsx
 ├── CandidateForm.tsx
 │
services/
 └── api.ts
 │
types/
 └── candidate.ts

##  Como rodar localmente

1. Instalar dependências:
npm install
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add table

2. Criar arquivo .env.local:
NEXT_PUBLIC_API_URL=http://localhost:5000

3. Rodar projeto:
npm run dev

A aplicação estará disponível em:
http://localhost:5000

##  Deploy
Deploy realizado no Render:
[https://zencode-frontend-6dpj.onrender.com]