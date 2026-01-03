-- CreateTable
CREATE TABLE "Filmes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "anoLancamento" INTEGER NOT NULL,
    "foto" TEXT,
    "sinopse" TEXT,

    CONSTRAINT "Filmes_pkey" PRIMARY KEY ("id")
);
