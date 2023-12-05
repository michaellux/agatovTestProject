-- CreateTable
CREATE TABLE "Time" (
    "id" SERIAL NOT NULL,
    "updated" TEXT NOT NULL,
    "updatedISO" TEXT NOT NULL,
    "updateduk" TEXT NOT NULL,
    "bitcoinId" INTEGER NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bitcoin" (
    "id" SERIAL NOT NULL,
    "disclaimer" TEXT NOT NULL,
    "chartName" TEXT NOT NULL,

    CONSTRAINT "Bitcoin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bpi" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rate_float" DOUBLE PRECISION NOT NULL,
    "bitcoinId" INTEGER NOT NULL,

    CONSTRAINT "Bpi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_bitcoinId_fkey" FOREIGN KEY ("bitcoinId") REFERENCES "Bitcoin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bpi" ADD CONSTRAINT "Bpi_bitcoinId_fkey" FOREIGN KEY ("bitcoinId") REFERENCES "Bitcoin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
