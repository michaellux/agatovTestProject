export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body.disclaimer)
  const bitcoin = event.context.prisma.bitcoin.create({
    data: {
      disclaimer: body.disclaimer,
      chartName: body.chartName,
      updated: body.time.updated,
      updatedISO: body.time.updatedISO,
      updateduk: body.time.updateduk,
      USD: body.bpi.USD.rate_float,
      GBP: body.bpi.GBP.rate_float,
      EUR: body.bpi.EUR.rate_float
    }
  }).catch((e) => {
    console.log("Ошибка")
    console.error(e) 
  })
}
  /* event => event.context.prisma.bitcoin.create({
    data: {
      disclaimer: rawData.disclaimer,
      chartName: rawData.chartName,
      updated: rawData.time.updated,
      updatedISO: rawData.time.updatedISO,
      updateduk: rawData.time.updateduk,
      USD: rawData.bpi.USD,
      GBP: rawData.bpi.GBP,
      EUR: rawData.bpi.EUR
    }
  }) */
)
