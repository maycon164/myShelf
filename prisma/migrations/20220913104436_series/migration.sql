-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "seasons" INTEGER NOT NULL,
    "image" TEXT,
    "indication" TEXT[],
    "links" TEXT[],
    "notes" JSONB[],

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episodio" (
    "id" SERIAL NOT NULL,
    "seriesId" INTEGER,
    "title" TEXT NOT NULL,
    "numOfEp" INTEGER NOT NULL,
    "notes" JSONB[],
    "watched" TEXT,

    CONSTRAINT "episodio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "episodio" ADD CONSTRAINT "episodio_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "series"("id") ON DELETE SET NULL ON UPDATE CASCADE;
