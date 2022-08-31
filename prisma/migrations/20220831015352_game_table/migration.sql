-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "whyToPlay" TEXT NOT NULL,
    "medias" TEXT[],
    "indication" TEXT[],
    "links" TEXT[],
    "notes" JSONB[],

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);
