/*
  Warnings:

  - You are about to drop the column `criteria` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `academics` on the `student` table. All the data in the column will be lost.
  - Made the column `salary` on table `job` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_collegeId_fkey`;

-- AlterTable
ALTER TABLE `college` ADD COLUMN `address` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `state` VARCHAR(191) NULL,
    MODIFY `pincode` VARCHAR(191) NULL,
    MODIFY `aicte_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `company` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `state` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `job` DROP COLUMN `criteria`,
    ADD COLUMN `grade` VARCHAR(191) NULL,
    ADD COLUMN `tenthGrade` VARCHAR(191) NULL,
    ADD COLUMN `twelthGrade` VARCHAR(191) NULL,
    MODIFY `salary` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `academics`,
    ADD COLUMN `clgAcademics` VARCHAR(191) NULL,
    ADD COLUMN `tenthGrade` VARCHAR(191) NULL,
    ADD COLUMN `twelveGrade` VARCHAR(191) NULL,
    MODIFY `rollNo` VARCHAR(191) NULL,
    MODIFY `firstName` VARCHAR(191) NULL,
    MODIFY `lastName` VARCHAR(191) NULL,
    MODIFY `branch` VARCHAR(191) NULL,
    MODIFY `approved` BOOLEAN NULL DEFAULT false,
    MODIFY `collegeId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Applied` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentId` INTEGER NOT NULL,
    `collegeId` INTEGER NOT NULL,
    `jobId` INTEGER NOT NULL,
    `status` ENUM('ACCEPTED', 'REJECTED', 'REVIEW') NOT NULL DEFAULT 'REVIEW',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_collegeId_fkey` FOREIGN KEY (`collegeId`) REFERENCES `College`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Applied` ADD CONSTRAINT `Applied_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Applied` ADD CONSTRAINT `Applied_collegeId_fkey` FOREIGN KEY (`collegeId`) REFERENCES `College`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Applied` ADD CONSTRAINT `Applied_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
