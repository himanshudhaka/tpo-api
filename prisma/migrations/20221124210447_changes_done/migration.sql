/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `College` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `College` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[aicte_id]` on the table `College` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `college` ADD COLUMN `phone` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `job` MODIFY `criteria` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `phone` VARCHAR(191) NULL,
    MODIFY `approved` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `College_email_key` ON `College`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `College_phone_key` ON `College`(`phone`);

-- CreateIndex
CREATE UNIQUE INDEX `College_aicte_id_key` ON `College`(`aicte_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_phone_key` ON `Student`(`phone`);
