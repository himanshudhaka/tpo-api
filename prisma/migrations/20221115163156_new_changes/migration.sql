/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Companies` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `companies` MODIFY `phone` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Companies_email_key` ON `Companies`(`email`);
