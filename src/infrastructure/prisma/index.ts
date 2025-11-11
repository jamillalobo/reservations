
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: [{ emit: "event", level: "query" }, "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

;(prisma as any).$on("query", (e: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[prisma] ${e.query} :: ${e.params}`);
  }
});
