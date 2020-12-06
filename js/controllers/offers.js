export const offers = (ctx) => {
  console.log("offers")
  ctx.partial("../templates/offers.hbs")
}

export const offerInfo = (ctx) => {
  ctx.partial("../templates/offer_info.hbs", {offerId: ctx.params.id})
}
