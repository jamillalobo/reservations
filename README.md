
# Reservas Starter - CESAR School

Projeto base para a atividade prática de API de Reservas (salas/laboratórios).

Instruções rápidas:

1. Copie `.env.example` para `.env` e ajuste se necessário.
2. Suba o Postgres: `docker compose up -d`
3. Instale dependências: `npm install`
4. Gere Prisma Client: `npm run prisma:generate`
5. Rode migrations: `npm run prisma:migrate`
6. Rode seed: `npm run db:seed`
7. Inicie em dev: `npm run dev`

Arquivos que os alunos devem completar:
- `src/infrastructure/services/reservation.service.ts` (implementar regras de negócio)
- `src/application/controllers/*` (alguns stubs providos; revisar se necessário)
- adicionar testes com curl/Postman e documentar no Notion.
