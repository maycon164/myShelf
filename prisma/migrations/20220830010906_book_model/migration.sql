-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "yearOfPublication" TEXT NOT NULL,
    "startReading" TIMESTAMP(3),
    "endOfReading" TIMESTAMP(3),
    "numberOfChapters" INTEGER,
    "price" DOUBLE PRECISION NOT NULL,
    "opinion" TEXT NOT NULL DEFAULT '???',
    "whyRead" TEXT NOT NULL,
    "links" TEXT[],
    "image" TEXT,
    "indication" TEXT[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bookId" INTEGER,

    CONSTRAINT "chapter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
