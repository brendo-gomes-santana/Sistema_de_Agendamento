/*
  Warnings:

  - Added the required column `valor` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_de_nascimento` to the `dentistas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "valor" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "dentistas" ADD COLUMN     "data_de_nascimento" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "secretarias" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "servicos" ADD COLUMN     "valor" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "rhs" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "enderco" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rhs_pkey" PRIMARY KEY ("id")
);
