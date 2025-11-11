
#!/usr/bin/env bash
set -euo pipefail

command -v node >/dev/null 2>&1 || { echo "Node não encontrado. Instale Node 20+"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "npm não encontrado."; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "Docker não encontrado."; exit 1; }

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -f ".env" ]; then
  if [ -f ".env.example" ]; then
    cp .env.example .env
    echo "[setup] .env criado a partir de .env.example"
  fi
fi

docker compose up -d
echo "[setup] Postgres iniciado."

npm install
echo "[setup] Dependências instaladas."

npm run prisma:generate
echo "[setup] Prisma Client gerado."

npm run prisma:migrate || { echo "[setup] prisma:migrate falhou"; exit 1; }

if npm run | grep -q "db:seed"; then
  npm run db:seed || echo "[setup] db:seed falhou (ignorando)"
fi

echo "[setup] pronto. Rode: npm run dev"
