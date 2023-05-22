/*
  Warnings:

  - Added the required column `data_do_agendamento` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "data_do_agendamento" TEXT NOT NULL;
