/*
  Warnings:

  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `yearOfPublication` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "description" TEXT NOT NULL,
DROP COLUMN "yearOfPublication",
ADD COLUMN     "yearOfPublication" TIMESTAMP(3) NOT NULL;
